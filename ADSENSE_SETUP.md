# AdSense activation guide

Advertising is **off by default**. The publication, field guides, legal pages and SEO routes are safe to deploy without AdSense credentials. Approval is Google's decision; this architecture does not guarantee it.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | For verification | The real AdSense client in `ca-pub-…` format. Find it in AdSense under **Account → Settings → Account information** or copy it from Google's site connection code. A valid value enables verification metadata and `ads.txt`, but does not serve ads by itself. |
| `NEXT_PUBLIC_ADSENSE_ENABLED` | For ad serving only | Must be exactly `true` before advertising code can load. Keep it `false` during site preparation and review. |
| Manual slot variables | Not implemented until slots exist | Add a separately named public variable for each real slot, then pass it to `AdSlot`. Never reuse or guess an ID. |

A valid client ID means AdSense is **configured**. Ad serving is a separate state that additionally requires `NEXT_PUBLIC_ADSENSE_ENABLED=true`. An absent or malformed client means no Google script, account meta tag, manual unit or authorized `ads.txt` record is emitted, regardless of the enabled flag.

## Script and site verification

The root metadata emits `google-adsense-account` whenever a valid client is configured, including while serving is disabled. `AdSenseScript` requires serving to be enabled and is mounted only by the homepage and canonical `/progress/[slug]` publication routes. It is not present on editorial, legal, utility, error, or 404 routes. No Auto Ads setting is enabled by this code.

## `ads.txt`

`/ads.txt` is generated from the validated client ID whether or not serving is enabled. It emits Google's standard DIRECT record with the publisher number extracted from the real client. With no valid client it returns `404`. After deployment, request `https://future-progress-bar.vercel.app/ads.txt` and confirm the number exactly matches AdSense. Do not create a competing static `public/ads.txt`.

## Recommended site-review workflow

1. Configure the real `NEXT_PUBLIC_ADSENSE_CLIENT`.
2. Keep `NEXT_PUBLIC_ADSENSE_ENABLED=false` while preparing and requesting review.
3. Deploy.
4. Confirm the `google-adsense-account` meta tag exists in page source.
5. Confirm `/ads.txt` returns HTTP 200 with the correct publisher number.
6. Confirm no `pagead2.googlesyndication.com` ad-serving script loads while serving is disabled.
7. Request and complete AdSense site review using this verification setup.
8. Configure the appropriate certified CMP and regional privacy messages in AdSense.
9. Only after approval and privacy configuration, set `NEXT_PUBLIC_ADSENSE_ENABLED=true` if ads are wanted.
10. Verify that, even when enabled, advertising code remains limited to `/` and `/progress/[slug]`.

This workflow supports verification and controlled activation; it does not guarantee AdSense approval.

## Consent and privacy messages

Code alone is not a consent program. Before enabling ads:

1. In AdSense **Privacy & messaging**, configure a Google-certified CMP/message for the EEA, UK and Switzerland and verify its consent-mode behavior.
2. Configure applicable US state privacy messages and opt-out handling.
3. Review global coverage, including Brazilian LGPD expectations, with appropriate professional advice.
4. Publish vendor/purpose disclosures required by the chosen CMP and re-check the privacy page against the actual configuration.
5. Test accept, reject and manage-options paths in relevant test regions. Do not substitute the removed informational cookie banner for a certified CMP.

Google's Privacy & Messaging solution can deliver its configured message through the single AdSense integration. Do not enable personalized advertising before that dashboard work is complete.

## Manual placements

`AdSlot` is ready for a real numeric slot ID and reserves a visually distinct labelled area. No slot ID is committed, so no manual unit currently renders. Proposed maximum placements are:

- desktop: one after the civilization overview and before the detailed field content;
- desktop: optionally one after the complete measurement block;
- mobile: use fewer units, normally only the lower placement;
- editorial/legal pages: no manual ads until their content and traffic justify a separate review.

Never place units inside or next to the prediction modal/form, retired-metric modal, navigation, dropdowns, loading/empty/error/404 views, consent messages, or other action-first surfaces. Do not put units between individual measurement cards.

## Remaining AdSense dashboard work

1. Add and verify the production domain in AdSense.
2. Obtain the real publisher/client ID and configure the environment variables.
3. Complete identity, payment and tax steps requested by Google.
4. Configure the certified CMP and regional privacy messages.
5. Decide whether Auto ads will be disabled or tightly controlled; exclusions should protect all utility surfaces above.
6. Create real responsive manual units only if the proposed placements are wanted, then add explicit per-slot environment variables.
7. Deploy, verify the page source/account tag and `/ads.txt`, and check browser/network consoles with advertising both enabled and disabled.
8. Submit the site for review. Do not represent this checklist as an approval guarantee.
