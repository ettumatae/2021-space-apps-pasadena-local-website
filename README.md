# Space Apps Pasadena Website

Website for NASA Space Apps in Pasadena </br> <a
href="https://spaceapps-pasadena.netlify.app/" target="_blank">View the live site</a>

<br>

## Steps for contributors

Hi! Here are some steps that will help you set up your environment. Hope you
have fun!

Note: This assumes you have Node.js and npm installed locally.

### 1) Fork repo:

Click on the fork icon on this page.
Fork the repo to your github account.

<br>

### 2) Clone repo from your account:

```
git clone "your fork's clone ssh or https code"
cd 2021-space-apps-pasadena-local-website
```

<br>

### 3) Install material components:

https://material.io/components?platform=web

You'll need the following material components:

```
npm i material-components-web
```

<br>

### 4) Install project dependencies:

You’ll need all of these Node dependencies:

- webpack: Bundles Sass and JavaScript
- webpack-dev-server: Development server
- sass-loader: Webpack loader to preprocess Sass files
- sass: Sass compiler
- css-loader: Resolves CSS @import and url() paths
- extract-loader: Extracts the CSS into a .css file
- file-loader: Serves the .css file as a public URL
- autoprefixer: Parses CSS and adds vendor prefixes to CSS rules
- postcss-loader: Loader for Webpack used in conjunction with autoprefixer
- @babel/core
- babel-loader: Compiles JavaScript files using babel
- @babel/preset-env: Preset for compiling es2015 <br>
  https://material.io/develop/web/getting-started <br>
- @watch: watches for changes in files then runs 'npm run build'
  https://www.npmjs.com/package/watch <br>
- @webcomponents/webcomponentsjs & @rollup/plugin-node-resolve: To support Web
  Components in IE11 and other older browsers
  https://github.com/material-components/material-web/blob/master/README.md#supporting-older-browsers

You can install these Node dependencies by running this command:

```
npm install --save-dev && npm update
```

<br>

### 5) Run spaceapps-pasadena:

Start the server. Run `npm start` and open http://localhost:8080 to view the
site in a browser. <br>
Note: The server needs to continue running in your terminal. <br>
You should see the website.

<br>

### 6) View your updates:

View updates in your browser by opening a new terminal tab (command/ctrl t).
<br>
Make sure you're in the spaceapps-pasadena folder <br>

```
npm run watch
```

Wait a few seconds, and refresh your browser page. You should see the updates.
Note: Every update you make should be auto-updated. If there are issues, check
your terminal for errors.

<br>

### 7) When you're finished:

Open the terminal that has your server running, and close the server with

```
ctrl + c
```

<br>

---

## Resources:

Help with <a href="https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"
target="_blank">creating a pull request.</a>

Help with <a href="https://docs.github.com/en/get-started/using-git/getting-changes-from-a-remote-repository#pulling-changes-from-a-remote-repository"
target="_blank"> pulling updates from repo.

Material Web Components on<a href="https://github.com/material-components/material-web" target="_blank">
Github. </a>

List of <a href="https://material.io/components?platform=web" target="_blank">Material Web Components</a>

See how material code works with <a href="https://glitch.com/~material-theme-builder" target="_blank">Material theme
examples.</a>
