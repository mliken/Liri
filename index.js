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

// sorts what each user command/entry should do, and calls pertinent function accordingly
if (choice == "my-tweets"){
	myTweets();

}else if (choice == "spotify-this-song"){
	callSpotify();

} else if (choice == "movie-this"){
	callMovie();

} else if( choice == "do-what-it-says"){
	call doWhatItSays();
}
}// end options

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

        // reads data search info from pre-existing text file named random.txt
function doWhatItSays () {
    // run read/write module. Reads data from text file
    fs.readFile("random.txt", "utf-8", function(error, data) {
        // splitting returned data array
        var dataArr = data.split(",");
        // console.log("dataArr: " + dataArr);
        // console.log("array length: " + dataArr.length);

        // do-while loops over text file contents. Selects array pair (aka key-value -> aka choice: title)
        do {
            // choice is the command to be executed: movie-this, spotify-this-song or my-tweets
            choice = dataArr[0].trim();
            // remove item from array: a command/choice
            dataArr.splice(0,1);
            // console.log("choice: " + choice);

            // my-tweets does not have additional search arguments, executed for other two choices/commands
            if (choice !== "my-tweets") {
                // title is the movie or song to be searched
                title = dataArr[0].trim();
                // remove item from array: a song or movie title
                dataArr.splice(0,1);
                // console.log("title: " + title);
            }

            // calls relevant function according to command saved inside choice
            options();
        } while (dataArr.length > 0);

    }); // end fs module
} // end doWhatItSays function


	