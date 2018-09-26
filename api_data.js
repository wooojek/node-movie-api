define({ "api": [  {    "type": "post",    "url": "/comments",    "title": "add comment to the database",    "name": "Add",    "group": "Comments",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "text",            "description": "<p>Comment text</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "author",            "description": "<p>Author name</p>"          }        ]      },      "examples": [        {          "title": "Request-Example:",          "content": "{\n    \"text\": \"Example comment\"\n    \"author\": \"Caulo Pohelo\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "String",            "optional": false,            "field": "text",            "description": "<p>Comment text</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "author",            "description": "<p>Author name</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n    \"text\": \"Example comment\"\n    \"author\": \"Caulo Pohelo\"\n}",          "type": "type"        }      ]    },    "filename": "routes/comments.js",    "groupTitle": "Comments"  },  {    "type": "get",    "url": "/comments",    "title": "Fetch all comments from database",    "name": "GetComments",    "group": "Comments",    "version": "0.0.1",    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "Object[]",            "optional": false,            "field": "comments",            "description": "<p>List of all comments</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "comments._id",            "description": "<p>comment unique id</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "comments.text",            "description": "<p>comment text</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "comments.author",            "description": "<p>comment author</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "comments.createdAt",            "description": "<p>comment creation date</p>"          },          {            "group": "200",            "type": "Number",            "optional": false,            "field": "comments.__v",            "description": "<p>mongo model version</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n    \"comments\": [\n        {\n            \"_id\": \"5babc2d5d6731c09d58d3d0a\",\n            \"text\": \"1st test comment\",\n            \"author\": \"1st test author\",\n            \"createdAt\": \"2018-09-26T17:33:09.779Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5babc2d5d6731c09d58d3d0b\",\n            \"text\": \"2nd test comment\",\n            \"author\": \"2nd test author\",\n            \"createdAt\": \"2018-09-26T17:33:09.780Z\",\n            \"__v\": 0\n        }\n    ]\n}",          "type": "json"        }      ]    },    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "{}",          "type": "json"        }      ]    },    "filename": "routes/comments.js",    "groupTitle": "Comments"  },  {    "type": "post",    "url": "/movies",    "title": "add movie to database",    "name": "Add",    "group": "Movies",    "version": "0.0.1",    "description": "<p>Fetch movie from omdb api by id or title and add it to the database</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>OMDB movie id</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>Movie title</p>"          }        ]      },      "examples": [        {          "title": "Request-Example:",          "content": "{\n    \"id\": \"tt3896198\"\n}",          "type": "json"        },        {          "title": "Request-Example:",          "content": "{\n    \"title\": \"Guardians of the Galaxy\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>OMDB movie id</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>OMDB movie title</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n    \"imdbID\": \"tt3896198\"\n}",          "type": "json"        },        {          "title": "Success-Response:",          "content": "{\n    \"Title\": \"Guardians of the Galaxy\"\n}",          "type": "json"        }      ]    },    "filename": "routes/movies.js",    "groupTitle": "Movies"  },  {    "type": "get",    "url": "/movies",    "title": "Fetch all movies from database",    "name": "GetAll",    "group": "Movies",    "version": "0.0.1",    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "Object[]",            "optional": false,            "field": "movies",            "description": "<p>Saved movies list</p>"          },          {            "group": "200",            "type": "Object[]",            "optional": false,            "field": "movies.Ratings",            "description": "<p>Ratings for movie</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Ratings.Source",            "description": "<p>Rating source</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Ratings.Value",            "description": "<p>Rating value</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies._id",            "description": "<p>database id</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Title",            "description": "<p>Title</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Year",            "description": "<p>Year</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Rated",            "description": "<p>Rating</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Released",            "description": "<p>Release date</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Runtime",            "description": "<p>Runtime</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Genre",            "description": "<p>Genre</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Director",            "description": "<p>Director</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Writer",            "description": "<p>Writer</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Actors",            "description": "<p>Actors</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Plot",            "description": "<p>Plot</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Language",            "description": "<p>Language of the movie</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Country",            "description": "<p>Countries appearing in the movie</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Awards",            "description": "<p>Awards</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Poster",            "description": "<p>Poster</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Metascore",            "description": "<p>Metascore</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.imdbRating",            "description": "<p>imdbRating</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.imdbVotes",            "description": "<p>imdbVotes</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.imdbID",            "description": "<p>imdbID</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Type",            "description": "<p>Type</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.DVD",            "description": "<p>DVD premiere</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.BoxOffice",            "description": "<p>Box office</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Production",            "description": "<p>Production</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "movies.Website",            "description": "<p>Website</p>"          },          {            "group": "200",            "type": "Number",            "optional": false,            "field": "movies.__v",            "description": "<p>Mongo model version</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "{\n   \"movies\": [\n      {\n         \"Ratings\": [\n              {\n                  \"Source\": \"Internet Movie Database\",\n                  \"Value\": \"8.1/10\"\n              },\n              {\n                  \"Source\": \"Rotten Tomatoes\",\n                  \"Value\": \"87%\"\n              },\n              {\n                  \"Source\": \"Metacritic\",\n                  \"Value\": \"81/100\"\n              }\n          ],\n          \"_id\": \"5babc2d5d6731c09d58d3d08\",\n          \"Title\": \"Blade Runner 2049\",\n          \"Year\": \"2017\",\n          \"Rated\": \"R\",\n          \"Released\": \"06 Oct 2017\",\n          \"Runtime\": \"164 min\",\n          \"Genre\": \"Drama, Mystery, Sci-Fi\",\n          \"Director\": \"Denis Villeneuve\",\n          \"Writer\": \"Hampton Fancher (screenplay by), Michael Green (screenplay by), Hampton Fancher (story by), Philip K. Dick (based on characters from the novel \\\"Do Androids Dream of Electric Sheep?\\\" by)\",\n          \"Actors\": \"Ryan Gosling, Dave Bautista, Robin Wright, Mark Arnold\",\n          \"Plot\": \"A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.\",\n          \"Language\": \"English, Finnish, Japanese, Hungarian, Russian, Somali, Spanish\",\n          \"Country\": \"USA, UK, Hungary, Canada\",\n          \"Awards\": \"Won 2 Oscars. Another 81 wins & 131 nominations.\",\n          \"Poster\": \"https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg\",\n          \"Metascore\": \"81\",\n          \"imdbRating\": \"8.1\",\n          \"imdbVotes\": \"324,811\",\n          \"imdbID\": \"tt1856101\",\n          \"Type\": \"movie\",\n          \"DVD\": \"16 Jan 2018\",\n          \"BoxOffice\": \"$91,800,042\",\n          \"Production\": \"Warner Bros. Pictures\",\n          \"Website\": \"http://bladerunnermovie.com\",\n          \"__v\": 0\n      }\n  ]\n}",          "type": "type"        }      ]    },    "filename": "routes/movies.js",    "groupTitle": "Movies"  }] });
