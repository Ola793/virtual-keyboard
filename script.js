const keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];

// document.addEventListener("keydown", function (event) {
//     const textAreaContent = document.getElementById("keyboard-print");
//     event.key === 'Backspace' ? event : textAreaContent.innerHTML += event.key;
// });

function init () {
    let out = '';
    let shiftCount = 0;
    let ctrlCount = 0;
    let altCount = 0;

    // const wrapper = document.createElement("div");
    // wrapper.classList.add("wrapper");
    // const keyboard = document.createElement("div");
    // keyboard.classList.add("keyboard");

    for (let i = 0; i < keyboard.length; i++) {
        if (keyboard[i] === 9) {
            out += '<div class="clearfix"></div>';
            out += '<div class="k-key tab"> Tab </div>';
        } else if (keyboard[i] === 20) {
            out += '<div class="clearfix"></div>';
            out += '<div class="k-key capslock"> Capslock </div>';
        } else if (keyboard[i] === 16) {
            if (shiftCount === 0) {
                out += '<div class="clearfix"></div>';
                shiftCount++;
            }
            out += '<div class="k-key shift"> Shift </div>';
        } else if (keyboard[i] === 17) {
            if (ctrlCount === 0) {
                out += '<div class="clearfix"></div>';
                ctrlCount++;
            }
            out += '<div class="k-key ctrl"> Ctrl </div>';
        } else if (keyboard[i] === 18) {
            if (altCount === 0) {
                altCount++;
            }
            out += '<div class="k-key alt"> Alt </div>';
        } else if (keyboard[i] === 91) {
            out += '<div class="k-key win"> Win </div>';
        } else if (keyboard[i] === 37) {
            out += '<div class="k-key"> ← </div>';
        } else if (keyboard[i] === 38) {
            out += '<div class="k-key"> ↑ </div>';
        } else if (keyboard[i] === 39) {
            out += '<div class="k-key"> → </div>';
        } else if (keyboard[i] === 40) {
            out += '<div class="k-key"> ↓ </div>';
        } else if (keyboard[i] === 192) {
            out += '<div class="k-key"><span>~</span><span>`</span></div>';
        } else if (keyboard[i] === 49) {
            out += '<div class="k-key"><span>!</span><span>1</span></div>';
        } else if (keyboard[i] === 50) {
            out += '<div class="k-key"><span>@</span><span>2</span></div>';
        } else if (keyboard[i] === 51) {
            out += '<div class="k-key"><span>#</span><span>3</span></div>';
        } else if (keyboard[i] === 52) {
            out += '<div class="k-key"><span>$</span><span>4</span></div>';
        } else if (keyboard[i] === 53) {
            out += '<div class="k-key"><span>%</span><span>5</span></div>';
        } else if (keyboard[i] === 54) {
            out += '<div class="k-key"><span>^</span><span>6</span></div>';
        } else if (keyboard[i] === 55) {
            out += '<div class="k-key"><span>&</span><span>7</span></div>';
        } else if (keyboard[i] === 56) {
            out += '<div class="k-key"><span>*</span><span>8</span></div>';
        } else if (keyboard[i] === 57) {
            out += '<div class="k-key"><span>(</span><span>9</span></div>';
        } else if (keyboard[i] === 48) {
            out += '<div class="k-key"><span>)</span><span>0</span></div>';
        } else if (keyboard[i] === 189) {
            out += '<div class="k-key"><span>_</span><span>-</span></div>';
        } else if (keyboard[i] === 187) {
            out += '<div class="k-key"><span>+</span><span>=</span></div>';
        } else if (keyboard[i] === 32) {
            out += '<div class="k-key space"></div>';
        } else if (keyboard[i] === 13) {
            out += '<div class="k-key enter">Enter</div>';
        } else if (keyboard[i] === 46) {
            out += '<div class="k-key delete">Del</div>';
        } else if (keyboard[i] === 8) {
            out += '<div class="k-key backspace">Backspace</div>';
        } else if (keyboard[i] === 219) {
            out += '<div class="k-key">[</div>';
        } else if (keyboard[i] === 221) {
            out += '<div class="k-key">]</div>';
        } else if (keyboard[i] === 220) {
            out += '<div class="k-key"><span>/</span><span>&bsol;</span></div>';
        } else if (keyboard[i] === 186) {
            out += '<div class="k-key">;</div>';
        } else if (keyboard[i] === 222) {
            out += '<div class="k-key">&apos;</div>';
        } else if (keyboard[i] === 188) {
            out += '<div class="k-key">,</div>';
        } else if (keyboard[i] === 190) {
            out += '<div class="k-key">.</div>';
        } else if (keyboard[i] === 191) {
            out += '<div class="k-key">/</div>';
        } else {
            out += '<div class="k-key">' + String.fromCharCode(keyboard[i]) + '</div>';
        }
    }
    document.querySelector('.keyboard').innerHTML = out;
}

init();
