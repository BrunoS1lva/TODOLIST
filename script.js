let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', goalsKeeper);

function goalsKeeper(){
    let data = document.getElementById('input-element').value;
    // console.log(data)
    let newE = document.getElementsByClassName('new-elements'); //coso que cree para ver si puedo obtener el div donde voy a poner los nuevos elementos
    document.write(data);
}

//Get form element
// var form=document.getElementById("formId");
// function submitForm(event){

//Preventing page refresh
//    event.preventDefault();
// }

//Calling a function during form submission.
// form.addEventListener('submit', submitForm);