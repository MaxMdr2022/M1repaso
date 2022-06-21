function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 

    var horaMilitar= "";
    var hora = time.substring(0,time.length-8);
    var minuto= time.substring(3,time.length -5);
    var segundo= time.substring(6, time.length-2);

    if(time.length !== 10 ){

        return false;

    }else if(Number(hora) > 12){

        return false;

    }else if(Number(minuto) > 59){

        return false;
            
    }else if(Number(segundo) > 59){

        return false;
    }


    if(time.substring(time.length-2) === "PM" && Number(hora) !== 12){

        hora = Number(hora) + 12;

    }else if(time.substring(time.length-2) === "AM" && Number(hora)=== 12 ){
        hora = "00";
    }

    horaMilitar = hora +":"+ minuto +":"+ segundo;
    return horaMilitar;
}

module.exports = {
    timeConversion
}