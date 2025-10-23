CREATE TABLE IF NOT EXISTS t_p76643111_draft_agency_site_cr.contact_requests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_contact_requests_created_at ON t_p76643111_draft_agency_site_cr.contact_requests(created_at DESC);
