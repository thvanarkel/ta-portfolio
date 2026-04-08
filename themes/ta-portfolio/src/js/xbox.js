import "core-js/stable";
import "regenerator-runtime/runtime";

fetch("https://xbox-proxy.thvanarkel.workers.dev")
  .then((res) => res.json())
  .then((game) => {
    document.querySelector(".game-name").innerHTML = game.name;
    document.querySelector(".game-link").href =
      "https://www.xbox.com/games/store/" + game.titleId;
    if (game.displayImage) {
      document.querySelector(".game-image").src = game.displayImage;
    }
  });
