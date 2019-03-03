window.cipher = {
  encode: (num, str) => {
    let asciiCode = 0;
    let newStr = "";

  for (let i = 0; i < str.length; i++) {
      
      asciiCode = str.charCodeAt(i);

      const toText = () => {
        asciiCode = String.fromCharCode(asciiCode);
      }  

      if (asciiCode>= 65 && asciiCode<=90) {
        const numForLetters = num %= 26;
        asciiCode += numForLetters;

        if(asciiCode>90){
            asciiCode -= 26;
        }
    
        toText();
        
      } else if (asciiCode>=97 && asciiCode<=122){
        const numForLetters = num %= 26;
        asciiCode += numForLetters;

        if(asciiCode>122){
            asciiCode -= 26;
        }

        toText();

      } else if (asciiCode>=33 && asciiCode<=47){
        const numForOthers =  num %= 15;
        asciiCode += numForOthers;

        if(asciiCode>47){
            asciiCode -= 15;
        }

        toText();

      } else if (asciiCode>=48 && asciiCode<=57){
        const numForOthers = num %= 10;
        asciiCode += numForOthers;

        if(asciiCode>57){
            asciiCode -= 10;
        }

        toText();

      } else if (asciiCode>=58 && asciiCode<=64){
        const numForOthers =  num %= 7;
        asciiCode += numForOthers;

        if(asciiCode>64){
            asciiCode -= 7;
        }

        toText();

      } else if (asciiCode>=91 && asciiCode<=96){
        const numForOthers =  num %= 6;
        asciiCode += numForOthers;

        if(asciiCode>96){
            asciiCode -= 6;
        }

        toText();

      } else if (asciiCode>=123 && asciiCode<=254){
        const numForOthers = num %= 132;
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

   return newStr;
  },


  decode: (num, str) => {
    let asciiCode = 0;
    let newStr = "";

  for (let i = 0; i < str.length; i++) {
      
      asciiCode = str.charCodeAt(i);

      const toText = () => {
        asciiCode = String.fromCharCode(asciiCode);
      }  

      if (asciiCode>= 65 && asciiCode<=90) {
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