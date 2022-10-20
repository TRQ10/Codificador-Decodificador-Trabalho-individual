const btn = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const input = document.getElementById('original').value = '';
const output =document.getElementById('encrypted').value = '';
let shiftInput = document.getElementById("shift");
let shift1 = document.getElementById("shift1");
let dropdown = document.getElementById("bibi-question-circle")
let dropdown2 = document.getElementById("bibi-question-circle2")
var c = document.getElementById("Selector").value

function myFunction() {
    if (c == "rot") {
      btn.style.display = "flex";
      shiftInput.style.display = "flex"
      shift1.style.display = "flex" 
    } else {
      btn.style.display = "none";
      shiftInput.style.display = "none"
      shift1.style.display = "none"
    } if (c == "base64") {
        btn2.style.display = "flex";
        btn3.style.display = "flex";
    } else {
      btn3.style.display = "none";
      btn2.style.display = "none";
    }
  }
  
myFunction()


/*Função para rodar um script de acordo com a opção selecionada*/ 

function update(){
    if (c == "rot") {
        btn.addEventListener('click', function caesarCipher() {
            const input = document.getElementById('original').value
            let shiftInput = document.getElementById("shift").value;
            let result = '';
            
            for (let i = 0; i < input.length; i++) {
          
              let charCode = input[i].charCodeAt();
              // check that charCode is a lowercase letter; automatically ignores non-letters
              if (charCode > 96 && charCode < 123) {
                
                charCode += shiftInput % 26 // makes it work with numbers greater than 26 to maintain correct shift
                // if shift passes 'z', resets to 'a' to maintain looping shift
                if (charCode > 122) {
                  charCode = (charCode - 122) + 96;
                // same as previous, but checking shift doesn't pass 'a' when shifting negative numbers
                } else if (charCode < 97) {
                  charCode = (charCode - 97) + 123;
                }
              }
          
              if (charCode > 64 && charCode < 91) {
                
                charCode += shiftInput % 26
                
                if (charCode > 90) {
                  charCode = (charCode - 90) + 64;
                } else if (charCode < 65) {
                  charCode = (charCode - 65) + 91;
                }
              }
          
              result += String.fromCharCode(charCode);
            }
            return (document.getElementById('encrypted').value = result)
        });       
    } if (c == "base64") {
            btn2.addEventListener('click',function b64_codificador() {
                let x = document.getElementById("original").value; {
                    var b64 = btoa(x)
                    return (document.getElementById("encrypted").value = b64)
                }
            })
            btn3.addEventListener('click',function b64_decodificador() {
                let x = document.getElementById("original").value; {     
                    var unicode = atob(x)
                    return (document.getElementById("encrypted").value = unicode)
                }
            })  
        }
    }
    
/*Fim*/


