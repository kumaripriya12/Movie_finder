About - 
This project is a movie finder website which has 2 components, one with search box and search result & other with selected movie detail.
Search Movie component - 
		1- key up event in search box triggers api call to find movies with characters in the search box
		2- Search box should have minimum 2 characters after trimming spaces
		3- It should show 'No results found' if api does not give result for searched query.
		4- list of movies should be shown if the result will come from api call.
		5- On click of any movie name, it should get redirected to http://localhost:3000/movie_detail with selected movie id & previous search results.

Movie Detail component-
		1- It gets redirected from search movie page
		2- It should display movie poster, description, Starring, Genre & release date.
		3- Back button present at the bottom of the page should take you back to search results page with previous search results.

Test cases using jest & enzyme is written.

Technical Concepts used-
		1- Components
		2- Router
		3- Life cycle methods
		4- keyup event
		5- api call using axios
		6- state, props & browser history
		7- HTMl5
		8- bootstrap4
		9- table, row & columns to display data
		10- Responsive web design
		11- Jest & enzyme

Technical skills utilized- 
		1- React js
		2- Javascript
		3- HTML5
		4- Bootstrap4
		5- Jest & Enzyme
		
![Screenshot (331)](https://user-images.githubusercontent.com/44428479/86777557-ee9a8780-c076-11ea-9e97-c56f6521e581.png)
![Screenshot (339)](https://user-images.githubusercontent.com/44428479/86777563-f0644b00-c076-11ea-82e3-a81e1ec1ddfd.png)
![Screenshot (340)](https://user-images.githubusercontent.com/44428479/86777566-f0fce180-c076-11ea-95d3-96be85504ef8.png)
![Screenshot (341)](https://user-images.githubusercontent.com/44428479/86777567-f1957800-c076-11ea-8d16-1ae7b81389b2.png)
![Screenshot (330)](https://user-images.githubusercontent.com/44428479/86777571-f22e0e80-c076-11ea-93d2-8cd28bfcc8ae.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
