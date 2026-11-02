# HomeScript – WordPress Playground Demos

A browser-based WordPress demo environment powered by [WordPress Playground](https://wordpress.org/playground/).

This project provides ready-to-use WordPress environments for demonstrating HomeScript plugins and other WordPress solutions. Visitors can explore a working WordPress installation directly in their browser without setting up a local server or installing WordPress themselves.

**Live demo:** https://demoplay.homescriptone.com

## Features

- Browser-based WordPress environments.
- Automated builds and deployments through GitHub Actions.
- Preconfigured WordPress installations using Playground Blueprints.
- Automatic plugin installation and activation.
- Preconfigured plugin settings.
- No traditional PHP hosting or database server required for visitors.
- Reproducible demo environments.

## How it works

This repository uses the official WordPress Playground project as its runtime.

During deployment, GitHub Actions:

1. Checks out this configuration repository.
2. Checks out the official WordPress Playground repository.
3. Installs the Playground dependencies.
4. Builds the Playground website.
5. Copies the project's Blueprints into the generated website.
6. Configures the default Blueprint.
7. Deploys the generated website to GitHub Pages.

Cloudflare handles the custom domain and can provide additional caching and performance optimizations.

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── blueprints/
│   └── accessibility.json
├── scripts/
│   └── set-default-blueprint.mjs
└── README.md
```

- `blueprints/`: WordPress Playground configurations.
- `scripts/`: Scripts used to prepare the Playground website.
- `.github/workflows/`: Automated build and deployment configuration.

## Available demos

| Demo | Description |
|---|---|
| Accessibility Widget | WordPress installation with the Accessibility Widget plugin installed, activated and configured. |

## Adding a new demo

To introduce another plugin demo:

1. Create a new Blueprint inside `blueprints/`.
2. Define the WordPress installation and plugin setup steps.
3. Configure the plugin using the appropriate WordPress options or supported setup procedure.
4. Test the Blueprint in WordPress Playground.
5. Add the demo to the available demos list in this README.
6. Commit and push your changes.

Each Blueprint should be independently testable and should not depend on settings from another demo.

## Development

The WordPress Playground source is checked out separately during the GitHub Actions build.

The deployment workflow is responsible for installing dependencies, building the website, preparing the Blueprints and publishing the generated output.

For local Blueprint testing, use the official [WordPress Playground documentation](https://wordpress.github.io/wordpress-playground/).

## Deployment

Deployment is automated through GitHub Actions.

Pushing changes to the configured deployment branch triggers a new build and deployment.

The published website is served through GitHub Pages using the custom domain:

`demoplay.homescriptone.com`

## Caching

The deployment should distinguish between HTML documents and static assets:

- HTML documents should be revalidated so visitors receive the latest build.
- Versioned JavaScript and CSS assets can use long-lived browser caching.
- Blueprint JSON files should use short-lived caching or revalidation.

Cloudflare Cache Rules can be used to manage these policies.

## Troubleshooting

**Changes are not appearing in the demo**

- Confirm that the latest GitHub Actions deployment succeeded.
- Hard-refresh the browser.
- Check Cloudflare cache settings.
- Check whether the browser is reusing an existing Playground instance.

**A Blueprint fails to execute**

- Validate the Blueprint JSON.
- Check PHP syntax in `runPHP` steps.
- Confirm that the plugin is installed before configuring its options.
- Verify that the option names and settings structure match the installed plugin version.

## Technologies

- [WordPress Playground](https://wordpress.org/playground/)
- [WordPress Blueprints](https://wordpress.github.io/wordpress-playground/blueprints/)
- GitHub Actions
- GitHub Pages
- Cloudflare

---

Maintained by [HomeScript](https://homescriptone.com/).
