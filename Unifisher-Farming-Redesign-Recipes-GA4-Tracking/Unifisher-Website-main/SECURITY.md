# Security Policy

## Reporting a vulnerability

Please do not publish sensitive vulnerability details in a public issue. Contact the site maintainers at **info@unifisher.com** with a description of the issue and steps to reproduce it. Do not include passwords, private customer data, or other secrets in a report.

## Deployment notes

- This repository is a Jekyll/static website. GitHub Pages does not execute PHP files.
- The enquiry form in the current redesign opens a prefilled email in the visitor's email application; the site itself does not receive or store form submissions.
- Do not add API keys, email-provider credentials, access tokens, or private customer information to this repository.
- The official business WhatsApp number is configured in `_config.yml` as `918967211315` (international digits only).
- If a server-side enquiry endpoint is added later, use a supported backend, validate inputs server-side, add spam/rate limiting controls, and keep credentials in the hosting provider's secret configuration.
