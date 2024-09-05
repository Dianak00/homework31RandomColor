// code pn obtinerea culorii hex
const  btn = document.querySelector('#picker');
const colorDiv = document.getElementById('colorBox');
const colorDescription = document.querySelector('#inner');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function getRandomHexCode() {
    const hexCharacters = '0123456789abcdef';
    let hexCode = '#';

    for ( let i = 0; i < 6; i++){
        hexCode += hexCharacters[random(15)];
    }
    return hexCode;
}


function toRgb(hexCode) {
    let hexColor = hexCode.replace('#','');
    //console.log(hexColor);
    let rgbArr = [];
    if (/^[a-f0-9]{6}$/i.test(hexColor)){
        for (let i = 0; i < 6; i += 2){
            rgbArr.push(parseInt(hexColor[i] + hexColor[i + 1], 16));
           console.log(`rgb(${rgbArr})`);
        }
        return `rgb(${rgbArr.join(', ')})`;
    }
   return null;
}
    

btn.addEventListener('click', () => {
    const rndHex = getRandomHexCode();
    const rdnRGB = toRgb(rndHex);
    colorDiv.style.backgroundColor = rndHex;
    colorDescription.textContent = `${rndHex} | ${rdnRGB}`;
    //colorDescription.textContent = rndHex;

});


