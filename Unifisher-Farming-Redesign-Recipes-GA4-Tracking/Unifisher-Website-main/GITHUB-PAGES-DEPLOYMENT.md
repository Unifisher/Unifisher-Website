# Safe deployment to GitHub Pages

## Before you publish
1. Keep the current published branch unchanged while reviewing this redesign.
2. Check `_config.yml`: the site URL is `https://www.unifisher.com` and the WhatsApp number is configured as `918967211315`.
3. Run a local build with Ruby/Bundler:
   ```sh
   bundle install
   bundle exec jekyll build
   bundle exec jekyll serve
   ```
4. Test mobile navigation, every WhatsApp CTA, product links, contact validation, keyboard navigation, recipe cards, all six individual recipe pages, and image loading.
5. Check that all six recipe pages are generated under `/recipes/` and the recipe cards link to the correct pages.
6. Confirm that the `CNAME` file still contains `www.unifisher.com`.

## Recommended release flow
1. Create a branch named `redesign/whatsapp-ready` from the currently published branch.
2. Add the reviewed redesign files to that branch, preserving any newer production changes.
3. Open a pull request into the configured GitHub Pages source branch.
4. Review the GitHub Actions/build result and preview the site before merging.
5. Merge only after approval, then verify `https://www.unifisher.com` and the custom-domain HTTPS status.

## Important form limitation
GitHub Pages serves static files and does not execute PHP. The current form uses `mailto:info@unifisher.com`, which opens the visitor's email application; it does not submit to a website server. If direct form delivery is required, integrate a form service compatible with static sites or a separate backend, with spam protection. Never put API keys or private credentials in the repository.
