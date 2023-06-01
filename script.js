alert("ATTENTION: Site non adapté au photosensible");

// Fonction changement de couleurs
function changeColor() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor =
        "rgb(" + red + "," + green + "," + blue + ")";
}

setInterval(changeColor, 500);
