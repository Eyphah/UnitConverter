let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("conv-btn")
let result = document.getElementById("result")

convertBtn.addEventListener("click", function(){
    result.innerHTML=`<div id="length-el" class="conv-boxes">
                        <h2 class="title">Length (Meter/Feet)</h2>
                        <p id="conversion">${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value/3.281).toFixed(3)} meters</p>
                    </div>
                    <div id="volume-el" class="conv-boxes">
                        <h2 class="title">Volume (Liters/Gallons</h2>
                        <p id="conversion">${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value/0.264).toFixed(3)} liters</p>
                    </div>
                    <div id="mass-el" class="conv-boxes">
                        <h2 class="title">Mass (Kilograms/Pounds</h2>
                        <p id="conversion">${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value/2.204).toFixed(3)} kilos</p>
                    </div>`
})

inputEl.addEventListener("input", function(){
    let value = inputEl.value
    let width = value.length*40 + 100
    inputEl.style.width = width + "px"
})