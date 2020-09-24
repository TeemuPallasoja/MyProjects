var myElement = document.querySelector(".color-button")

changeBack = function() {
    var colorList = ["black", "blue", "green", "red"]
    document.querySelector("body").style.backgroundColor = colorList[Math.floor(Math.random() * 3)]
};

myElement.addEventListener("click", changeBack);