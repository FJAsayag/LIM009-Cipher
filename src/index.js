const buyingSection = document.getElementById("buying");
      buyingSection.style.display = "none";

document.getElementById("to-buy").addEventListener("click", () => {
  buyingSection.style.display = "block";
});

const section = document.getElementById("buying-screens");
const cleanSection = () => {
  section.style.display = "block";
  section.innerHTML = "";
 };
let encodedText = "";
let clave = 0;
let decodedText = "";

const goTo2 = () => {
  const divCoding = document.createElement("DIV");
  const secondTemplate = `
  <article id="secondArt">
    <h2>Haz tu pedido</h2>
    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ullam eius natus nemo, minus error vel quisquam cupiditate magni atque magnam! Sit officia rerum nesciunt sunt ipsa vel, quibusdam illum? sit amet consectetur adipisicing elit. Reprehenderit consequatur, id nihil impedit tenetur perspiciatis unde placeat aliquid quam fugiat animi nemo iste expedita eos qui. Porro!</p>
  </article>
  <div id="coder">
   <div>
    <h4>Escríbenos</h4>
    <textarea id="written-text"></textarea>
   </div>
   <div>
    <h5 id="indicator">Inserte su clave</h5>
    <input type="number" id="offset" value="0">
   </div>
   <div>
   <button id="encoding" class="styled-buttons">CIFRAR</button>
   </div>
   </div>
  `
  divCoding.innerHTML = secondTemplate;
  cleanSection();
  section.appendChild(divCoding);

  //CODING
  document.getElementById("encoding").addEventListener("click", () => {
    const writtenText = document.getElementById("written-text").value;
    let offset = parseInt(document.getElementById("offset").value);
    
    encodedText = cipher.encode(offset, writtenText);
    clave = offset;
  });

  document.getElementById("encoding").addEventListener("click", goTo3);
  
};

const goTo3 = () => {
  const divSending = document.createElement("DIV");
  divSending.id="three"
  const thirdTemplate = `
  <article id="thirdArt"> 
   <h3>Tu mensaje codificado: </h3>
   <p>${encodedText}</p>
   <h5>No olvides tu clave: </h5>
   <p>${clave}</p>
  </article>
  <div>
   <button id="go-back" class="styled-buttons">EDITAR MENSAJE</button>
   <button id="go-to-fourth" class="styled-buttons">ENVIAR</button>
  </div>
  `
 divSending.innerHTML = thirdTemplate;
 cleanSection();
 section.appendChild(divSending);

 document.getElementById("go-to-fourth").addEventListener("click", goTo4);
 document.getElementById("go-back").addEventListener("click", goTo2);
};

const goTo4 = () => {
  const divDecoding = document.createElement("DIV");
  const fourthTemplate = `
  <article id="fourthArt">
    <h2>Recibimos tu pedido y ahora estamos en contacto</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequatur, id nihil impedit tenetur perspiciatis unde placeat aliquid quam fugiat animi nemo iste expedita eos qui. Porro!</p>
  </article>
  <div id="decoder">
   <div>
    <h4>Pega el mensaje que te enviamos</h4>
    <textarea id="written-text"></textarea>
    </div>
    <div>
    <h5 id="indicator">Inserte su clave</h5>
    <input type="number" id="offset" value="0">
    </div>
    <div>
    <button id="decoding" class="styled-buttons">DESCIFRAR</button>
    </div>
  </div>
  `

  divDecoding.innerHTML = fourthTemplate;
  cleanSection();
  section.appendChild(divDecoding);

  // DECODING
 document.getElementById("decoding").addEventListener("click", () => {  
   const writtenText = document.getElementById("written-text").value;
   let offset = parseInt(document.getElementById("offset").value);

   decodedText = cipher.decode(offset, writtenText);
   clave = offset;
 });

 document.getElementById("decoding").addEventListener("click", goTo5);
};

const goTo5 = () => {
  const divSharing = document.createElement("DIV");
  const fifthTemplate = `
 <div id="showing-message">
  <article>
  <h3>Ejem... Disculpa, en verdad quisimos decirte:</h3>
  <p>${decodedText}</p>
  <h5>Con una clave de:</h5>
  <p>${clave}</p>
  </article>
  <div id="last-buttons">
  <button id="againCoding" class="styled-buttons">CIFRAR NUEVO MENSAJE</button>
  <button id="againDecoding" class="styled-buttons">DESCIFRAR OTRO MENSAJE</button>
  </div>
 </div>
 <div id="sharing">
  <p id="share">¡Comparte nuestra iniciativa!<p>
  <input type="text" value="https://fjasayag.github.io/LIM009-Cipher/src/index.html">
  <button>LINK!</button>
 </div>
  `
  
  divSharing.innerHTML = fifthTemplate;
  cleanSection();
  section.appendChild(divSharing);

  document.getElementById("againCoding").addEventListener("click", goTo2);
  document.getElementById("againDecoding").addEventListener("click", goTo4);
}


document.getElementById("first").addEventListener("click", () => {
  const mainIntro = document.createElement("MAIN");
  mainIntro.id = "one"

  const firstTemplate = `
    <div id="imgAndh1">
     <figure>
      <img id="baby-weed" src="./imgs/little-maria.jpg" alt="baby marijuana">
     </figure>
      <h1 class="not-so-bad">No es tan mala como la creen.</h1>
    </div>
    <article id="firstArt">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam placeat error saepe quod cumque voluptates cum excepturi ad praesentium recusandae, quibusdam reiciendis, est sint autem nulla fugit quasi. Corporis.</p>
      <p>Masdas consectetur adipisicing elit. Fuga perspiciatis autem facere aliquid distinctio praesentium ad dolorum facilis! Officia alias fugiat voluptatibus mollitia incidunt doloribus placeat vitae tempora reiciendis laudantium!</p>
      <h3>Something to explain lor sit amet</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, doloribus veniam, deleniti, sint vitae libero minima quo voluptatem repudiandae nesciunt incidunt quaerat cum exercitationem ipsam accusantium. Similique</p>
      <p>Wnsectetur adipisicing elit. Magni, iste. Omnis repellendus ad aliquam expedita blanditiis sunt eos dolorum maxime. Alias nobis, possimus provident dignissimos aspernatur reiciendis iste voluptatem excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis animi rem tempore veritatis sunt vel illo in! Minus repudiandae maxime amet modi quidem rerum, accusamus facilis, ullam nam temporibus asperiores?</p>
      <button id="go-to-2" class="styled-buttons">SIGUIENTE</button>
    </article>
  `
  mainIntro.innerHTML = firstTemplate;
  cleanSection();
  section.appendChild(mainIntro);

  document.getElementById("go-to-2").addEventListener("click", goTo2);
});

document.getElementById("second").addEventListener("click", goTo2);

document.getElementById("third").addEventListener("click", goTo3);

document.getElementById("fourth").addEventListener("click", goTo4)

document.getElementById("fifth").addEventListener("click", goTo5);