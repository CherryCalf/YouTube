window.onload = function() {
    var back = document.getElementById("back");
    back.onclick = function() {
        window.history.back();
    }
    var out = document.getElementById("out");
    out.addEventListener("click", function() {
        window.location.href = "signup.html";
    });
}