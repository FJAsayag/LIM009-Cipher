window.cipher = {
  encode: (num, str) => {
    numForLetters = num %= 26;
    numForOthers = num %= 9;
    let asciiCode = 0;
    let newStr = "";

  for (let i = 0; i < str.length; i++) {
      
      asciiCode = str.charCodeAt(i);

      const toText = () => {
        asciiCode = String.fromCharCode(asciiCode);
      }  

      if (asciiCode>= 65 && asciiCode<=90) {
        asciiCode += numForLetters;

        if(asciiCode>90){
            asciiCode -= 26;
        }
    
        toText();
        
      } else if (asciiCode>=97 && asciiCode<=122){
        asciiCode += numForLetters;

        if(asciiCode>122){
            asciiCode -= 26;
        }

        toText();

      } else if (asciiCode>=33 && asciiCode<=64){
        asciiCode += numForOthers;

        if(asciiCode>64){
            asciiCode -= 32;
        }

        toText();

      } else if (asciiCode>=123 && asciiCode<=254){
        asciiCode += numForOthers;

        if(asciiCode>254){
            asciiCode -= 132;
        }

        toText();
       
      } else {
        asciiCode;

        toText();
      }    
     
      
    newStr += asciiCode;
    }

    console.log(newStr);
   return newStr;
  },


  decode: (numForLetters, str) => {
    numForLetters %= 26;
    let asciiCode = 0;
    let newStr = "";

  for (let i = 0; i < str.length; i++) {
      
      asciiCode = str.charCodeAt(i);

      const toText = () => {
        asciiCode = String.fromCharCode(asciiCode);
      }  

      if (asciiCode>= 65 && asciiCode<=90) {
        asciiCode -= numForLetters;
      
        if(asciiCode<65){
            asciiCode += 26;
        }
      
        toText();
        
      } else if (asciiCode>=97 && asciiCode<=122){
        asciiCode -= numForLetters;
      
        if(asciiCode<97){
            asciiCode += 26;
        }
      
        toText();

      } else if (asciiCode>=33 && asciiCode<=64){
        asciiCode -= numForOthers;

        if(asciiCode<33){
            asciiCode += 32;
        }

        toText();

      } else if (asciiCode>=123 && asciiCode<=254){
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

    console.log(newStr);
   return newStr;
  }
}