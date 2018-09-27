# Movie API

Simple movie API that gets data from OMDB API and stores responses in MongoDB

Docs: https://wooojek.github.io/node-movie-api/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

MongoDB is needed to run this project, so please set it up on your local machine

[MongoDB installation docs](https://docs.mongodb.com/manual/installation/)

### Installing

Copy repository to your local machine

```
git clone git@github.com:wooojek/node-movie-api.git
```

create .env file in root of the repository (based on the .env.example file) and provide api key from omdb [OMDB API generator](http://www.omdbapi.com/apikey.aspx)

```
API_DEV_KEY = xxxxxxxx <- your api key
```

then

```
npm i
node index.js
```

you should see in the console (if no process.env.PORT is specified):
```
Started on port 3000
```

## Running the tests

Commands for running tests:

### Running all tests at once

```
npm run test
```
or
```
npm run test-watch
```

### /movies endpoints tests

```
npm run test-movies
```
or
```
npm run test-movies-watch
```

### /comments endpoints tests

```
npm run test-comments
```
or
```
npm run test-comments-watch
```
