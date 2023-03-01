// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
/*
<div class="monsters">
        <div class="monster">
          <img src="https://robohash.org/6?set=set2" alt="Kazi Ariyan" />
          <p class="name">Kazi Ariyan</p>
          <p class="email">info@easylearningbd.com</p>
        </div>

        <div class="p-5 not-found" style="display: none">
          <span>404</span>
          <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
        </div>
</div>

*/

function showmonste(){
    const monster=document.createElement('div');
    monster.className='monster';
    const img=document.createElement('img');
    img.src='https://robohash.org/6?set=set2';
    img.alt='Kazi Ariyan';
    const mname=document.createElement('p');
    mname.className='name'
    mname.innerText='Kazi Ariyan'
    const email=document.createElement('p')
    email.className='email'
    email.innerText='info@easylearningbd.com'
    monster.append(img,mname,email);
    document.querySelector('.monsters').append(monster);
    console.log(monster);
    
}

function notFound(){
    const notFoundDiv=document.createElement('div');
    notFoundDiv.className='p-5 not-found'
    notFoundDiv.style.display='none'
    const span=document.createElement('span');
    span.innerText='404';
    
    const h1=document.createElement('h1');
    h1.innerText='🧟‍♂️ No Monster Found 🧟‍♂️';
    notFoundDiv.append(span,h1);
}



