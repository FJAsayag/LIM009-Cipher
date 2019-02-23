window.cipher = {
  encode: (num, str) => {
    num %= 26;
    let asciiCode = 0;
    let newStr = "";

  for (let i = 0; i < str.length; i++) {
      
      asciiCode = str.charCodeAt(i);

      const toText = () => {
        asciiCode = String.fromCharCode(asciiCode);
      }  

      if (asciiCode>= 65 && asciiCode<=90) {
        asciiCode += num;

        if(asciiCode>90){
            asciiCode -= 26;
        }
    
        toText();
        
      } else if (asciiCode>=97 && asciiCode<=122){
        asciiCode += num;

        if(asciiCode>122){
            asciiCode -= 26;
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


  decode: () => {
    /* Acá va tu código */
  }
};
