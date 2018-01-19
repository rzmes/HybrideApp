//Globale Variablen
var check_result;

function functionPage0() {
    // Seitenwechsel auf Seite 1
    $("body").pagecontainer("change", "#page1", {
        transition: 'flip',
        changeHash: false,
        reverse: false,
        showLoadMsg: true
    });
}

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
    
    var so = $("#s").val();
    var po = $("#p").val();
    var yo = $("#y").val();
    var lo = $("#l").val();
    var to = $("#t").val();
    var ao = $("#a").val();
    debugger;
    if (!so || !yo || !lo || !to || ao=="null") {
        $("#puv").popup("open");
    }

    else {
        //Schuhgröße: Umrechnen von EU auf UK Größe; p: Umrechnen auf 0. Stelle; l: Umrechnugn von € zu Pfund
        var s = Number.parseInt((so/1.27) - 25);
        var p = Number.parseFloat(po / 100);
        var y = Number.parseInt(yo);
        var l = Number.parseInt(lo * kurs);
        var t = Number.parseInt(to);
        var a = Number.parseInt(ao);

        // Überprüfen der Eingaben
        if (s < 2 || s > 11 || y < 0 || y > 70 || l < 0 || l > 2500000 || t < 0 || t > 60) {
            $("#puf").popup("open");
        }

        else {
            // Berechnung:
            // von q
            var q = (p*(y+9)*l)/(((t+1)+(a+1)+(y+10))*(l+20));
            // des Ergebnisses und Umrechnung in Inch
            var result = (q * (12+(3*s/8))) * 2.54;

            //Richtiges Bild auswählen:
            if(result > 10) {
                var imagefilename = 'images/result_versionen/xl.png';
            } else if (result > 7.5 && result < 10) {
                var imagefilename = 'images/result_versionen/l.png';
            } else if (result > 5 && result < 7.5) {
                var imagefilename = 'images/result_versionen/m.png';
            } else if (result > 2.5 && result < 5) {
                var imagefilename = 'images/result_versionen/s.png';
            } else if (result > 0 && result < 2.5) {
                var imagefilename = 'images/result_versionen/xs.png';
            } else {
                var imagefilename = 'images/result_versionen/zero.png';
            }

            // Ergebnis auf die zweite Seite schreiben:
            $("#result").text( result.toFixed(1) + ' cm');

            //in globale Variable schreiben um ggf. den Button auszublenden:
            check_result = result;

            // Bild einfügen:
            $('#schuhversion').attr('src', imagefilename);
            //Werte einblenden
            $("#eingaben").text('Eingaben: Schuhgröße: ' + so + ' | Eindruck: ' + po + '% | Erfahrung: ' +  yo + ' | Kaufpreis: ' + lo + ' | Modisch: ' + to + ' | Alkoholkonsum: ' + ao);

            //Seitenwechsel
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
    //Prüfen welche Buttons eingefügt werden sollen
    $("#buttonberechnung_page3").show();
    if(typeof(check_result)=="undefined" || check_result == "") {
        $("#buttonberechnung_page3").hide();
    }
    // Seitenwechsel auf Seite 3
    $("body").pagecontainer("change", "#page3", {
        transition: 'flip',
        changeHash: false,
        reverse: false,
        showLoadMsg: true
    });
}

function functionPage4() {  
    window.setTimeout('window.location="spiel.html"',5);
}

function easteregg() {
    if ($("#s").val() == '30918') {
        window.setTimeout('window.location="spiel.html"',5);
    }
}

function functionDelete() {
    if (($("#s").val() == "") && ($("#p").val() == "0") && ($("#y").val() == "") && ($("#l").val() == "") && ($("#t").val() == "") && ($("#a").val() == "")){
        $("#del_empty").popup("open");
    }
    else{
        $("#del").popup("open");
    }
}

function functionDelete_all() {
    $( "#s" ).val("");
    $( "#s" ).textinput({clearBtn: false});
    $( "#s" ).textinput({clearBtn: true});
    $( "#p" ).val("");
    $( "#p" ).slider( "refresh" );
    $( "#y" ).val("");    
    $( "#y" ).textinput({clearBtn: false});
    $( "#y" ).textinput({clearBtn: true});
    $( "#l" ).val("");
    $( "#l" ).textinput({clearBtn: false});
    $( "#l" ).textinput({clearBtn: true});
    $( "#t" ).val("");
    $( "#t" ).textinput({clearBtn: false});
    $( "#t" ).textinput({clearBtn: true});
    $( "#a" ).val("");
    $( "#a" ).selectmenu( "refresh" );
    check_result = "";
}

function autoload(){
    window.setTimeout('window.location="berechnung.html" ', 2500);
}
