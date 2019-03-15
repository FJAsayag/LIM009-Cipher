const buyingSection = document.getElementById("buying");
      buyingSection.style.display = "none";

document.getElementById("to-buy").addEventListener("click", () => {
  buyingSection.style.display = "block";
  goTo1();
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
    <p>Para poder hacer esta interacción lo más rápida pero clara posible, se le pide que en el cuadro de texto se introduzca la siguiente información: correo electrónico, nombre completo, número de teléfono celular, producto a comprar, detalles del producto (cantidad y especificaciones con respecto al THC y CBD), razones del consumo del producto, y lo adicional que desee añadir.</p>
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


const goTo1 = () => {
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
      <p class="a-font">La marihuana ha sido muy mal mirada desde que abrimos los ojos y vimos la luz de este mundo, pero ¿es realmente lo que vemos la luz? Hay, tal vez, un mundo entero que nos perdemos por no mirar con otros ojos a lo que la sociedad sentencia como delito.</p>
      <p class="a-font">María merece ser mirada por mucho más público con ojos de amor: ojos de aquellos que la conocieron y vieron, vivenciaron o conocieron sus poderes en la salud.  Es por ello que esta web existe: alimentamos el brillo en los ojos de quienes ya confían en ella y esperamos contagiar vibras similares.</p>
      <h3>Instrucciones de compra.</h3>
      <p>Esperamos que para este momento ya haya conocido el catálogo de productos a base de esta maravillosa plantita y esté feliz de poder adquirir lo que desea. Sin embargo, a pesar que compartimos esa felicidad con usted, debemos seguir unos pasos antes para la correcta adquisición del producto.</p>
      <p>Este camino consta básicamente de un tipo específico y especial de comunicación: por medio de la codificación de mensaje, con la ayuda del cifrado cesar. Básicamente, tendrá que escribir su pedido en un cuadro de texto, ponerle una cifra random que servirá como ‘clave’ para su mensaje y enviarnos el mensaje codificado. De igual manera, recibirá en su correo (antes solicitado) la respuesta a su pedido de manera codificada y tendrá la opción a descifrarlo, con la ‘clave’ que se le indique.</p>
      <p>Nota: Debemos aclarar que la forma en la que procedemos es guiada fundamentalmente por la comunicación que tengamos con usted, y es totalmente relevante para cerrar la compra por términos legales y políticos.</p>
      <button id="go-to-2" class="styled-buttons">SIGUIENTE</button>
    </article>
  `
  mainIntro.innerHTML = firstTemplate;
  cleanSection();
  section.appendChild(mainIntro);

  document.getElementById("go-to-2").addEventListener("click", goTo2);
};

document.getElementById("first").addEventListener("click", goTo1);

document.getElementById("second").addEventListener("click", goTo2);

document.getElementById("third").addEventListener("click", goTo3);

document.getElementById("fourth").addEventListener("click", goTo4)

document.getElementById("fifth").addEventListener("click", goTo5);