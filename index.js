import {monsters} from "./monsters.js";

console.log(monsters);
for (let mosterdiv of monsters) {
  showMonsters(mosterdiv);  
}



function showMonsters(mosterdiv) {
  const monster=document.createElement('div');
  monster.className='monster';
  const img=document.createElement('img');
  img.src=`https://robohash.org/${mosterdiv.id}?set=set2`;
  img.alt=mosterdiv.name;
  const mname=document.createElement('p');
  mname.className='name'
  mname.innerText=mosterdiv.name;
  const email=document.createElement('p')
  email.className='email'
  email.innerText=mosterdiv.email;
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



document.querySelector('#search-monster').addEventListener('keyup',
function(e){
  const keyword=e.target.value.toLowerCase();
  console.log(e);
  console.log(keyword);

  const findmonster=document.querySelector('.monster');
  for(let monster of findmonster){
    console.log(monster.children);
  }
});
