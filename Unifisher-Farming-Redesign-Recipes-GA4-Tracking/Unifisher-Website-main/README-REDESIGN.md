# Unifisher Farming website redesign

This is a first implementation pass for the Unifisher Farming Jekyll website. The original logo and green identity are preserved, and the homepage now focuses on mushroom products, the farming story, customer confidence, and direct enquiries.

## Recipe section

The homepage includes six recipe cards linking to individual Jekyll recipe pages: three Indian-inspired recipes and three international dishes. Recipe pages include prep/cook times, servings, ingredients, method, and WhatsApp links. Food images are loaded from Unsplash and require an internet connection.

## Preview locally

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`.

## Before publishing
- Official WhatsApp number is configured as `918967211315` in `_config.yml` (international digits only).
- Confirm product availability, product copy, and future-project wording.
- Review the current photos and replace any that do not represent the business.
- Test the enquiry flow on phones and desktop. The form opens an email draft; it does not send or store form data on the website.
- GitHub Pages cannot execute PHP. This redesign uses a static `mailto:` enquiry form and WhatsApp links; the form opens the visitor's email app and does not deliver submissions by itself.
- Before publishing, preview locally with `bundle install` and `bundle exec jekyll serve`, check all links and images, and confirm GitHub Pages is configured to build from the intended branch/folder.
- To deploy safely, create a new branch (for example `redesign/whatsapp-ready`), upload/commit these reviewed files there, then open a pull request into the currently published branch. Do not replace the live branch until the preview is approved.
- This ZIP has not changed the live site or GitHub repository.


## Google Analytics (GA4)

This package includes the GA4 measurement ID `G-L7BDL51T4S` in `_includes/head.html`. Standard GA4 page views are enabled, and recipe pages emit a `recipe_view` event. Clicks on configured WhatsApp links emit `whatsapp_click` with the link text and page path only; no form fields, names, email addresses, or phone numbers are sent to Analytics.

Before publishing, review and update the site's privacy notice to explain analytics use and applicable choices/consent requirements for your visitors. This package has not been deployed to the live site. After an approved deployment, verify events in Google Analytics' Realtime/Events reports.
