var myElement = document.querySelector(".header")

changeBack = function() {
    var colorList = ["black", "blue", "green", "red"]
    document.querySelector("body").style.backgroundColor = colorList[Math.floor(Math.random() * 3)]
};

myElement.addEventListener("click", changeBack);