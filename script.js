let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", goalsKeeper);

function goalsKeeper() {
  let data = document.getElementById("input-element").value;

  //Creating the element which I'll use to append
  const newE = document.getElementById("new-elements");
  //Creating the element of the img so I can append it to newE
  let trashIcon = document.createElement('img');
  trashIcon.src="https://img.icons8.com/quill/50/filled-trash.png";
  newE.appendChild(trashIcon);
  //creating the element for the text inside the button
  let newTask = document.createElement('p');
  newTask.textContent= `${data}`;
  newE.insertBefore(newTask, trashIcon)


}

//Código que copie de una pagina para evitar que la pagina se recargue cuando le doy a submit pero no funciona no se por qué
// function submitForm(event) {
//   event.preventDefault();
// }
// let form = document.getElementsByClassName("form-container");
// form.addEventListener('submit', submitForm);

 //coso que cree para ver si puedo obtener el div donde voy a poner los nuevos elementos

  // document.write(data);