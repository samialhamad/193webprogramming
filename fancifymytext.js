function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function toggleFanciness() {
    var textArea = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancyShmancyRadio");
    
    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;
    text = text.toUpperCase();
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        var lastWordIndex = words.length - 1;
        if (lastWordIndex >= 0) {
            words[lastWordIndex] += "-Moo";
        }
        sentences[i] = words.join(" ");
    }
    text = sentences.join(".");
    textArea.value = text;
}