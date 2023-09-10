# Coach web

Coach Web App to enable coaches to connect with clients.

## Requirements

Node 18 or greater is required.

## Quick start

Clone coach web app :

```shell
git clone git@github.com:Pluma-Health/coach-web.git
```

## Running the project

Assuming you have all the requirements installed, you can run the project by running:

### Available scripts

- `npm install` is used to install all dependencies for a project
- `npm run dev` to start the metro bundler, in a dedicated terminal

## Tech Stack

Here's a list of the core dependencies in the **`package.json`**.

### Core

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/docs)

## App structure

This project uses the **kebab-case** (hyphen separated) naming convention for the file names. The file name contains only lowercase letters, and has dashes between words (dropdown-menu.js).

```
├── app
│   ├── layout.js
│   └── page.js
├── components
│   ├── shared
│   │   ├── alert.js
│   │   ├── button.js
│   │   ├── dropdown-menu.js
│   │   └── ...
│   ├── header.js
│   ├── drawer.js
│   └── ...
├── lib
│   └── constants.js
│   └── utils.js
├── styles
│   └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── jsconfig.json
```
