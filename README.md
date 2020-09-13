# React Tailwind GH-Pages

This is a React App configured and setup up with typescript.

- Bundled with [Webpack](https://webpack.js.org)
- Transpiling with [Babel](https://babeljs.io/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Styling with [Tailwind](https://tailwindcss.com)

It setups up the scaffolding for developing a react app and building it into a static website on commit.
It is also optimised to be easily deployed on GitHub pages after pushing to a GitHub repo.
See **deployment** section of this docs for more information on GitHub pages integration.

## File structure

- All components must reside in the **src/components** folder.
- The **docs** folder is populate on build and its were GitHub looks for content to host on pages.
- The **dev** folder contains files for the webpack-dev-server to serve during developement.
- The **dev/assets** folder is where all assets which will not be processed by webpack should be placed eg images, other, etc.
- To reference files and folders in the **dev/assets** folder in components use **./assets/[name of folder]/filename.extenstion**
- By default the Title of the index.html document is set to the name field of the package.json (changing this will change the index.html title) or you can manually change it in the **src/\_index.html** file
- Links have been added to the \_index.html file for favicons and device icons by default. Just add the appropriate files in **dev/image/icons**. That folder has example icon files and a manifest to use as a guide.
- The **docs** folder must always have a subfolder named **dist**

## Styling

This app allows for modular styling

- For a component with filename **myComponent.tsx**
- Create a stylesheet in same folder as myComponent and name it **myComponet.module.css'**.
- This style sheet can then be imported into the component as **'import styles from './myComponet.module.css'**
- To apply a class from within this stylesheet on an element in myComponent.tsx use **className={styles.nameOfClass}**
- To apply multiple classes use **className={cx(styles.nameOfClass, styles.nameOfAnotherClass, 'globalClassAsString')}**

**HINT**

- Dont forget to **import cx from 'classnames'**
- Notice **globalClassAsString** is a string type this means the myComponent will look for this class in a global css stylesheet this project uses **app.global.css** in the root directory for this.
- CSS is used in this project over Sass because of Tailwind, ie using Tailwind there is very little need of writing custom styles.

## Setup

Start a new local workspace in VScode or prefered editor and in the terminal

- git clone https://github.com/hiram-labs/react-tailwind-gh-pages.git
- cd react-tailwind-gh-pages
- npm install

## Run

In the **react-tailwind-gh-pages** directory

- npm start
- from local browser open http://localhost:5000/

## Build

Bundle is available in the **dist** folder

In the react-tailwind-gh-pages.git directory

- npm run build

**HINT**

Husky Hooks is used to auto run **npm build** on every commit.

Because this build happens after commit it is always import to check **git status** again before push to make sure no new files have been put in staging.

## Deployment

Create a new repo on GitHub and follow the instructions to set it up on your local environment.

**NB**

- Do not initialise the repo by adding a README or .gitignore when creating the repo on GitHub.
- Use the 3rd option to **git init** and **git push origin -u master**

After pushing to GitHub

- In the repo go to **settings**
- Scroll down to **GitHub Pages** section
- Select **[your branch]** from first dropdown menu
- Select **/docs** from second dropdown menu
- Click **Save**

Your site is now hosted on your GitHub url get the full link at the top of the Github Pages section in settings.
