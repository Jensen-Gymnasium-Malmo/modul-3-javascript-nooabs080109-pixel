let slider = document.getElementById("valueSlider");
let nummer = document.getElementById("selectedNumber");
let hint = document.getElementById("hint");

let rättTal = Math.floor(Math.random() * 100) + 1;

slider.oninput = function () {

    let value = Number(slider.value);

    nummer.textContent = value;

    if (value < rättTal) {
        hint.textContent = "Talet är större 🔼";
    } 
    else if (value > rättTal) {
        hint.textContent = "Talet är mindre 🔽";
    } 
    else {
        hint.textContent = "Rätt svar! 🎉";
    }
};