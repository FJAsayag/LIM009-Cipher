document.getElementById("encoding").addEventListener("click", () => {
  //here goes the DOM that plays with the views.
  
  const writtenText = document.getElementById("written-text").value;
  let offset = parseInt(document.getElementById("offset").value);
  let encodedText = "";

  encodedText = cipher.encode(offset, writtenText);

  console.log(encodedText)
});