let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", goalsKeeper);

function goalsKeeper() {
  let data = document.getElementById("input-element").value;
  console.log(data)

  let newTask = document.createElement('p');
  newTask.textContent= `${data}`;
  console.log(newTask);
  const newE = document.getElementById("new-elements");
  newE.appendChild(newTask);
}

//Código que copie de una pagina para evitar que la pagina se recargue cuando le doy a submit pero no funciona no se por qué
// function submitForm(event) {
//   event.preventDefault();
// }
// let form = document.getElementsByClassName("form-container");
// form.addEventListener('submit', submitForm);

 //coso que cree para ver si puedo obtener el div donde voy a poner los nuevos elementos

  // document.write(data);