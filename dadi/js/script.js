play.addEventListener('click', function(){
  const numeri = [];
  const nRandom1 = Math.floor(Math.random() * 7);
  const nRandom2 = Math.floor(Math.random() * 7);
  numeri.push(nRandom1,nRandom2);
  const nUser = numeri[0];
  const nPc = numeri[1];

  if(nUser > nPc){
  document.getElementById('nuser').innerHTML = numeri[0];
  document.getElementById('npc').innerHTML = numeri[1];
  document.getElementById('winner').innerHTML = 'HAI VINTO!';
  }else if(nUser === nPc){
  document.getElementById('nuser').innerHTML = numeri[0];
  document.getElementById('npc').innerHTML = numeri[1];
  document.getElementById('winner').innerHTML = 'PARI!';
  }else{
  document.getElementById('nuser').innerHTML = numeri[0];
  document.getElementById('npc').innerHTML = numeri[1];
  document.getElementById('winner').innerHTML = 'HAI PERSO!';
  }
  console.log(numeri);
});







