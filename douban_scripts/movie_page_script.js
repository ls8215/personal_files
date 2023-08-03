//==UserScript==
// @name         Douban_movie
// @namespace    None
// @version      0.103
// @description  Check if a movie has been downloaded or not
// @author       Ls
// @match        https://movie.douban.com/subject/*
// @updateURL    https://raw.githubusercontent.com/ls8215/personal_files/main/douban_scripts/movie_page_script.js
// @downloadURL  https://raw.githubusercontent.com/ls8215/personal_files/main/douban_scripts/movie_page_script.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var infoElement = document.querySelector("#info");
    var infoText = infoElement.textContent.trim();
    var extractedString = infoText.match(/tt\d+/);
    fetch('https://raw.githubusercontent.com/ls8215/personal_files/main/douban_scripts/imdb_ids.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(textData => {
            const dataList = textData.split('\n').map(item => item.trim());
            if (extractedString && dataList.includes(extractedString[0])) {
                var contentH1 = document.querySelector("#content > h1");
                contentH1.style.textDecoration = "underline";
            }
        })
        .catch(error => {
            console.error('Error fetching or processing data:', error);
        });
})();
