function setButtonCaption(show) {
    var buttons = document.getElementsByName("toggleImages");
    for(i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        var text = "Hide Images"
        if (show == false) {
            text = "Show Images"
        }
        button.innerHTML = text;
    }
}

function myFunction() {
    var elements = document.getElementsByName("optionalImages");
    var show = false
    for(i = 0; i < elements.length; i++) {
        var element = elements[i]
        if (element.style.display === "none") {
            element.style.display = "block";
            show = true
        } else {
            element.style.display = "none";
        }
    }
    setButtonCaption(show);
}