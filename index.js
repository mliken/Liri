//different required packages that is needed for this app
var request = require("request");
var Twitter = require('twitter');
var spotify = require('spotify');
var fs = require("fs");

//declaring global variables
var movieName = '';
var queryUrl = "";
var song = "";
//parameters for twitter API
var params = {
    screen_name: 'Likenyo',
    count: 20,
};
//detecting the function user enters (third position in command line)
var choice = process.argv[2];
var entry = [];

var title= process.argv.splice(3).join(" ");
console.log("title:" + title);

userChoice();

function userChoice(){


if (choice == "my-tweets"){
	myTweets();

}else if (choice == "spotify-this-song"){
	callSpotify();

} else if (choice == "movie-this"){
	callMovie();

//} else if( choice == "do-what-it-says"){
//	call doWhatItSays();
}
}


//loops through all command line inputs, and pushes all into new array
// var title = process.argv.forEach(function(val, index) {
//     entry.push(val);
// });

// //conditionals determine what command user chose
// if (userChoice === 'my-tweets') {
//     //run twitter feed API
//     callTwitter();
// } else if (userChoice === 'spotify-this-song') {
//     //assign song variable from user's input in command line, starting from 4 position (contents gathered from entry array made in line 33)
//     song = entry.splice(3).join(' ') //deletes array elements prior to position 4 and joins elements with a space.
//         //run spotify function
//     callSpotify();
// } else if (userChoice === 'movie-this') {
//     //assign movie name variable from user's input
//     movieName = entry.splice(3).join('+'); //join with a plus sign because it's passed into API URL
//     //run movie function for API
//     callOMDB();
// } else if (userChoice === 'do-what-it-says') {
//     //if user chooses random command, read random.txt file, with utf8 format parameter
//     fs.readFile('random.txt', 'utf8', function(error, data) {
//         //create array of elements between the comma in the text string
//         var randomChoice = data.split(',');
//         //assign userChoice as the first element of array
//         userChoice = randomChoice[0];
//         //detect which liri command userChoice was. Run appropriate function as before
//         switch (userChoice) {
//             case 'my-tweets':
//                 return callTwitter();
//             case 'spotify-this-song':
//                 song = randomChoice[1];
//                 return callSpotify();
//             case 'movie-this':
//                 movieName = randomChoice[1];
//                 return callMovie();
//             default:
//                 return console.log("Oops! Looks like nothing was picked. Try again!")
//         }
//     })


    //function will pull 20 most recent tweets
    //function tweets() {
    //	var client = new Twitter(require("./keys.js").twitterKeys);
    function callTwitter() {
        var client = new Twitter(require(".keys.js"));

        client.get('statuses/user_timeline')
    }

    //function spotify-this-song 
    //instructions from API
    function callSpotify() {
        //searches via tracks
        //song gathered from global song variable

        spotify.search({ type: 'track', query: title }, function(err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            } else


            console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
            console.log("Song Name: " + data.tracks.items[3].name);
            console.log("Preview Link: " + data.tracks.items[3].preview_url);
            console.log("Album: " + data.tracks.items[0].album.name);
        });
    }

        //function movie-this (Title, Year,Rating, Country, Language, Plot, Actors, RottenTomatoes, Rotten Tomatoes URL)

        //request for OMDB API

        function callMovie() {

            var queryUrl = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json";

            //request NPM function, calls API

            request(queryUrl, function(error, response, body) {
                if (!error && response.statusCode == 200) {

                    returned = JSON.parse(body);

                    // displaying required information

                    console.log("Movie title: " + returned.Title);
                    console.log("Year produced: " + returned.Year);
                    console.log("Rated: " + returned.Rated);
                    console.log("Made in: " + returned.Country);
                    console.log(returned.Language);
                    console.log("Story: " + returned.Plot);
                    console.log("Cast: " + returned.Actors);
                    console.log("Rotten Tomatoes Metascore: " + returned.Metascore);
                }
            });
		}


	