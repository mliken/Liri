# Liri
liri-node-app

Overview

In this app, I made LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI uses the following npm packages
Twitter
Spotify
Request
OMDB API.
To run the app see the following instructions

You will need to create the following keys.js file to run this app sucessfully. Inside keys.js your file will look like this:
console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: '<input here>',
  consumer_secret: '<input here>',
  access_token_key: '<input here>',
  access_token_secret: '<input here>',
}
Get your Twitter API keys by following these steps:

Step One: Visit https://apps.twitter.com/app/new
Step Two: Fill out the form with dummy data. Type http://google.com in the Website input. Don't fill out the Callback URL input. Then submit the form.
Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret.
Copy and paste them where the <input here> tags are inside your keys.js file.
Step Four: At the bottom of the page, click the Create my access token button to get your access token key and secret.
Copy the access token key and secret displayed at the bottom of the next screen. Paste them where the <input here> tags are inside your keys.js file.
LIRI's Commands

* `my-tweets`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`
What Each Command Should Do

node liri.js my-tweets

This will show your last 20 tweets and when they were created at in your terminal/bash window.
node liri.js spotify-this-song '<song name here>'

This will show the following information about the song in your terminal/bash window

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
if no song is provided then your program will default to

"The Sign" by Ace of Base
node liri.js movie-this '<movie name here>'

This will output the following information to your terminal/bash window:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.
Rotten Tomatoes URL.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
It's on Netflix!
node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Feel free to change the text in that document to test out the feature for other commands.
