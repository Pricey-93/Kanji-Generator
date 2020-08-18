"use strict"
/* Reading action listeners*/
document.getElementById("hiraganaButton").addEventListener("click", function(){toggleDisplay("hiraganaReading"); })
document.getElementById("hiraganaButton").addEventListener("click", function(){toggleShowHide("hiraganaButton"); })

/* Translation action listeners*/
document.getElementById("englishButton").addEventListener("click", function(){toggleDisplay("englishTranslation"); })
document.getElementById("englishButton").addEventListener("click", function(){toggleShowHide("englishButton"); })

/* Generator action listeners*/
/*document.getElementById("kanjiButton").addEventListener("click", function(){loadTextFile("kanji-sets/all_year_one_kanji.txt"); })*/
document.getElementById("kanjiButton").addEventListener("click", refresh);

/* toggles the reading / translation visibility */
function toggleDisplay(id) {
    if (document.getElementById(id).style.display !== "block"){
    document.getElementById(id).style.display = "block";
    }
    else
    document.getElementById(id).style.display = "none";
 }

 /* toggles the button prompt between show/hide */
 function toggleShowHide(id) {
     if (document.getElementById(id).innerHTML === "show") {
         document.getElementById(id).innerHTML = "hide";
     }
     else
     document.getElementById(id).innerHTML = "show";
 }

 /* toggles display and changes button promps when generating new kanji */
 function refresh() {
     document.getElementById("hiraganaReading").style.display = "none";
     document.getElementById("englishTranslation").style.display = "none";
     document.getElementById("hiraganaButton").innerHTML = "show";
     document.getElementById("englishButton").innerHTML = "show";
 }

 /*fetch*/
/* loads kanji file and generates random line*/
 /*function loadTextFile(filename) {
     fetch(filename)
     .then(function(response) {
         return response.text() ;
    })
    .then(function(data) {
        const ALL_LINES = data.split(/\r\n|\n/);
        let math = Math.floor(Math.random() * Math.floor(ALL_LINES.length -1));
        let line = ALL_LINES[math];
        let split = line.split(" ");
        let kanji_line = split[0];
        let reading_line = split[1];
        let english_line = [];
        let i = 2;
        while (i !== split.length) {
            english_line += split[i] + " ";
            i++;
        }   
        document.getElementById("kanjiCharacter").innerHTML = kanji_line;
        document.getElementById("hiraganaReading").innerHTML = reading_line;
        document.getElementById("englishTranslation").innerHTML = english_line;
    })
    .catch(function(error) {
        console.log(error);
    })
 }*/

 /* XMLHttpRequest */
const XHR = new XMLHttpRequest();
const url = "kanji-sets/all_year_one_kanji.txt";
   
XHR.open("GET", url);
document.getElementById("kanjiButton").addEventListener("click", load);
function load() {
    const ALL_LINES = XHR.response.split(/\r\n|\n/);
    let math = Math.floor(Math.random() * Math.floor(ALL_LINES.length -1));
    let line = ALL_LINES[math];
    let split = line.split(" ");
    let kanji_line = split[0];
    let reading_line = split[1];
    let english_line = [];
    let i = 2;
    while (i !== split.length) {
        english_line += split[i] + " ";
        i++;
    } 
document.getElementById("kanjiCharacter").innerHTML = kanji_line;
document.getElementById("hiraganaReading").innerHTML = reading_line;
document.getElementById("englishTranslation").innerHTML = english_line;
}
XHR.send();