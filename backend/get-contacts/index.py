import json
import os
import psycopg2
from typing import Dict, Any
from datetime import datetime

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Get all contact form submissions from database
    Args: event with httpMethod GET, optional query params: limit, offset
    Returns: List of contact requests with pagination info
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Key',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    query_params = event.get('queryStringParameters') or {}
    limit = int(query_params.get('limit', 50))
    offset = int(query_params.get('offset', 0))
    
    db_url = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(db_url)
    cur = conn.cursor()
    
    cur.execute("SELECT COUNT(*) FROM t_p76643111_draft_agency_site_cr.contact_requests")
    total = cur.fetchone()[0]
    
    cur.execute(
        """
        SELECT id, name, email, phone, message, created_at 
        FROM t_p76643111_draft_agency_site_cr.contact_requests 
        ORDER BY created_at DESC 
        LIMIT %s OFFSET %s
        """,
        (limit, offset)
    )
    
    rows = cur.fetchall()
    contacts = []
    
    for row in rows:
        contacts.append({
            'id': row[0],
            'name': row[1],
            'email': row[2],
            'phone': row[3],
            'message': row[4],
            'created_at': row[5].isoformat() if row[5] else None
        })
    
    cur.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'contacts': contacts,
            'total': total,
            'limit': limit,
            'offset': offset
        })
    }
