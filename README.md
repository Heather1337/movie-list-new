1. npm init, git init
2. copy the three files on the webpack main page (src/index.js, src/bar.js, )
3. install webpack npm install webpack
4. because webpack is a local install to run it we need to use npx weback
5. it will prompt you to install wepack-cli just say y or yes should result in a dist bundlejs
6. copy final file from webpack main page page.html
7. confirm bundle and html are linked by opening html page in browser and checking console
----webpack is setup! but not react.
7. install in terminal 'npm install -D babel-loader @babel/core @babel/preset-env webpack' (install the things in the installation list)
8. Copy/paste config object into webpack config 
9. Install react, react-dom, and the babel preset 'npm install react react-dom' and 'npm install -save-dev @babel/preset-react
10. add @babel/preset-react to our list of presets in our webpack config