const containerEl = document.querySelector(".code");

const refreshBtnEl = document.querySelector(".agianbtn");

const totalColorBoxes = 10; 
function generateColorPalette(){

    
    containerEl.innerHTML = ""; 

    
    for (let i = 0; i < totalColorBoxes; i++) {
       
        
        let hexColorCode = Math.floor(Math.random() * 0xffffff).toString(16);
        hexColorCode = `#${hexColorCode}`;
        //3wschool ashiglach zarim zuilsiig harsan baigaa
        
        const colorContainerEl = document.createElement("div");
        colorContainerEl.classList.add("colorContainer");
        colorContainerEl.innerHTML = `<div class="colorBox" style="background: ${hexColorCode}"></div>
                              <p class="codeBox">${hexColorCode}</p>`;

        
        colorContainerEl.addEventListener("click", () => copyColor(colorContainerEl, hexColorCode));
        
        
        containerEl.appendChild(colorContainerEl);
    }
}


function copyColor(colorContainerEl, hexColorCode){
    const colorBoxEl = colorContainerEl.querySelector(".codeBox");

    
    try{
        navigator.clipboard.writeText(hexColorCode)
        colorBoxEl.innerText = "Copied";
        setTimeout(() => {
            colorBoxEl.innerText = hexColorCode
        }, 1000)

    }catch(e){
        alert("Failed to copy the color code!");
    }
}


generateColorPalette();


generateColorPalette();
refreshBtnEl.addEventListener("click", generateColorPalette);