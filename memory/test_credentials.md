# Test Credentials
# Agent writes here when creating/modifying auth credentials (admin accounts, test users).
# Testing agent reads this before auth tests. Fork/continuation agents read on startup.

## Portfolio site — no authentication
This app has NO login, accounts, or protected routes. Everything is public.

- Public URL: https://platform-ops-hub-1.preview.emergentagent.com
- Backend health: GET /api/ → {"message": "Shanu Abhishek — portfolio API", "status": "operational"}
- Resume PDF (static asset): /assets/Shanu_Abhishek_Resume.pdf
- Contact links used in UI: mailto:shanuabhishek60@gmail.com, https://www.linkedin.com/in/shanuabhishek
- Key data-testids: nav-logo, hero-view-work-button, hero-resume-button, workflow-step-1..9,
  investigation-step-01..08, investigation-prev/next, lua-line-1..13, automation-tab-before/automation/after,
  simulate-alert-button, reset-simulation-button, skill-category-*, kb-search-input, kb-article-1..5,
  system-status-teamcenter/monitoring/notification-engine/automation, contact-resume-download,
  contact-email-button, contact-copy-email, contact-linkedin-button, nav-mobile-toggle
