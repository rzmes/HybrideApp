function functionPage1() {
    var page1 = document.getElementById("page1");
    page1.className = "active";

    var page2 = document.getElementById("page2");
    page2.className = "";

    var page3 = document.getElementById("page3");
    page3.className = "";
}

function functionPage2() {
    var w1 = Number.parseInt(document.getElementById("w1").value);
    var w2 = Number.parseInt(document.getElementById("w2").value);
    var w3 = Number.parseInt(document.getElementById("w3").value);

    if (isNaN(w1)) {
        w1 = 0;
    };
    if (isNaN(w2)) {
        w2 = 0;
    };
    if (isNaN(w3)) {
        w3 = 0;
    };

    var result = w1 + w2 + w3;

    document.getElementById('result').innerHTML = result;

    var page1 = document.getElementById("page1");
    page1.className = "";

    var page2 = document.getElementById("page2");
    page2.className = "active";

    var page3 = document.getElementById("page3");
    page3.className = "";
}

function functionPage3() {
    var page1 = document.getElementById("page1");
    page1.className = "";

    var page2 = document.getElementById("page2");
    page2.className = "";

    var page3 = document.getElementById("page3");
    page3.className = "active";
}