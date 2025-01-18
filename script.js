const cat = document.getElementById("cat"); 
const lady = document.getElementById("lady"); 

document.addEventListener("keydown", function(event) {
        jump(); 
}); 
 
function jump () {
    if (cat.classList != "jump") {
        cat.classList.add("jump") 
    }
    setTimeout( function() {
        cat.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval ( function() {
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
    let ladyLeft = parseInt(window.getComputedStyle(lady).getPropertyValue("left")); 

    if (ladyLeft < 50 && ladyLeft > 0 && catTop >= 140) {
        alert("Game Over!")
    }
}, 10)
