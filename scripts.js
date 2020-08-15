"use strict"
/* Reading action listeners*/
document.getElementById("hiraganaButton").addEventListener("click", function(){toggleDisplay("hiraganaReading"); })
document.getElementById("hiraganaButton").addEventListener("click", function(){toggleShowHide("hiraganaButton"); })

/* Translation action listeners*/
document.getElementById("englishButton").addEventListener("click", function(){toggleDisplay("englishTranslation"); })
document.getElementById("englishButton").addEventListener("click", function(){toggleShowHide("englishButton"); })


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
