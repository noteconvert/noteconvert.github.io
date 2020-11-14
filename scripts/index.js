const buttonInfo = document.getElementById("button-info");
const output = document.getElementById("output");
const downloadBtn = document.getElementById("download-btn");
const menuBtn = document.getElementById("menu-btn");
const menuLinks = document.getElementById("menu-links");
const menuLineLeft = document.getElementById("menu-line-left");
const menuLineRight = document.getElementById("menu-line-right");
var convention = document.getElementById("convention");
var conventionDesc = document.getElementById("convention-desc");

function convert() {
    if (output.value) {

        var str = output.value;

        if (convention.value == "english-neo") {
            var mapObj = {
                C: 'Do',
                D: 'Re',
                E: "Mi",
                F: "Fa",
                G: "Sol",
                A: "La",
                B: "Si",
                maj: "",
                major: "",
                aug: "+",
                Verse: "Strofa",
                Chorus: "Ritornello"
            };
            str = str.replace(/maj(or)?|aug|Verse(?![a-z])|Chorus(?![a-z])|C((?=add|b|m|aug|dim)|(?![a-z]))|D((?=add|b|m|aug|dim)|(?![a-z]))|E((?=add|b|m|aug|dim)|(?![a-z]))|F((?=add|b|m|aug|dim)|(?![a-z]))|G((?=add|b|m|aug|dim)|(?![a-z]))|A((?=add|b|m|aug|dim)|(?![a-z]))|B((?=add|b|m|aug|dim)|(?![a-z]))/gm, function (matched) {
                return mapObj[matched];
            });
        }

        else if (convention.value == "neo-english") {
            var mapObj = {
                Do: "C",
                Re: "D",
                Mi: "E",
                Fa: "F",
                Sol: "G",
                La: "A",
                Si: "B",
                mag: "maj",
                maggiore: "maj"

            };
            str = str.replace(/mag(giore)?|Do((?=add|b|m|aug|dim)|(?![a-z]))|Re((?=add|b|m|aug|dim)|(?![a-z]))|Mi((?=add|b|m|aug|dim)|(?![a-z]))|Fa((?=add|b|m|aug|dim)|(?![a-z]))|Sol((?=add|b|m|aug|dim)|(?![a-z]))|La((?=add|b|m|aug|dim)|(?![a-z]))|Si((?=add|b|m|aug|dim)|(?![a-z]))/gm, function (matched) {
                return mapObj[matched];
            });
        }

        else if (convention.value == "neo-german") {
            var mapObj = {
                "Do#": "Cis",
                "Re#": "Dis",
                "Fa#": "Fis",
                "Sol#": "Gis",
                "La#": "Ais",
                Reb: "Des",
                Mib: "Es",
                Solb: "Ges",
                Lab: "As",
                Sib: "B",
                Do: "C",
                Re: "D",
                Mi: "E",
                Fa: "F",
                Sol: "G",
                La: "A",
                Si: "H",
                mag: "maj",
                maggiore: "maj"
            };
            str = str.replace(/mag(giore)?|Do#((?=add|m|aug|dim)|(?![a-z]))|Re#((?=add|m|aug|dim)|(?![a-z]))|Fa#((?=add|m|aug|dim)|(?![a-z]))|Sol#((?=add|m|aug|dim)|(?![a-z]))|La#((?=add|m|aug|dim)|(?![a-z]))|Reb((?=add|m|aug|dim)|(?![a-z]))|Mib((?=add|m|aug|dim)|(?![a-z]))|Solb((?=add|m|aug|dim)|(?![a-z]))|Lab((?=add|m|aug|dim)|(?![a-z]))|Sib((?=add|m|aug|dim)|(?![a-z]))|Do((?=add|b|m|aug|dim)|(?![a-z]))|Re((?=add|b|m|aug|dim)|(?![a-z]))|Mi((?=add|b|m|aug|dim)|(?![a-z]))|Fa((?=add|b|m|aug|dim)|(?![a-z]))|Sol((?=add|b|m|aug|dim)|(?![a-z]))|La((?=add|b|m|aug|dim)|(?![a-z]))|Si((?=add|b|m|aug|dim)|(?![a-z]))/gm, function (matched) {
                return mapObj[matched];
            });
        }

        else if (convention.value == "german-neo") {
            var mapObj = {
                Cis: "Do#",
                Dis: "Re#",
                Fis: "Fa#",
                Gis: "Sol#",
                Ais: "La#",
                Des: "Reb",
                Es: "Mib",
                Ges: "Solb",
                As: "Lab",
                B: "Sib",
                C: "Do",
                D: "Re",
                E: "Mi",
                F: "Fa",
                G: "Sol",
                A: "La",
                H: "Si",
                maj: "mag"
            };
            str = str.replace(/maj|B((?=add|m|aug|dim)|(?![a-z]))|H((?=add|b|m|aug|dim)|(?![a-z]))|Cis((?=add|m|aug|dim)|(?![a-z]))|Dis((?=add|m|aug|dim)|(?![a-z]))|Fis((?=add|m|aug|dim)|(?![a-z]))|Gis((?=add|m|aug|dim)|(?![a-z]))|Ais((?=add|m|aug|dim)|(?![a-z]))|Des((?=add|m|aug|dim)|(?![a-z]))|Es((?=add|m|aug|dim)|(?![a-z]))|Ges((?=add|m|aug|dim)|(?![a-z]))|As((?=add|m|aug|dim)|(?![a-z]))|C((?=add|m|aug|dim)|(?![a-z]))|D((?=add|m|aug|dim)|(?![a-z]))|E((?=add|m|aug|dim)|(?![a-z]))|F((?=add|m|aug|dim)|(?![a-z]))|G((?=add|m|aug|dim)|(?![a-z]))|A((?=add|m|aug|dim)|(?![a-z]))/gm, function (matched) {
                return mapObj[matched];
            });
        }

        else if (convention.value == "english-german") {
            var mapObj = {
                "C#": "Cis",
                "D#": "Dis",
                "F#": "Fis",
                "G#": "Gis",
                "A#": "Ais",
                Db: "Des",
                Eb: "Es",
                Gb: "Ges",
                Ab: "As",
                Bb: "B",
                B: "H"
            };
            str = str.replace(/B((?=add|m|aug|dim)|(?![a-z]))|Bb((?=add|m|aug|dim)|(?![a-z]))|C#((?=add|m|aug|dim)|(?![a-z]))|D#((?=add|m|aug|dim)|(?![a-z]))|F#((?=add|m|aug|dim)|(?![a-z]))|G#((?=add|m|aug|dim)|(?![a-z]))|A#((?=add|m|aug|dim)|(?![a-z]))|Db((?=add|m|aug|dim)|(?![a-z]))|Eb((?=add|m|aug|dim)|(?![a-z]))|Gb((?=add|m|aug|dim)|(?![a-z]))|Ab((?=add|m|aug|dim)|(?![a-z]))/gm, function (matched) {
                return mapObj[matched];
            });
        }

        else if (convention.value == "german-english") {
            var mapObj = {
                Cis: "C#",
                Dis: "D#",
                Fis: "F#",
                Gis: "G#",
                Ais: "A#",
                Des: "Db",
                Es: "Eb",
                Ges: "Gb",
                As: "Ab",
                B: "Bb",
                H: "B"
            };
            str = str.replace(/B((?=add|m|aug|dim)|(?![a-z]))|H((?=add|b|m|aug|dim)|(?![a-z]))|Cis((?=add|m|aug|dim)|(?![a-z]))|Dis((?=add|m|aug|dim)|(?![a-z]))|Fis((?=add|m|aug|dim)|(?![a-z]))|Gis((?=add|m|aug|dim)|(?![a-z]))|Ais((?=add|m|aug|dim)|(?![a-z]))|Des((?=add|m|aug|dim)|(?![a-z]))|Es((?=add|m|aug|dim)|(?![a-z]))|Ges((?=add|m|aug|dim)|(?![a-z]))|As((?=add|m|aug|dim)|(?![a-z]))/gm, function (matched) {
                return mapObj[matched];
            });
        }

        output.value = str;
        downloadBtn.style.visibility = 'visible';
    } else {
        output.focus();
        downloadBtn.style.visibility = 'hidden';
    }
}

function changeConvention() {
    if (convention.value == "english-neo") {
        conventionDesc.innerHTML = `"C D E F G A B" to "Do Re Mi Fa Sol La Si"`;
    } else if (convention.value == "neo-english") {
        conventionDesc.innerHTML = `"Do Re Mi Fa Sol La Si" to "C D E F G A B"`;
    } else if (convention.value == "english-german") {
        conventionDesc.innerHTML = `"C D E F G A B" to "C D E F G A H"`;
    } else if (convention.value == "german-english") {
        conventionDesc.innerHTML = `"C D E F G A H" to "C D E F G A B"`;
    } else if (convention.value == "neo-german") {
        conventionDesc.innerHTML = `"Do Re Mi Fa Sol La Si" to "C D E F G A H"`;
    }
    else if (convention.value == "german-neo") {
        conventionDesc.innerHTML = `"C D E F G A H" to "Do Re Mi Fa Sol La Si"`;
    }
    convert()
}

function download() {
    var a = document.body.appendChild(
        document.createElement("a")
    );
    a.download = "noteconvert.com-output.txt";
    a.href = "data:text/txt," + output.value;
    a.click();
}

function menuOpen() {
    if (menuBtn.classList.contains('closed')) {
        menuLineLeft.style.animation = 'menu-line-left-open 0.5s ease forwards';
        menuLineRight.style.animation = 'menu-line-right-open 0.5s ease forwards';
        menuLinks.style.animation = 'menu-links-open 0.5s ease forwards';
        menuBtn.classList.remove("closed");
        menuBtn.classList.add("open");
    } else {
        menuLineLeft.style.animation = 'menu-line-left-close 0.5s ease forwards';
        menuLineRight.style.animation = 'menu-line-right-close 0.5s ease forwards';
        menuLinks.style.animation = 'menu-links-close 0.5s ease forwards';
        menuBtn.classList.remove("open");
        menuBtn.classList.add("closed");
    }
}