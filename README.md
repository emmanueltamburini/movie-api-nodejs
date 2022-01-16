# MOVIE API NODEJS

Movie api is an api where you can search for the information of a wide variety of movies, save it in your local database and interact with it.

#### cofigure: local
For this project you will have to have mongodb installed in your local and get an api key from http://www.omdbapi.com/apikey.aspx, once you have both you will have to configure two environment variables

API_KEY=*the api key from the page*
MONGO_URI=*your local mongodb uri*

These variables can be in your environment or in an .env file (like the one that comes with the project)

#### cofigure: docker
For docker configuration you will only need the api key from http://www.omdbapi.com/apikey.aspx and set this value in the API_KEY field in the dockercompose.yml file (replace the current key)

As a reminder, you can access localhost http://localhost:3000/swagger to see the api documentation in more detail