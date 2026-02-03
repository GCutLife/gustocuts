# cultural-currency-presents.github.io
Brand website.

# 📀 Cultural Currency | Link-in-Bio 📀

The official high-performance, mobile-optimized landing page for [culturalcurrency.vip](https://culturalcurrency.vip).

## 🚀 Key Features
- **Dynamic Content:** Powered by Google Sheets API v4 for real-time link updates without code changes.
- **Brand Aesthetic:** Custom vinyl-spin CSS animation and lo-fi grainy texture overlay.
- **Analytics:** Privacy-first tracking via Umami Cloud.
- **Lead Gen:** Guestlist signup integrated with Formspree.

## 🛠 Tech Stack
- **Hosting:** GitHub Pages
- **Frontend:** HTML5, CSS3 (Flexbox), Vanilla JavaScript
- **Data Source:** Google Sheets API
- **Icons:** FontAwesome 6.0 (CDN)

---

## ⚙️ Admin & Updates

### Updating Links
To update the buttons on the site, do not edit the code. Instead:
1. Open the **Cultural Currency Links** Google Sheet.
2. Edit **Column A** (Button Text), **Column B** (URL), or **Column C** (FontAwesome Icon Name).
3. Changes go live instantly (or upon page refresh).

### Form Submissions
Emails from the "Join the Guestlist" form are routed through **Formspree**. 
- **Dashboard:** [https://formspree.io/](https://formspree.io/)
- **Target Email:** hello@culturalcurrency.vip

---

## 📂 Project Structure
- `index.html` — The main application shell.
- `thanks.html` — Post-signup confirmation page.
- `logo.png` — The "Vinyl" asset used for the spinning animation.
- `og-image.jpg` — The metadata image for social media previews.

## 📝 Maintenance Notes
- **API Key:** The Google Sheets API key is restricted to the `culturalcurrency.vip` domain for security.
- **Social Sharing:** To update the social preview, replace `og-image.jpg` with a new 1200x630px image.
