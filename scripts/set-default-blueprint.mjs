import fs from 'node:fs';

const indexPath = process.argv[2];

let html = fs.readFileSync(indexPath, 'utf8');

const defaultBlueprint = `
<script>
(function () {
    const params = new URLSearchParams(window.location.search);

    // Allow users to open a blank Playground when requested.
    if (
        !params.has('blueprint-url') &&
        !params.has('blank')
    ) {
        const url = new URL(window.location.href);

        url.searchParams.set(
            'blueprint-url',
            new URL(
                '/blueprints/accessibility.json',
                window.location.origin
            ).href
        );

        window.location.replace(url.toString());
    }
})();
</script>
`;

if (!html.includes('blueprints/accessibility.json')) {
    html = html.replace('</head>', `${defaultBlueprint}</head>`);
}

fs.writeFileSync(indexPath, html);
