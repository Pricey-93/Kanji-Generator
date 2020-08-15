"use strict"
document.getElementById("hiraganaButton").addEventListener("click", function(){toggleDisplay("hiraganaReading"); })
document.getElementById("englishButton").addEventListener("click", function(){toggleDisplay("englishTranslation"); })

function toggleDisplay(id) {
    if (document.getElementById(id).style.display !== "block"){
    document.getElementById(id).style.display = "block";
    }
    else
    document.getElementById(id).style.display = "none";
 }
