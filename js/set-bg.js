$(document).ready(function() {

    // Set a background gradient, selected randomly
    var gradientSets = [
        ["#1abc9c", "#16a085"],
        ["#2ecc71", "#27ae60"],
        ["#3498db", "#2980b9"],
        ["#9b59b6", "#8e44ad"],
        ["#e67e22", "#d35400"],
        ["#e74c3c", "#c0392b"],
    ];

    var rGradient = gradientSets[
        Math.floor(Math.random() * gradientSets.length)
    ];

    /* Safari 4-5, Chrome 1-9 */
    $("html").css(
        "background",
        "-webkit-gradient(linear, left top, right top, from(" + rGradient[0] +
                          "), to(" + rGradient[1] + "))"
    );

    /* Safari 5.1, Chrome 10+ */
    $("html").css(
        "background",
        "-webkit-linear-gradient(left, " + rGradient[0] + ", " + rGradient[1] + ")"
    );

    /* Firefox 3.6+ */
    $("html").css(
        "background",
        "-moz-linear-gradient(left, " + rGradient[0] + ", " + rGradient[1] + ")"
    );

    /* IE 10 */
    $("html").css(
        "background",
        "-ms-linear-gradient(left, " + rGradient[0] + ", " + rGradient[1] + ")"
    );

    /* Opera 11.10+ */
    $("html").css(
        "background",
        "-o-linear-gradient(left, " + rGradient[0] + ", " + rGradient[1] + ")"
    );
});

