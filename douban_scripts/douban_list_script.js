// ==UserScript==
// @name         Douban_list
// @namespace    None
// @version      0.102
// @description  Check if movies downloaded in a douban list
// @author       Ls
// @match        https://www.douban.com/doulist/*
// @updateURL    https://teichoscopia.top/my/douban_list_script.js
// @downloadURL  https://teichoscopia.top/my/douban_list_script.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    fetch('https://raw.githubusercontent.com/ls8215/personal_files/main/douban_scripts/zh_titles.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(textData => {
            const stringList = textData.split('\n').map(item => item.trim());

            function isInStringList(text) {
                return stringList.includes(text);
            }

            const divs = document.querySelectorAll('div.title');
            divs.forEach(div => {
                const text = div.textContent.trim().split(" ")[0];
                if (isInStringList(text)) {
                    div.style.textDecoration = "underline";
                }
            });
        })
        .catch(error => {
            console.error('Error fetching or processing data:', error);
        });
})();