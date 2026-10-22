# Unifisher Farming website redesign

## Included
- Added a responsive “Cook with Unifisher” homepage section and six individual recipe pages (Indian and international).
- Reworked responsive homepage and navigation while preserving the original `img/logos/unifisher-logo.svg` and green brand identity.
- Reused existing site photography for mushroom and farming sections.
- Added product enquiry links and WhatsApp CTA wiring.
- Added an enquiry form that validates fields in the browser and opens a prefilled email to `info@unifisher.com`. It does not send/store data on the website.
- Updated page metadata, keyboard skip link, responsive navigation, reduced-motion support and security notes.

## Required before publishing
1. Official WhatsApp number is configured in `_config.yml` as `918967211315`; all `.js-whatsapp-link` links should now open WhatsApp with a prefilled enquiry message.
2. Confirm product names, availability, descriptions, and whether dragon fruit is still a planned project.
3. Replace/add real farm/product photos if the current images are not representative. Existing imagery has been retained for this first pass.
4. Test `mailto:` enquiries on mobile and desktop. The visitor's email app must be configured. For reliable website form delivery without an email app, add a server-side form provider/backend and spam protection.
5. GitHub Pages does not run PHP. The contact form opens a prefilled email draft; it does not send/store form data on the website. For reliable direct delivery, add a compatible form service and spam protection.
6. Preview the Jekyll site locally, check links/images and verify the GitHub Pages build pipeline before publishing. No live website or default branch has been changed by this ZIP deliverable.
