console.log("everyday I'm scrobbling")

const key = {
  apiKey    : '51b5d62bd6a165f1ff2b85da6b881279',
  apiSecret : '178fc9f25c9bd19cbf7f304655fa9327'
};

import "core-js/stable";
import "regenerator-runtime/runtime";
import LastFmApiClient from "@toplast/lastfm";
const lastFm = new LastFmApiClient(key.apiKey);

lastFm.user
  .getRecentTracks({ user: "thvanarkel", limit: 1 })
  .then(response => {
    console.log(response);
    if (response.recenttracks.track[0]["@attr"] && response.recenttracks.track[0]["@attr"].nowplaying) {
      document.querySelector(".track-indicator").classList.add("wiggle");
    } else {
      document.querySelector(".track-indicator").innerHTML = "last played:"
    }
    document.querySelector(".track").innerHTML = response.recenttracks.track[0].name;
    document.querySelector(".track-link").href = response.recenttracks.track[0].url;
    document.querySelector(".artist").innerHTML = response.recenttracks.track[0].artist["#text"];
    var imgUrl = response.recenttracks.track[0].image[0]["#text"];
    if (imgUrl.length  > 0) {
      document.querySelector(".track-image").src = response.recenttracks.track[0].image[0]["#text"];
    }
    // text.forEach(function(item) {
    //   item.style.color = "blue";
    // });
  }); // Handle success
