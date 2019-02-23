document.getElementById("btn").addEventListener("click", () => {
  const writtenText = document.getElementById("written-text").value;
  let offset = parseInt(document.getElementById("offset").value);
      offset %= 26;
  let asciiCode = 0;
  let phrase = "";

  for (let i = 0; i < writtenText.length; i++) {
      
      asciiCode = writtenText.charCodeAt(i);

      const toText = () => {
        asciiCode = String.fromCharCode(asciiCode);
      }  

      if (asciiCode>= 65 && asciiCode<=90) {
        asciiCode += offset;
        console.log(asciiCode)

        if(asciiCode>90){
            asciiCode -= 26;
        }
    
        toText();
        
      } else if (asciiCode>=97 && asciiCode<=122){
        asciiCode += offset;
        console.log(asciiCode)

        if(asciiCode>122){
            asciiCode -= 26;
        }

        toText();
       
      } else {
        asciiCode;
        console.log(asciiCode)

        toText();
      }    
     
      
    phrase += asciiCode;
    console.log(phrase)
    }

});