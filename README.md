# Application description

When the app loads, the TV SHOWS tab should be selected.
Clicking on a tab loads the top 10 MOVIES/TV SHOWS depending on the selected tab.

The search field should be live and react to any change in the input field.
The search should fire a request on the search endpoint from TMDB and not filter the top 10 results.
The search is performed only when there are 3 or more characters in the search bar and it should be triggered only one second after the user has stopped typing.
When there are fewer than 3 characters in the search bar, the content should revert back to the top 10 MOVIES/TV SHOWS.
When the search is performed, results should appear under the search box.
Switching between tabs while searching should trigger the search again with the same search term for the selected tab and update the results.

When the user clicks on a specific MOVIE/TV SHOW, he is taken to the details view.

# Technologies

Buillt with:
React
Redux Toolkit
Typescript
HTML
CSS
TMDB Api
Axios
Tanstack Query
ESLInt and Prettier rules

# How to clone, install and start application:

​
To get a local copy up and running follow these simple example steps:
​

1.  First step is to clone the repository:
    ​
    https://github.com/Calculator-dev/frontend-engineer-assignment
    ​
2.  Second step is to install NPM packages:
    ​
    npm install

3.  Third step is to create .env file in the root directory containing:

        REACT_APP_API_KEY="*Your tmdb api key*"

        REACT_APP_API_URL="https://api.themoviedb.org/3/"

        REACT_APP_IMG_URL="https://image.tmdb.org/t/p/original"

4.  Fourth step is to start the project:
    ​
    npm start
