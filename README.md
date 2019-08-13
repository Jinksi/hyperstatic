# 🍉 HyperStatic

A not-so-static site boilerplate:

- **Create React App** for simplicity
- **Styled Components** for component-based css
- **React Router** for routing (v4)
- **React Helmet** for document titles, descriptions, meta
- **React Snapshot** for pre-rendering to static html so it works without Javascript ⭐️

[![Netlify Status](https://api.netlify.com/api/v1/badges/1ce7fc19-d374-414e-9301-5f746a44aa3d/deploy-status)](https://app.netlify.com/sites/hyperstatic/deploys)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)  
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Jinksi/hyperstatic)

## Get going

``` shell
git clone https://github.com/jinksi/hyperstatic.git
cd hyperstatic
yarn install
yarn start
```

## Build

``` shell
yarn build
```

This will generate static html files for each route into the `./build` directory. Ready for deployment!

## Thanks

Originally forked from [superhighfives/an-almost-static-stack](https://github.com/superhighfives/an-almost-static-stack). Check this out if you want a similar starting point for your own project.

Bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
