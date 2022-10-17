/*MAIL*/
const email = document.querySelector('input');
const submit = document.querySelector('#submit');
const output = document.querySelector('output')
let isUsermail = false;

const list = ["franco@gmail.com","gennaro@gmail.com","laura@gmail.com","riccardo@gmail.com"]

submit.addEventListener('click', function(){
  const userEmail = email.value
  for(let i = 0; i < list.length; i++){
    if(list[i] === userEmail){
      isUsermail = true;
    }
  }
  if(isUsermail){
    output.innerHTML = `
    <i class="bi bi-check-square"></i> La tua mail è presente nel sistema, puoi accedere!
    `;
  }else{
    output.innerHTML = `
    <i class="bi bi-exclamation-triangle"></i> La tua mail NON è presente nel sistema, NON puoi accedere!
    `;
  }
  isUsermail = false;
});