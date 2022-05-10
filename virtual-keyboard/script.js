const KEYBOARD = document.querySelector("#keyboard")
const TEXTAREA = document.querySelector('#textarea')
const BODY = document.querySelector('body')



let engKeys = {
  "Backquote": "`",
  "Digit1": "1",
  "Digit2": "2",
  "Digit3": "3",
  "Digit4": "4",
  "Digit5": "5",
  "Digit6": "6",
  "Digit7": "7",
  "Digit8": "8",
  "Digit9": "9",
  "Digit0": "0",
  "Minus": "-",
  "Equal": "=",
  "Backspace": "Backspace",
  "Tab": "Tab",
  "KeyQ": "q",
  "KeyW": "w",
  "KeyE": "e",
  "KeyR": "r",
  "KeyT": "t",
  "KeyY": "y",
  "KeyU": "u",
  "KeyI": "i",
  "KeyO": "o",
  "KeyP": "p",
  "BracketLeft": "[",
  "BracketRight": "]",
  "Backslash": "\\",
  "Delete": "Del",
  "CapsLock": "CapsLock",
  "KeyA": "a",
  "KeyS": "s",
  "KeyD": "d",
  "KeyF": "f",
  "KeyG": "g",
  "KeyH": "h",
  "KeyJ": "j",
  "KeyK": "k",
  "KeyL": "l",
  "Semicolon": ";",
  "Quote": "'",
  "Enter": "Enter",
  "ShiftLeft": "Shift",
  "KeyZ": "z",
  "KeyX": "x",
  "KeyC": "c",
  "KeyV": "v",
  "KeyB": "b",
  "KeyN": "n",
  "KeyM": "m",
  "Comma": ",",
  "Period": ".",
  "Slash": "/",
  "ArrowUp": "▲",
  "ShiftRight": "Shift",
  "ControlLeft": "Ctrl",
  "MetaLeft": "Win",
  "AltLeft": "Alt",
  "Space": " ",
  "AltRight": "Alt",
  "ControlRight": "Ctrl",
  "ArrowLeft": "◄",
  "ArrowDown": "▼",
  "ArrowRight": "►"
}

let engShiftKeys = {
  
  "Backquote": "~",
  "Digit1": "!",
  "Digit2": "@",
  "Digit3": "#",
  "Digit4": "$",
  "Digit5": "%",
  "Digit6": "^",
  "Digit7": "&",
  "Digit8": "*",
  "Digit9": "(",
  "Digit0": ")",
  "Minus": "_",
  "Equal": "+",
  "Backspace": "Backspace",
  "Tab": "Tab",
  "KeyQ": "Q",
  "KeyW": "W",
  "KeyE": "E",
  "KeyR": "R",
  "KeyT": "T",
  "KeyY": "Y",
  "KeyU": "U",
  "KeyI": "I",
  "KeyO": "O",
  "KeyP": "P",
  "BracketLeft": "{",
  "BracketRight": "}",
  "Backslash": "|",
  "Delete": "Del",
  "CapsLock": "CapsLock",
  "KeyA": "A",
  "KeyS": "S",
  "KeyD": "D",
  "KeyF": "F",
  "KeyG": "G",
  "KeyH": "H",
  "KeyJ": "J",
  "KeyK": "K",
  "KeyL": "L",
  "Semicolon": ":",
  "Quote": "\"",
  "Enter": "Enter",
  "ShiftLeft": "Shift",
  "KeyZ": "Z",
  "KeyX": "X",
  "KeyC": "C",
  "KeyV": "V",
  "KeyB": "B",
  "KeyN": "N",
  "KeyM": "M",
  "Comma": "<",
  "Period": ">",
  "Slash": "?",
  "ArrowUp": "▲",
  "ShiftRight": "Shift",
  "ControlLeft": "Ctrl",
  "MetaLeft": "Win",
  "AltLeft": "Alt",
  "Space": " ",
  "AltRight": "Alt",
  "ControlRight": "Ctrl",
  "ArrowLeft": "◄",
  "ArrowDown": "▼",
  "ArrowRight": "►"
}

const ruKeys = {
  "Backquote": "ё",
  "Digit1": "1",
  "Digit2": "2",
  "Digit3": "3",
  "Digit4": "4",
  "Digit5": "5",
  "Digit6": "6",
  "Digit7": "7",
  "Digit8": "8",
  "Digit9": "9",
  "Digit0": "0",
  "Minus": "-",
  "Equal": "=",
  "Backspace": "Backspace",
  "Tab": "Tab",
  "KeyQ": "й",
  "KeyW": "ц",
  "KeyE": "у",
  "KeyR": "к",
  "KeyT": "е",
  "KeyY": "н",
  "KeyU": "г",
  "KeyI": "ш",
  "KeyO": "щ",
  "KeyP": "з",
  "BracketLeft": "х",
  "BracketRight": "ъ",
  "Backslash": "\\",
  "Delete": "Del",
  "CapsLock": "CapsLock",
  "KeyA": "ф",
  "KeyS": "ы",
  "KeyD": "в",
  "KeyF": "а",
  "KeyG": "п",
  "KeyH": "р",
  "KeyJ": "о",
  "KeyK": "л",
  "KeyL": "д",
  "Semicolon": "ж",
  "Quote": "э",
  "Enter": "Enter",
  "ShiftLeft": "Shift",
  "KeyZ": "я",
  "KeyX": "ч",
  "KeyC": "с",
  "KeyV": "м",
  "KeyB": "и",
  "KeyN": "т",
  "KeyM": "ь",
  "Comma": "б",
  "Period": "ю",
  "Slash": ".",
  "ShiftRight": "Shift",
  "ArrowUp": "▲",
  "ShiftRight": "Shift",
  "ControlLeft": "Ctrl",
  "MetaLeft": "Win",
  "AltLeft": "Alt",
  "Space": " ",
  "AltRight": "Alt",
  "ControlRight": "Ctrl",
  "ArrowLeft": "◄",
  "ArrowDown": "▼",
  "ArrowRight": "►"
}

const ruShiftKeys = {
    "Backquote": "Ё",
    "Digit1": "!",
    "Digit2": "\"",
    "Digit3": "№",
    "Digit4": ";",
    "Digit5": "%",
    "Digit6": ":",
    "Digit7": "?",
    "Digit8": "*",
    "Digit9": "(",
    "Digit0": ")",
    "Minus": "_",
    "Equal": "+",
    "Backspace": "Backspace",
    "Tab": "Tab",
    "KeyQ": "Й",
    "KeyW": "Ц",
    "KeyE": "У",
    "KeyR": "К",
    "KeyT": "Е",
    "KeyY": "Н",
    "KeyU": "Г",
    "KeyI": "Ш",
    "KeyO": "Щ",
    "KeyP": "З",
    "BracketLeft": "Х",
    "BracketRight": "Ъ",
    "Backslash": "/",
    "Delete": "Del",
    "CapsLock": "CapsLock",
    "KeyA": "Ф",
    "KeyS": "Ы",
    "KeyD": "В",
    "KeyF": "А",
    "KeyG": "П",
    "KeyH": "Р",
    "KeyJ": "О",
    "KeyK": "Л",
    "KeyL": "Д",
    "Semicolon": "Ж",
    "Quote": "Э",
    "Enter": "Enter",
    "ShiftLeft": "Shift",
    "KeyZ": "Я",
    "KeyX": "Ч",
    "KeyC": "С",
    "KeyV": "М",
    "KeyB": "И",
    "KeyN": "Т",
    "KeyM": "Ь",
    "Comma": "Б",
    "Period": "Ю",
    "Slash": ",",
    "ShiftRight": "Shift",
    "ArrowUp": "▲",
    "ShiftRight": "Shift",
    "ControlLeft": "Ctrl",
    "MetaLeft": "Win",
    "AltLeft": "Alt",
    "Space": " ",
    "AltRight": "Alt",
    "ControlRight": "Ctrl",
    "ArrowLeft": "◄",
    "ArrowDown": "▼",
    "ArrowRight": "►"
}


let keyBlock = document.createElement('div')

keyBlock.classList.add('key-block')

let keyMode

let keyEng,
    keyEngShift;

let keyRu,
    keyRuShift;



for (const i in engKeys) {
  keyMode = document.createElement('div')
  keyEng = document.createElement('div')
  keyEngShift = document.createElement('div')
  keyRu = document.createElement('div')

  keyRuShift = document.createElement('div')

  
  keyMode.classList.add('key-mode')
  keyMode.classList.add(`${i}`)


  keyEng.classList.add('eng')
  keyEng.classList.add(`eng-${i}`)
  keyEng.classList.add('hidden')
  keyEng.classList.add('open')
  keyEng.innerHTML = `${engKeys[i]}`

  keyRu.classList.add('ru')
  keyRu.classList.add(`ru-${i}`)
  keyRu.classList.add('hidden')
  // keyRu.classList.add('open')
  keyRu.innerHTML = `${ruKeys[i]}`

  keyEngShift.classList.add('eng-shift')
  keyEngShift.classList.add(`eng-shift-${i}`)
  keyEngShift.classList.add('hidden')
  // keyEngShift.classList.add('open')
  keyEngShift.innerHTML = `${engShiftKeys[i]}`


  keyRuShift.classList.add('ru-shift')
  keyRuShift.classList.add(`ru-shift-${i}`)
  keyRuShift.classList.add('hidden')
  // keyRuShift.classList.add('open')
  keyRuShift.innerHTML = `${ruShiftKeys[i]}`

  if(engKeys[i] === ' '){
    keyEng.innerHTML = `${i}`
    keyEngShift.innerHTML = `${i}`
    keyRu.innerHTML = `${i}`
    keyRuShift.innerHTML = `${i}`


  }
  keyMode.appendChild(keyEng)
  keyMode.appendChild(keyEngShift)
  keyMode.appendChild(keyRu)
  keyMode.appendChild(keyRuShift)
  keyBlock.appendChild(keyMode)
}
KEYBOARD.appendChild(keyBlock)
 

const keys = document.querySelectorAll('.key-mode')
const keysEng = document.querySelectorAll('.eng')
const keysEngShift = document.querySelectorAll('.eng-shift')
const keysRu = document.querySelectorAll('.ru')
const keysRuShift = document.querySelectorAll('.ru-shift')

const shiftLeft = document.querySelector('.ShiftLeft')
const shiftRight = document.querySelector('.ShiftRight')
const shift = document.querySelectorAll('.ShiftLeft, .ShiftRight')

keyMode = document.querySelectorAll('.key-mode')

shift.forEach(s=>{
  s.addEventListener('mousedown',()=>{
    for (let i = 0; i < s.children.length; i++) {
      if (s.children[i].classList.contains('eng')&&s.children[i].classList.contains('open')) {
        for (let j = 0; j < keysEng.length; j++) {
          keysEng[j].classList.remove('open') 
        }
        
        keysEngShift.forEach(r=>{
          r.classList.add('open')
      
        })

      }
      else if(s.children[i].classList.contains('ru') && s.children[i].classList.contains('open')){
        for (let l = 0; l < keysEng.length; l++) {

          keysRu[l].classList.remove('open')
           
        }
        keysRuShift.forEach(r=>{
          r.classList.add('open')
        })
        keyMode.forEach(m=>{
          m.classList.add('padd')
        })
      }
    }
  })
})


  BODY.addEventListener('keydown',(e)=>{

    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
      
    
    for (let i = 0; i < shiftLeft.children.length; i++) {

      if (shiftLeft.children[i].classList.contains('eng') && shiftLeft.children[i].classList.contains('open')) {
        for (let j = 0; j < keysEng.length; j++) {
          keysEng[j].classList.remove('open') 
        }
        
        keysEngShift.forEach(r=>{
          r.classList.add('open')
      
        })

      }
      else if(shiftLeft.children[i].classList.contains('ru') && shiftLeft.children[i].classList.contains('open')){
        for (let l = 0; l < keysEng.length; l++) {

          keysRu[l].classList.remove('open')
           
        }
        keysRuShift.forEach(r=>{
          r.classList.add('open')
        })
        keyMode.forEach(m=>{
          m.classList.add('padd')
        })
      }
    }
  }
    
  })





shift.forEach(s=>{
  s.addEventListener('mouseup',()=>{
    
      
    
    for (let i = 0; i < s.children.length; i++) {

      if (s.children[i].classList.contains('eng-shift') && s.children[i].classList.contains('open')) {
        for (let j = 0; j < keysEng.length; j++) {
      
          keysEngShift[j].classList.remove('open')

        }
        keysEng.forEach(r=>{
          r.classList.add('open')
        })
      }
      else if( s.children[i].classList.contains('ru-shift') && s.children[i].classList.contains('open')){
        for (let l = 0; l < keysEng.length; l++) {
          
          keysRuShift[l].classList.remove('open')
         
         
        }

        keysRu.forEach(r=>{
          r.classList.add('open')
        })
        keyMode.forEach(m=>{
          m.classList.remove('padd')
        })
      }

    }
  
    

  })
})



BODY.addEventListener('keyup',(e)=>{
  if (e.code === "ShiftLeft" || e.code === "ShiftRight"){
    for (let i = 0; i < shiftLeft.children.length; i++) {

      if (shiftLeft.children[i].classList.contains('eng-shift') && shiftLeft.children[i].classList.contains('open')) {
        for (let j = 0; j < keysEng.length; j++) {
      
          keysEngShift[j].classList.remove('open')

        }
        keysEng.forEach(r=>{
          r.classList.add('open')
        })
      }
      else if(shiftLeft.children[i].classList.contains('ru-shift') && shiftLeft.children[i].classList.contains('open')){
        for (let l = 0; l < keysEng.length; l++) {
          
          keysRuShift[l].classList.remove('open')
         
         
        }

        keysRu.forEach(r=>{
          r.classList.add('open')
        })
        keyMode.forEach(m=>{
          m.classList.remove('padd')
        })
      }

    }
  }
})

keys.forEach(key=>{
  key.addEventListener("click", ()=>{
    for (let i = 0; i < keys.length; i++) {
      keys[i].classList.remove('active')
      
    }
    key.classList.add('active')
  })
  
})

let caps = true


BODY.addEventListener('keydown',(e)=>{
  if (e.code === 'Backspace') {
    let delLast = TEXTAREA.value
    delLast = delLast.split('')
    delLast.pop()
    TEXTAREA.value = delLast.join("")
  }else if(e.code === 'Enter'){
  TEXTAREA.value += `\n`
  }else if(e.code === 'ShiftLeft' || e.code === 'ShiftRight'){
    TEXTAREA.value += ''
  }else if(e.code === 'CapsLock'){
    if(caps){
      for (let i = 0; i < keysEngShift.length; i++) {
        keysEngShift[i].classList.add('open')
        keysEng[i].classList.remove('open')
        keysRu[i].classList.remove('open')
        keysRuShift[i].classList.remove('open')

        caps = false
        
      }
    }else if(!caps){
      for (let i = 0; i < keysEngShift.length; i++) {
        keysEngShift[i].classList.remove('open')
        keysEng[i].classList.add('open')
     
        caps = true
        
      }
  
    }

  }else{
    TEXTAREA.value += e.key
  }
  for (let l = 0; l < keyMode.length; l++) {
    keyMode[l].classList.remove('active')
    
  }
  for (let i = 0; i < keyMode.length; i++) {
  if (keyMode[i].classList.contains(`${e.code}`)) {
    keyMode[i].classList.add('active')
    }
  
  }


})




// keys.forEach(k=>{
//   k.addEventListener('mousedown',()=>{
//     if (k.classList.contains('ShiftLeft')) {
//       for (let i = 0; i < k.children.length; i++) {
//         if (!k.children[i].classList.contains('hidden')) {
//           if (k.children[i].classList.contains('eng')) {
//             for (let j = 0; j < keysEng.length; j++) {
//               keysRuShift[j].classList.add('hidden')
//               keysEng[j].classList.add('hidden')
//               keysRu[j].classList.add('hidden')
//               keysEngShift[j].classList.remove('hidden')
//             }
           
  
//           }else if(k.children[i].classList.contains('ru')){
//               keysRuShift[j].classList.remove('hidden')
//               keysEng[j].classList.add('hidden')
//               keysRu[j].classList.add('hidden')
//               keysEngShift[j].classList.add('hidden')
//           }
       
//         }
        
//       }
//     }

//   })
// })
// keys.forEach(k=>{
//   k.addEventListener('mouseup',()=>{
//     if (k.classList.contains('ShiftLeft')) {
//       for (let i = 0; i < k.children.length; i++) {
//         if (!k.children[i].classList.contains('hidden')) {
//           if (k.children[i].classList.contains('eng')) {
//             for (let j = 0; j < keysEng.length; j++) {
//               keysRuShift[j].classList.add('hidden')
//               keysEng[j].classList.remove('hidden')
//               keysRu[j].classList.add('hidden')
//               keysEngShift[j].classList.add('hidden')
//             }
           
  
//           }else if(k.children[i].classList.contains('ru')){
//               keysRuShift[j].classList.add('hidden')
//               keysEng[j].classList.add('hidden')
//               keysRu[j].classList.remove('hidden')
//               keysEngShift[j].classList.add('hidden')
//           }
       
//         }
        
//       }
//     }

//   })
// })


// keyBlock.addEventListener('click', (e)=>{
//   if (e.target.classList.contains('key-mode')) {

//     // console.log(e.target.children)

//     if (e.target.classList.contains('Backspace')) {
//      let delLast = TEXTAREA.value
//      delLast = delLast.split('')
//      delLast.pop()
//      TEXTAREA.value = delLast.join("")
//     }else if(e.target.classList.contains('Enter')){
//       TEXTAREA.value += `\n`
//      }else if(e.target.classList.contains('Space')){
//       TEXTAREA.value += " "
//      }else{
   
//       // TEXTAREA.value += e.target.innerHTML
//       TEXTAREA.value += e.target.children[0].innerHTML

//     }


//     keys.forEach(k=>{
//       k.classList.remove('active')
//     })
//     e.target.classList.add('active')
//   }
// })


// BODY.addEventListener('keydown', (e)=>{

  // if (e.code === 'Backspace') {
  //   let delLast = TEXTAREA.value
  //   delLast = delLast.split('')
  //   delLast.pop()
  //   TEXTAREA.value = delLast.join("")
  //  }else if(e.code === 'Enter'){
  //   TEXTAREA.value += `\n`
  //  }else if(e.code === 'ShiftLeft' || e.code === 'ShiftRight'){

//     keyBlock.innerHTML = ""

//     for (const i in engShiftKeys) {
//       keyMode = document.createElement('div')
//       keyMode.classList.add('key-mode')
//       keyMode.classList.add(`${i}`)
//       keyMode.innerHTML = `${engShiftKeys[i]}`
//       if(engShiftKeys[i] === ' '){
//         keyMode.innerHTML = `${i}`
//       }
    
//       keyBlock.appendChild(keyMode)
//     }
//     // keys = document.querySelectorAll('.key-mode')
    
  //  }else{
  //    TEXTAREA.value += e.key
  //  }
//   //  keys = document.querySelectorAll('.key-mode')
//   keys.forEach(k=>{
//     k.classList.remove('active')
//   })
//   keys.forEach(k=>{
//     if (k.classList.contains(`${e.code}`)) {
      
//       k.classList.add('active')
//     }
//   })
// })
// BODY.addEventListener('keyup',(e)=>{
//   if(e.code === 'ShiftLeft' || e.code === 'ShiftRight'){
//     keyBlock.innerHTML = ""
//     for (const i in engKeys) {
//       keyMode = document.createElement('div')
//       keyMode.classList.add('key-mode')
//       keyMode.classList.add(`${i}`)
//       keyMode.innerHTML = `${engKeys[i]}`
//       if(engKeys[i] === ' '){
//         keyMode.innerHTML = `${i}`
//       }
    
//       keyBlock.appendChild(keyMode)
//     }
//     KEYBOARD.appendChild(keyBlock)
//    }
// })



// BODY.addEventListener('keydown',(e)=>{
//   ruShiftKeys[e.code] = e.key
//   console.log(ruShiftKeys)
// })