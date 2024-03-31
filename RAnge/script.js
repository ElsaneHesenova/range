const slider = document.getElementById("Rangerange");
const output = document.getElementById("value");




output.innerHTML = slider.value;

slider.addEventListener("input", (e) => {
    output.innerHTML = e.target.value;
    let x = e.target.value;

    slider.style.background = `linear-gradient(90deg,rgb(39, 157, 186) ${x}%,rgb(62, 55, 55)${x}%) `;
});