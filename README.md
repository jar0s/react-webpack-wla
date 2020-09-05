# What is it?

It's a simple React application, based on [this calculator](https://github.com/ahfarmer/calculator), showcasing how a white label app could be implemented with React and Webpack.

# Building

You can build three different versions of this app. One for each "brand": `calc_co`, `acme` and the default.

Obviously, before building it you need to run `npm install`.

## Default brand

`npm run build` will produce following app. See it live [here](https://jar0s.github.io/react-webpack-wla/default/).

![Default branded app screenshot](docs/img/default.png)

## Acme brand

`APP_BRAND=acme npm run buid` will produce following app. See it live [here](https://jar0s.github.io/react-webpack-wla/acme/).

![Acme branded app screenshot](docs/img/acme.png)

## Calc Co brand

`APP_BRAND=calc_co npm run buid` will produce following app. See it live [here](https://jar0s.github.io/react-webpack-wla/calc_co/).

![Calc_co branded app screenshot](docs/img/calc_co.png)