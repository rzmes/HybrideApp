function functionPage1() {
    // Seitenwechsel auf Seite 1
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

    // Alle Eingaben holen (mit jQuery)
    var s = $("#s").val();
    var p = $("#p").val();
    var y = $("#y").val();
    var l = $("#l").val();
    var t = $("#t").val();
    var a = $("#a").val();

    if (!s || !y || !l || !t || a=="null") {
        $("#puv").popup("open");
    }

    else {

        //s: Umrechnen von EU auf UK Größe; p: Umrechnen auf 0. Stelle; l: Umrechnugn von € zu Pfund
        var s = Number.parseInt((s/1.27) - 25);
        var p = Number.parseFloat(p / 100);
        var y = Number.parseInt(y);
        var l = Number.parseInt(l * kurs);
        var t = Number.parseInt(t);
        var a = Number.parseInt(a);

        if (s < 2 || s > 11) {
            $("#puf").popup("open");
        }

        else {
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
            //JavaScript
            //document.getElementById('result').innerHTML = result.toFixed(1) + ' cm';
            //jQuery
            $("#result").text( result.toFixed(1) + ' cm');

            // Seiten sichbar / unsichtbar schalten (eigene Lösung - nicht verwenden!)
            /*
            var page1 = document.getElementById("page1");
            page1.className = "";

            var page2 = document.getElementById("page2");
            page2.className = "";

            var page3 = document.getElementById("page3");
            page3.className = "";
            */
            // Seitenwechsel auf Seite 2

            $("body").pagecontainer("change", "#page2", {
                transition: 'slide',
                changeHash: false,
                reverse: false,
                showLoadMsg: true
            });
        }
    }

}

function functionPage3() {
    // Seitenwechsel auf Seite 3
    $("body").pagecontainer("change", "#page3", {
        transition: 'flip',
        changeHash: false,
        reverse: false,
        showLoadMsg: true
    });
}

function functionDelete() {
    location.reload();
}
