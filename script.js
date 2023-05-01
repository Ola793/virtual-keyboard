const keyboardArr = [
    [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
    [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220],
    [46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
    [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16],
    [17, 91, 18, 32, 18, 17, 37, 40, 39]
]

function createKeyboard () {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  document.body.appendChild(wrapper);

  const textArea = document.createElement("textarea");
  textArea.className = "text-area";
  wrapper.appendChild(textArea);

  const keyboard = document.createElement("div");
  keyboard.className = "keyboard";
  wrapper.appendChild(keyboard);

  for (let i = 0; i < 5; i++) {
    const keyboardLine = document.createElement("div");
    keyboardLine.className = "keyboardLine";
    keyboard.appendChild(keyboardLine);
  }
}

function feelWithKeys () {
    let out = '';
    
    let shiftCount = 0;
    let ctrlCount = 0;
    let altCount = 0;

    keyboardArr.forEach(line => {
        for (let i = 0; i < line.length; i++) {
            if (line[i] === 9) {
                out += '<div class="clearfix"></div>';
                out += '<div class="keyboard-key tab" data="'+ line[i]+'"> Tab </div>';
            } else if (line[i] === 20) {
                out += '<div class="clearfix"></div>';
                out += '<div class="keyboard-key capslock" data="'+ line[i]+'"> Capslock </div>';
            } else if (line[i] === 16) {
                if (shiftCount === 0) {
                    out += '<div class="clearfix"></div>';
                    shiftCount++;
                }
                out += '<div class="keyboard-key shift" data="'+ line[i]+'"> Shift </div>';
            } else if (line[i] === 17) {
                if (ctrlCount === 0) {
                    out += '<div class="clearfix"></div>';
                    ctrlCount++;
                }
                out += '<div class="keyboard-key ctrl" data="'+ line[i]+'"> Ctrl </div>';
            } else if (line[i] === 18) {
                if (altCount === 0) {
                    altCount++;
                }
                out += '<div class="keyboard-key alt" data="'+ line[i]+'"> Alt </div>';
            } else if (line[i] === 91) {
                out += '<div class="keyboard-key win" data="'+ line[i]+'"> Win </div>';
            } else if (line[i] === 37) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"> ← </div>';
            } else if (line[i] === 38) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"> ↑ </div>';
            } else if (line[i] === 39) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"> → </div>';
            } else if (line[i] === 40) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"> ↓ </div>';
            } else if (line[i] === 192) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"><span>~</span><span>`</span></div>';
            } else if (line[i] === 49) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"><span>!</span><span>1</span></div>';
            } else if (line[i] === 50) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"><span>@</span><span>2</span></div>';
            } else if (line[i] === 51) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"><span>#</span><span>3</span></div>';
            } else if (line[i] === 52) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"><span>$</span><span>4</span></div>';
            } else if (line[i] === 53) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"><span>%</span><span>5</span></div>';
            } else if (line[i] === 54) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"><span>^</span><span>6</span></div>';
            } else if (line[i] === 55) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"><span>&</span><span>7</span></div>';
            } else if (line[i] === 56) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"><span>*</span><span>8</span></div>';
            } else if (line[i] === 57) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"><span>(</span><span>9</span></div>';
            } else if (line[i] === 48) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"><span>)</span><span>0</span></div>';
            } else if (line[i] === 189) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"><span>_</span><span>-</span></div>';
            } else if (line[i] === 187) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"><span>+</span><span>=</span></div>';
            } else if (line[i] === 32) {
                out += '<div class="keyboard-key space" data="'+ line[i]+'"></div>';
            } else if (line[i] === 13) {
                out += '<div class="keyboard-key enter" data="'+ line[i]+'">Enter</div>';
            } else if (line[i] === 46) {
                out += '<div class="keyboard-key delete" data="'+ line[i]+'">Del</div>';
            } else if (line[i] === 8) {
                out += '<div class="keyboard-key backspace" data="'+ line[i]+'">Backspace</div>';
            } else if (line[i] === 219) {
                out += '<div class="keyboard-key" data="'+ line[i]+'">[</div>';
            } else if (line[i] === 221) {
                out += '<div class="keyboard-key" data="'+ line[i]+'">]</div>';
            } else if (line[i] === 220) {
                out += '<div class="keyboard-key" data="'+ line[i]+'"><span>/</span><span>&bsol;</span></div>';
            } else if (line[i] === 186) {
                out += '<div class="keyboard-key" data="'+ line[i]+'">;</div>';
            } else if (line[i] === 222) {
                out += '<div class="keyboard-key" data="'+ line[i]+'">&apos;</div>';
            } else if (line[i] === 188) {
                out += '<div class="keyboard-key" data="'+ line[i]+'">,</div>';
            } else if (line[i] === 190) {
                out += '<div class="keyboard-key" data="'+ line[i]+'">.</div>';
            } else if (line[i] === 191) {
                out += '<div class="keyboard-key" data="'+ line[i]+'">/</div>';
            } else {
                out += '<div class="keyboard-key" data="'+ line[i]+'">' + String.fromCharCode(line[i]) + '</div>';
            }
        }
        document.querySelector(".keyboard").innerHTML = out;
    });
}

createKeyboard();
feelWithKeys();

const textAreaContent = document.querySelector(".text-area");

function light (event) {
    document.querySelectorAll('.keyboard .keyboard-key').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelector('.keyboard .keyboard-key[data="' + event.keyCode + '"]').classList.add("active");
}

document.addEventListener("keydown", function (event) {
    textAreaContent.innerHTML += event.key;
    light(event);
});

document.querySelectorAll(".keyboard .keyboard-key").forEach(el => {
    el.addEventListener("click", function (event) {
        
        document.querySelectorAll('.keyboard .keyboard-key').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
        let code = this.getAttribute("data");
        textAreaContent.innerHTML += String.fromCharCode(code).toLowerCase();
    });
});

