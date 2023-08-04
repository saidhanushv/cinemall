# Cinemall🎥

Welcome to Cinemall - The One Stop Store! This is a simple web application that allows you to search for movies and view their details.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.

## Features

- View popular movies.
- Search for movies using keywords.

## Dependencies

- Bootstrap v5.2.2
- API from themoviedb.org

## How it works

The application uses the `fetch` function to pull data from the themoviedb.org API. The data is fetched from the following endpoint:
`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7dc4e9ced6495361eebeb452496d7262&page=1`


The images of the movies are displayed using the `IMG_PATH` variable with the poster path from the API.

### Search

You can search for movies using the search bar. The search functionality is implemented using the following API endpoint:
`https://api.themoviedb.org/3/search/movie?api_key=7dc4e9ced6495361eebeb452496d7262&query="{searchTerm}`


## Code Structure

The application consists of three files:

1. `index.html`: The main HTML file that displays the web page structure.
2. `app.js`: The JavaScript file containing the logic for fetching movies and displaying them on the page.
3. `app.css`: The CSS file that styles the application.

## Movie Information

For each movie displayed, you can see the following information:

- Title
- Poster
- Vote Average (with color-coding)
- Overview

The vote average is color-coded based on the following criteria:

- Green: Vote average greater than or equal to 8
- Orange: Vote average greater than or equal to 5
- Red: Vote average less than 5
