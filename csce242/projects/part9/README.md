# Midnight Arcade — React

This is the React version of the Midnight Arcade project. Each HTML file is an
entry point for a page, and each entry point renders its matching React page.
Shared layout, catalog cards, timeline events, and soundtrack rows live in
`src/components`; page content and page-specific styles live in `src/pages`.
The image components reuse the original Part 7 pictures.

From the repository root, install dependencies and start the development server:

```sh
npm install
npm run dev
```

Build the six pages and their assets for deployment with:

```sh
npm run build
```

The build is written to `dist`. The mobile navigation is displayed vertically;
there is no toggle button. Contact forms and embedded players are not included.
