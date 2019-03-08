window.cipher = {
  toText: (code) => String.fromCharCode(code),

  asciiCodeMathOperationForEncode: (addition, numBlock, asciiCode, limitNum) => {
    addition %= numBlock;
    asciiCode += addition;
    if (asciiCode>limitNum) {
      asciiCode -= numBlock;      
    }
    return asciiCode;
  },

  asciiCodeMathOperationForDecode: (addition, numBlock, asciiCode, limitNum) => {
    addition %= numBlock;
    asciiCode -= addition;
    if (asciiCode<limitNum) {
      asciiCode += numBlock;      
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
       letter = window.cipher.toText(window.cipher.asciiCodeMathOperationForEncode(num, 26, asciiCode, 90));
        
      } else if (asciiCode>=97 && asciiCode<=122){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperationForEncode(num, 26, asciiCode, 122));

      } else if (asciiCode>=33 && asciiCode<=47){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperationForEncode(num, 15, asciiCode, 47));

      } else if (asciiCode>=48 && asciiCode<=57){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperationForEncode(num, 10, asciiCode, 57));

      } else if (asciiCode>=58 && asciiCode<=64){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperationForEncode(num, 7, asciiCode, 64));

      } else if (asciiCode>=91 && asciiCode<=96){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperationForEncode(num, 6, asciiCode, 96));

      } else if (asciiCode>=123 && asciiCode<=254){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperationForEncode(num, 132, asciiCode, 254));
      }

    newStr += letter;
    }

   return newStr;
  },


  decode: (num, str) => {
    let asciiCode = 0;
    let newStr = " ";

  for (let i = 0; i < str.length; i++) {
      
      asciiCode = str.charCodeAt(i);
      let letter = "";

      if (asciiCode>= 65 && asciiCode<=90) {
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperationForDecode(num, 26, asciiCode, 65));
        
      } else if (asciiCode>=97 && asciiCode<=122){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperationForDecode(num, 26, asciiCode, 97));

      } else if (asciiCode>=33 && asciiCode<=47){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperationForDecode(num, 15, asciiCode, 33));

      } else if (asciiCode>=48 && asciiCode<=57){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperationForDecode(num, 10, asciiCode, 48));

      } else if (asciiCode>=58 && asciiCode<=64){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperationForDecode(num, 7, asciiCode, 58));

      } else if (asciiCode>=91 && asciiCode<=96){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperationForDecode(num, 6, asciiCode, 91));

      } else if (asciiCode>=123 && asciiCode<=254){
        letter = window.cipher.toText(window.cipher.asciiCodeMathOperationForDecode(num, 132, asciiCode, 123));

      }

    newStr += letter;
    }
   return newStr;
  }
}