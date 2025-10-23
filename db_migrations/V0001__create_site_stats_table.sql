CREATE TABLE IF NOT EXISTS t_p76643111_draft_agency_site_cr.site_stats (
    id SERIAL PRIMARY KEY,
    visit_count INTEGER NOT NULL DEFAULT 0,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO t_p76643111_draft_agency_site_cr.site_stats (visit_count) VALUES (0);
