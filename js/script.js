// File JS

    let isReverse = true;


    function convert_c_to_f(){
        let celcius = document.getElementById('celcius').value;
        console.log(celcius);

        let fahrenheit = document.getElementById('fahrenheit');
        fahrenheit.value = (celcius * 1.8) + 32;

        let rumus_c_to_f = document.getElementById('rumus-celcius-fahrenheit');
        rumus_c_to_f.value =(celcius) + " x 1,8 + 32";
    }

    function convert_f_to_c(){
        let fahrenheit = document.getElementById('fahrenheit2').value;
        console.log(fahrenheit);

        let celcius = document.getElementById('celcius2');
        celcius.value = ((fahrenheit) - 32) * 5/9 ;

        let rumus_f_to_c = document.getElementById('rumus-fahrenheit-celcius');
        rumus_f_to_c.value =(fahrenheit) + " - 32 " + " x 5/9";
    }

    function reverse() {

        let cToF = document.getElementById('c-to-f')
        let fToC = document.getElementById('f-to-c')
        let rumus_c_to_f = document.getElementById('rumus-celcius-fahrenheit');
        rumus_c_to_f.value = "";

    if (isReverse){
        fToC.style.display = "block";
        cToF.style.display = "none";
        isReverse = false;
     }
    else {
        cToF.style.display = "block"
        fToC.style.display = "none";
        isReverse = true;
    }
    }

    function reset() {
    document.getElementById('celcius').value = "";
    document.getElementById('celcius2').value = "";
    document.getElementById('fahrenheit').value = "";
    document.getElementById('fahrenheit2').value = "";
    document.getElementById('rumus-celcius-fahrenheit').value="";
    document.getElementById('rumus-fahrenheit-celcius').value="";
    }
