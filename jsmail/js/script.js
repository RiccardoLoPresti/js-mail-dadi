/*MAIL*/
const email = document.querySelector('input');
const submit = document.querySelector('#submit');
const add = document.querySelector('#add');
const output = document.querySelector('output')
let isUsermail = false;

const list = ["tizio@gmail.com","caio@gmail.com","fraco@gmail.com","riccardo@gmail.com"]

submit.addEventListener('click', function(){
  const userEmail = email.value
  for(let i = 0; i < list.length; i++){
    console.log(list[i]);
    if(list[i] === userEmail){
      isUsermail = true;
    }
  }
  if(isUsermail){
    output.innerHTML = `
    <i class="bi bi-check-square"></i> La tua mail è presente nel sistema, puoi accedere!
    `;
    add.classList.add('d-none');
  }else{
    output.innerHTML = `
    <i class="bi bi-exclamation-triangle"></i> La tua mail NON è presente nel sistema, non puoi accedere!
    `;

    add.classList.remove('d-none');

    add.addEventListener('click', function(){
      list.push(userEmail);
    });
  }
});

