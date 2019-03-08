window.cipher = {
  toText: (code) => String.fromCharCode(code),

  asciiCodeMathOperation: (addition, numBlock, asciiCode, limitNum) => {
    addition %= numBlock;
    asciiCode += addition;
    if (asciiCode>maxNum) {
      asciiCode -= numBlock;      
    }
    return asciiCode;
  },

  encode: (num, str) => {
    let asciiCode = 0;
    let newStr = "";

  for (let i = 0; i < str.length; i++) {
      
      asciiCode = str.charCodeAt(i);
      let letter = " ";

      if (asciiCode>= 65 && asciiCode<=90) {
       letter = window.cipher.toText(window.cipher.asciiCodeMathOperation(num, 26, asciiCode, 90));
        
      } else if (asciiCode>=97 && asciiCode<=122){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperation(num, 26, asciiCode, 122));

      } else if (asciiCode>=33 && asciiCode<=47){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperation(num, 15, asciiCode, 47));

      } else if (asciiCode>=48 && asciiCode<=57){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperation(num, 10, asciiCode, 57));

      } else if (asciiCode>=58 && asciiCode<=64){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperation(num, 7, asciiCode, 64));

      } else if (asciiCode>=91 && asciiCode<=96){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperation(num, 6, asciiCode, 96));

      } else if (asciiCode>=123 && asciiCode<=254){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperation(num, 132, asciiCode, 254));
      }

    newStr += letter;
    }

   return newStr;
  },


  decode: (num, str) => {
    let asciiCode = 0;
    let newStr = "";

  for (let i = 0; i < str.length; i++) {
      
      asciiCode = str.charCodeAt(i);
      let letter = " ";

      if (asciiCode>= 65 && asciiCode<=90) {
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperation(num, 26, asciiCode, 90));

        const numForLetters = num %= 26;
        asciiCode -= numForLetters;
      
        if(asciiCode<65){
            asciiCode += 26;
        }
      
        toText();
        
      } else if (asciiCode>=97 && asciiCode<=122){
        const numForLetters = num %= 26;
        asciiCode -= numForLetters;
      
        if(asciiCode<97){
            asciiCode += 26;
        }
      
        toText();

      } else if (asciiCode>=33 && asciiCode<=47){
        const numForOthers =  num %= 15;
        asciiCode -= numForOthers;

        if(asciiCode<33){
            asciiCode += 15;
        }

        toText();

      } else if (asciiCode>=48 && asciiCode<=57){
        const numForOthers = num %= 10;
        asciiCode -= numForOthers;

        if(asciiCode<48){
            asciiCode += 10;
        }

        toText();

      } else if (asciiCode>=58 && asciiCode<=64){
        const numForOthers =  num %= 7;
        asciiCode -= numForOthers;

        if(asciiCode<58){
            asciiCode += 7;
        }

        toText();

      } else if (asciiCode>=91 && asciiCode<=96){
        const numForOthers =  num %= 6;
        asciiCode -= numForOthers;

        if(asciiCode<91){
            asciiCode += 6;
        }

        toText();

      } else if (asciiCode>=123 && asciiCode<=254){
        const numForOthers = num %= 132;
        asciiCode -= numForOthers;

        if(asciiCode<123){
            asciiCode += 132;
        }

        toText();
       
      } else {
        asciiCode;
      
        toText();
      }    

    newStr += asciiCode;
    }

   return newStr;
  }
}