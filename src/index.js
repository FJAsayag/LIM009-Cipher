const section = document.getElementById("steps-screens");

document.getElementById("first").addEventListener("click", () => {
  const mainIntro = document.createElement("MAIN");

  const firstTemplate = `
    <figure>
      <img src="/imgs/little-maria.jpg" alt="baby marijuana">
    </figure>
    <article>
      <h1>No es tan mala como la creen.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam placeat error saepe quod cumque voluptates cum excepturi ad praesentium recusandae, quibusdam reiciendis, est sint autem nulla fugit quasi. Corporis.</p>
      <p>Masdas consectetur adipisicing elit. Fuga perspiciatis autem facere aliquid distinctio praesentium ad dolorum facilis! Officia alias fugiat voluptatibus mollitia incidunt doloribus placeat vitae tempora reiciendis laudantium!</p>
      <h3>Something to explain lor sit amet</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, doloribus veniam, deleniti, sint vitae libero minima quo voluptatem repudiandae nesciunt incidunt quaerat cum exercitationem ipsam accusantium. Similique</p>
      <p>Wnsectetur adipisicing elit. Magni, iste. Omnis repellendus ad aliquam expedita blanditiis sunt eos dolorum maxime. Alias nobis, possimus provident dignissimos aspernatur reiciendis iste voluptatem excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis animi rem tempore veritatis sunt vel illo in! Minus repudiandae maxime amet modi quidem rerum, accusamus facilis, ullam nam temporibus asperiores?</p>
    </article>  
  `
  mainIntro.innerHTML = firstTemplate;
  section.style.display = "block";
  section.innerHTML = "";  
  section.appendChild(mainIntro);
});

document.getElementById("second").addEventListener("click", () => {
  const divCoding = document.createElement("DIV");

  const secondTemplate = `
  <article>
    <h2>Haz tu pedido</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequatur, id nihil impedit tenetur perspiciatis unde placeat aliquid quam fugiat animi nemo iste expedita eos qui. Porro!</p>
  </article>
  <div>
    <p>Escríbenos</p>
    <textarea id="written-text" cols="30" rows="5"></textarea>
    <input type="number" id="offset" value="0">
    <button id="encoding">CIFRAR</button>
  </div>
  `
  divCoding.innerHTML = secondTemplate;
  section.style.display = "block";
  section.innerHTML = "";
  section.appendChild(divCoding);


  //CODING
  document.getElementById("encoding").addEventListener("click", () => {
    //here goes the DOM that plays with the views.
    
    const writtenText = document.getElementById("written-text").value;
    let offset = parseInt(document.getElementById("offset").value);
    let encodedText = "";
  
    encodedText = cipher.encode(offset, writtenText);
  
    console.log(encodedText)
  });
});

//DECODING
// document.getElementById("decoding").addEventListener("click", () => {
//   //here goes the DOM that plays with the views.
  
//   const writtenText = document.getElementById("written-text").value;
//   let offset = parseInt(document.getElementById("offset").value);
//   let decodedText = "";

//   decodedText = cipher.decode(offset, writtenText);

//   console.log(decodedText)
// });