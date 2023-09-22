
const c1 = document.getElementById("Celsius");
const f1 = document.getElementById("Fahrenheit");
const k1 = document.getElementById("Kelvin");


function tempConvert(){
    const currentValue = +event.target.value;
    switch(event.target.name){
        case "Celsius":
            f1.value = (currentValue * 1.8) + 32;
            k1.value = currentValue + 273.15;
            break;
        case "Fahrenheit":
            c1.value = (currentValue - 32) / 1.8;
            k1.value = (currentValue - 32) /1.8 + 273.15;
            break;      

        default:
            break;    
    }
}