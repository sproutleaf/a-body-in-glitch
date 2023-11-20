function blurry() {
    $("#blurry").css("color", "white");
    $("#blurry").css("text-shadow", "0 0 0px transparent");
    $("#fragmented").css("pointer-events", "all");
    $("#bp").css("visibility", "visible");
}

function fragmented() {
    $("#fragmented").css("color", "white");
    $("#fragmented").css("text-decoration", "none");
    $("#disembodied").css("pointer-events", "all");
    $("#fp").css("visibility", "visible");

}

function disembodied() {
    $("#disembodied").css("color", "white");
    $("#disembodied").css("text-shadow", "0 0 0px transparent");
    document.getElementById("dis").innerHTML = "Disembodied";
    $("#dp").css("visibility", "visible");
    setTimeout(second, 2500);
}

function second() {
    window.location.href = "miracle.html";
}