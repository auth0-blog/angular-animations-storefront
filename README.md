# Angular Animations Storefront

> A showcase of angular animations in the context of an ecommerce site

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:4200
npm run start

# build for production
npm run build
```

## Branches

There are 2 main branches that is used in the repo:

- `starter`: Without the animations
- `animated`: With animations

## Notes

### Ugly relative import paths

There was an issue I ran into with absolute paths or predefined paths from tsconfig when running this application on Stackblitz/CodeSandbox

### core-js dependency

This was an issue on CodeSandbox where the application won't compile if it was missing this dependency and its corresponding import on `main.ts`. This shouldn't be required when doing developing outside of the CodeSandbox environment

### Tailwind import in index.html

This is an issue with Stackblitz where it is not able to use `ngneat/tailwind` which is added through npm. You can remove the following line from `index.html` when developing locally.

```html
<link
  href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
  rel="stylesheet"
/>
```

Because its using index.html to add Tailwind, it no longer respects the config in `tailwind.config.js`. I've duplicated the modifications I made on `tailwind.config.js` to `styles.scss` so the application looks and feels the same on both Stackblitz/CodeSandbox and locally.
