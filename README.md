# React Tailwind GH-Pages

This is a React App configured and setup up with typescript.

- Bundled with [Webpack](https://webpack.js.org)
- Transpiling with [Babel](https://babeljs.io/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Styling with [Tailwind](https://tailwindcss.com)

---

## File structure

- All components must reside in the **src/component** folder.
- The **docs** folder must always have a subfolder named **dist**

---

## Styling

This app allows for modular styling

> - For a component with filename **component.tsx**
> - Create a stylesheet in same folder as component and name it **'componet.module.scss'**.
> - This style sheet can then be imported into the component as **'import styles from './componet.module.scss'**
> - To apply the styles from within this stylesheet alone on an element in the component use **className={styles.nameOfClass}**
> - To apply multiple classes use **className={cx(styles.nameOfClass, styles.nameOfAnotherClass, 'globalClassAsString')}**

**HINT**

> - Dont forget to **import cx from 'classnames'**
> - Notice **globalClassAsString** is a string value this means the component will look for this class in a global css stylesheet this project uses **app.scss** in the root directory for this.

---

## Setup

Start a new local workspace in VScode or prefered editor and in the terminal

- git clone https://github.com/hiram-labs/react-tailwind-gh-pages.git
- cd react-tailwind-gh-pages
- npm install

---

## Run

In the **react-tailwind-gh-pages** directory

- npm start-tcm _this will start the dev environment with hot reload and a css '.d.ts' file maker for module styles_
- npm start _this will only start the dev environment and hot reload_
- from local browser open http://localhost:3000/

---

## Build

Bundle is available in the **dist** folder

In the react-tailwind-gh-pages.git directory

- npm run build

**HINT**

Husky hooks is used to auto run **npm build** on every commit.

Because this build happens after commit it is always import to check **git status** again before push to make sure no new files have been put in staging.
