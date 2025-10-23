import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Track and return website visit count
    Args: event with httpMethod (GET to retrieve, POST to increment)
    Returns: JSON with current visit count
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    db_url = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(db_url)
    cur = conn.cursor()
    
    if method == 'POST':
        cur.execute(
            "UPDATE t_p76643111_draft_agency_site_cr.site_stats SET visit_count = visit_count + 1, last_updated = CURRENT_TIMESTAMP WHERE id = 1"
        )
        conn.commit()
    
    cur.execute("SELECT visit_count FROM t_p76643111_draft_agency_site_cr.site_stats WHERE id = 1")
    result = cur.fetchone()
    visit_count = result[0] if result else 0
    
    cur.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({'visits': visit_count})
    }
