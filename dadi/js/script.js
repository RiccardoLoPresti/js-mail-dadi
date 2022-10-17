/*DICE*/
play.addEventListener('click', function(){
  const user = Math.floor(Math.random() * 7);
  const cpu  = Math.floor(Math.random() * 7);
  document.getElementById('nuser').innerHTML = user;
  document.getElementById('npc').innerHTML = cpu;

  if(user > cpu){
  document.getElementById('winner').innerHTML = 'HAI VINTO!';
  }else if(user === cpu){
  document.getElementById('winner').innerHTML = 'PARI!';
  }else{
  document.getElementById('winner').innerHTML = 'HAI PERSO!';
  }
});