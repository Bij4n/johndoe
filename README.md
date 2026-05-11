# Fake Person Generator

A client-side random US identity generator for software testing and development. Generates realistic fake profiles with personal info, contact details, employment, and credit card data — all client-side, no server required, no build process.

> **Disclaimer:** All generated data is entirely fictional. Any resemblance to real people is purely coincidental. For software testing and development use only.

---

## Features

- **Personal** — Full name with optional middle name (~80% of profiles), gender, date of birth, age (always 18–75)
- **Contact** — Email, phone, street address with optional apartment/unit (~35% of profiles), real USPS-valid city/state/zip combinations, country
- **Employment** — Job title and company always matched by industry sector (a nurse won't show up at a law firm)
- **Financial** — Visa, Mastercard, Amex, and Discover card numbers with valid Luhn check digits; expiry in both MM/YY and MM/YYYY formats
- **Diverse names** — Draws from a broad cross-section of American names including Hispanic/Latino, Black American, South Asian, East Asian, and Middle Eastern backgrounds
- **Copy** — Individual field copy buttons plus "Copy All" for the complete profile
- **CSV export** — Export the current person, or bulk-generate and download up to 500 people at once

---

## Running locally

### Option 1 — open directly

Open `index.html` in your browser. Most functionality works on `file://`.

### Option 2 — local server (recommended)

Some browsers restrict the Clipboard API on `file://` URLs. Serving over localhost avoids that:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

---

## Running the tests

Open `test/SpecRunner.html` in your browser. The Jasmine 5 test suite covers all generator functions and validates data integrity across every state.

---

## Tech stack

| Dependency | Version | Purpose |
|---|---|---|
| [jQuery](https://jquery.com) | 3.7.1 | DOM manipulation |
| [Bootstrap](https://getbootstrap.com) | 5.3.3 | Layout and UI components |
| [Bootstrap Icons](https://icons.getbootstrap.com) | 1.11.3 | Icons |
| [Jasmine](https://jasmine.github.io) | 5.1.1 | Test framework |

All loaded from CDN. No npm, no bundler, no build step.

---

## Contributing

Contributions are welcome. Before opening a pull request, please read the guidelines below.

### Getting started

1. Fork the repository on GitHub
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Open `test/SpecRunner.html` in a browser and confirm all specs pass
5. Push your branch and open a pull request against `master`

### Guidelines

**Keep it vanilla.** This project uses plain ES5 JavaScript with no build tooling. Contributions must not introduce npm packages, a bundler, or a transpilation step. If it requires `npm install` it doesn't belong here.

**Use ES5 style.** `var` not `let`/`const`, no arrow functions, no template literals. This keeps the project runnable directly in any browser without a build step.

**Test generator logic.** New generator functions need corresponding Jasmine specs in `test/spec/GeneratorSpec.js`. Data-only changes (names, zip codes, companies) should update the assertions in `test/spec/DataSpec.js`.

**Keep PRs focused.** One concern per pull request. A PR that adds a data field, updates the UI, and changes the export format is three PRs.

**Don't break the copy/export contract.** The CSV column order and the "Copy All" plain-text format are stable interfaces. If you add a new field, append it — don't reorder existing fields.

### What we're looking for

- More names to improve demographic diversity
- Additional US cities and zip codes for under-represented states
- Bug fixes and spec improvements
- Accessibility improvements to the UI

### Roadmap

- 🇨🇦 Canada profiles
- 🇬🇧 UK profiles

---

## License

[MIT](LICENSE) © 2026 Bij4n
