function functionPage1() {
    // Seiten sichbar / unsichtbar schalten
    $("body").pagecontainer("change", "#page1", {
        transition: 'slide',
        changeHash: false,
        reverse: true,
        showLoadMsg: true
    });
}

function functionPage2() {
    // Umrechnungskurs 1€ = xx Pfund
    var kurs = 0.89;

    // Alle Eingaben holen
    var s = Number.parseInt(document.getElementById("s").value);
    var p = Number.parseFloat(document.getElementById("p").value / 100);
    var y = Number.parseInt(document.getElementById("y").value);
    var l = Number.parseInt(document.getElementById("l").value * kurs);
    var t = Number.parseInt(document.getElementById("t").value);
    var a = Number.parseInt(document.getElementById("alkohol").value);
    
    //Umrechnen von EU Größe auf UK
    s = (s/1.27) - 25;

    // Überprüfung ob die Eingaben korrekt sind
    if (isNaN(s)) {
        s = 0;
    };
    if (isNaN(p)) {
        p = 0;
    };
    if (isNaN(y)) {
        y = 0;
    };
    if (isNaN(l)) {
        l = 0;
    };
    if (isNaN(t)) {
        t = 0;
    };
    if (isNaN(a)) {
        a = 0;
    };

    //Auswerten, welcher Wert bei der Combobox gewählt wurde

    // Berechnung:
    // von q
    var q = (p*(y+9)*l)/(((t+1)+(a+1)+(y+10))*(l+20));
    // des Ergebnisses
    var result = q * (12+(3*s/8));


    // Ergebnis auf die zweite Seite schreiben:
    document.getElementById('result').innerHTML = result.toFixed(1) + ' cm';

    // Seiten sichbar / unsichtbar schalten
    /*
    var page1 = document.getElementById("page1");
    page1.className = "";

    var page2 = document.getElementById("page2");
    page2.className = "";

    var page3 = document.getElementById("page3");
    page3.className = "";
    */
    $("body").pagecontainer("change", "#page2", {
        transition: 'slide',
        changeHash: false,
        reverse: false,
        showLoadMsg: true
    });
}

function functionPage3() {
    // Seiten sichbar / unsichtbar schalten
    $("body").pagecontainer("change", "#page3", {
        transition: 'flip',
        changeHash: false,
        reverse: false,
        showLoadMsg: true
    });
}