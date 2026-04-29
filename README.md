# Portfolio (Vanilla HTML/CSS/JS)

Production-ready portfolio refactor using modular HTML partials, split CSS architecture, JSON-driven content, and ES modules.

## Structure

```text
.
|-- index.html
|-- assets/
|   |-- images/
|   |   |-- dev.png
|   |   `-- projects/
|   `-- icons/
|       `-- skills/
|-- sections/
|   |-- navbar.html
|   |-- hero.html
|   |-- skills.html
|   |-- projects.html
|   |-- contact.html
|   `-- footer.html
|-- css/
|   |-- main.css
|   |-- variables.css
|   |-- navbar.css
|   |-- hero.css
|   |-- skills.css
|   |-- projects.css
|   |-- contact.css
|   |-- footer.css
|   `-- responsive.css
|-- js/
|   |-- main.js
|   |-- navbar.js
|   |-- projects.js
|   |-- skills.js
|   `-- utils.js
`-- data/
	|-- projects.json
	`-- skills.json
```

## How It Works

- `index.html` is the app shell.
- `js/main.js` fetches and injects section partials from `sections/`.
- Skills and projects are rendered from JSON data files (`data/skills.json` and `data/projects.json`).
- CSS is split by concern/section and imported through `css/main.css`.

## Local Run

Run with a local server (for `fetch()` support). Example: VS Code Live Server.

## Notes

- Built with no framework and no build tooling.
- Modular organization keeps it easy to scale toward React/Next.js later.
