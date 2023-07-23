# verbasizer

Verbasizer website

## 💻 Development

If you want to improve the package or you are just curious on how it works, follow this section.

### 🗂 Folders structure

```yaml
.
├── .github     # github actions
├── .husky      # git hooks
├── config      # configuration files for rollup, lint-staged and playwright
├── dist        # [AFTER npm run build] built package, to be used in the browser
├── docs        # [AFTER npm run docs] documentation
├── lib         # [AFTER npm run build] built package, to be used with node.js
├── public      # base folder used by the dev web server
├── src         # source code
├── tests       # unit and end to end tests
└── README.md   # THIS FILE
```

### 🧾 Requirements

- [node.js >=14.x](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (or similar package manager)

#### Notable dev-dependencies

- [typescript](https://www.typescriptlang.org/) to make programming decent
- [rollup.js](https://rollupjs.org/guide/en/) for building the package

### 🔧 Setup

Install the dependencies with

```bash
npm install
```

### 🌐 Standalone web server

To play around and see for yourself any changes to the library, you can use the integrated web server.
Just run

```bash
# Allows live reload by refreshing the page
npm run start:dev
```

### 🧱 Build

Make sure everything is clean by running

```bash
npm run clean
```

then all the versions of the package can be built with the command

```bash
npm run build
```
