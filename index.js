import {monsters} from "./monsters.js";

console.log(monsters);
for (let mosterdiv of monsters) {
  showMonsters(mosterdiv);  
}



function showMonsters() {
  const monster=document.createElement('div');
  monster.className='monster';
  const img=document.createElement('img');
  img.src='https://robohash.org/6?set=set2';
  img.alt='Kazi Ariyan';
  const mname=document.createElement('p');
  mname.className='name'
  mname.innerText='Kazi Ariyan 1'
  const email=document.createElement('p')
  email.className='email'
  email.innerText='info@easylearningbd.com'
  monster.append(img,mname,email);
  document.querySelector('.monsters').append(monster);
  console.log(monster);
}
   
    
notFound();

function notFound(){
    const notFoundDiv=document.createElement('div');
    notFoundDiv.className='p-5 not-found'
    // notFoundDiv.style.display='none'
    const span=document.createElement('span');
    span.innerText='404';
    
    const h1=document.createElement('h1');
    h1.innerText='🧟‍♂️ No Monster Found 🧟‍♂️';
    notFoundDiv.append(span,h1);
    document.querySelector('.monsters').append(notFoundDiv);
    console.log(notFoundDiv)
}



