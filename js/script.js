/* global $ */

// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    "Mornin'",
    "Knowmyname",
    "Chewing Gum",
    "No Fear"
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = [
    "https://i0.wp.com/themusicninja.wpengine.com/wp-content/uploads/2012/12/artworks-000035705862-v424fb-large-e1355180892803.jpeg?resize=575%2C575",
    "https://yt3.ggpht.com/a-/AN66SAxC5_KBgokiPRTVJLkBpKWWZ5A5bTTaqbsbzg=s900-mo-c-c0xffffffff-rj-k-no",
    "https://images.genius.com/aad8d9928bbae76247e27513da5d6e6a.1000x1000x1.jpg",
    "https://ssle.ulximg.com/image/750x750/cover/1497558955_79907da63d1eddfa5d5a6b62371a148e.jpg/755f8b05b82669f658d829df44df9eab/1497558955_a63e49194ce1fe1b036f7dde1073ec7d.jpg"
    ];

var artists = [
    "Star Slinger",
    "Cookin Soul",
    "Blood Orange, A$AP Rocky, Project Pat",
    "Dej Loaf"
    ];
    
var songLengths = [
    "2:12",
    "1:52",
    "4:24",
    "2:50"
    ];

var songLinks = [
    "https://open.spotify.com/track/4DMjOTzwMEzwMxE2fJhYnL?si=E4erKojzQc20eQWM7GnRBw",
    "https://open.spotify.com/track/09jakVG1iH174hI89qBiia?si=F7GVPL1bTIGMP_GfcZqvZQ",
    "https://open.spotify.com/track/3jxExv27cf3OSt0BXtAR6Z?si=qlrfNP8KRmSYZrKokCm03w",
    "https://open.spotify.com/track/2H881m3JRA8lpuuwaQL6zy?si=5NMDk-TDSyGCbNVBOPp8Pw"
    ];


function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    images_links.forEach(function(pic) {
        $("#images").append("<img src = " + pic + ">"); 
    });
    artists.forEach(function(singer) {
        $("#artists").append("<p>" + singer + "</p>");
    });
    songLengths.forEach(function(mins) {
        $("#lengths").append("<p>" + mins + "</p>"); 
    });
    songLinks.forEach(function(url) {
        $("#links").append("<a href =" + url + ">" + "Listen Here" + "</a>"); 
    });
}

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();

}


function addSongInfo(){
    var songName = $("#song").val();
    songs.push(songName);
    var imageLink = $("#image").val();
    images_links.push(imageLink);
    var artistName = $("#artist").val();
    artists.push(artistName);
    var songTime = $("#length").val();
    songLengths.push(songTime);
    var songLink = $("#link").val();
    songLinks.push(songLink);
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
