# Differences between the original site section and this project

The tile height is different because I've added padding to all sides to prevent situations where the tile content touches the tile borders. Also the height is set as the min-height, allowing content to expand within the tile.

I have also changed the button title to "Toggle categories" because the original one is always "Show categories", even when the section is already expanded.

For screen widths above 961px on https://www.finder.com.au/, the layout is broken because the container width is setted to 972px. To address this issue, I've chenged it to 920px.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

In case of troubles run:

### 'npm i'

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
