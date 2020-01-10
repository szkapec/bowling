







const zagraj = document.querySelector('.zagraj')
const div = document.querySelector('.graj')
const pierwszy = document.querySelector('.pierwszy')
const drugi = document.querySelector('.drugi')
const trzeci = document.querySelector('.trzeci')

let i = 0;

const gracz1Btn1 = document.createElement('button')
const gracz1Btn2 = document.createElement('button')

const gracz2btn1 = document.createElement('button')
const gracz2btn2 = document.createElement('button')


gracz1Btn1.disabled = false;
gracz1Btn2.disabled = true;
gracz2btn1.disabled = true;
gracz2btn2.disabled = true;


const iloscOsob = () => {
   
    const iloscGraczy = document.querySelector('.wyborO')
    
    if(iloscGraczy.value == 2) {

        i++;
      
      gracz1Btn1.innerHTML = "Pierwszy rzut";
      gracz1Btn2.innerHTML = "drugi rzut";

      gracz1Btn1.classList.add('btn1')
      gracz1Btn2.classList.add('btn2')
        
      gracz2btn1.innerHTML = "pierwszy rzut"
      gracz2btn2.innerHTML = "drugi rzut"
    


      if(i==1) {
        pierwszy.appendChild(gracz1Btn1)
        pierwszy.appendChild(gracz1Btn2)
        drugi.appendChild(gracz2btn1)
        drugi.appendChild(gracz2btn2)
    }
     
    }



}
const losuj = () => {
    let randomowo = Math.floor(Math.random()*11)
    console.log(randomowo + " tyle zbitych")

    if(gracz1Btn1.disabled == false)
    {
        gracz1Btn2.disabled = false;
        gracz1Btn1.disabled = true;
    }

    else if(gracz1Btn2.disabled == false) {
        gracz1Btn2.disabled = true;
        gracz2btn1.disabled = false;
    }
    else if(gracz2btn1.disabled == false) {
        gracz2btn1.disabled = true;
        gracz2btn2.disabled = false;
    }
    else if(gracz2btn2.disabled == false) {
        gracz2btn2.disabled = true;
        gracz1Btn1.disabled = false;
    }
    
    
    // gracz2btn1.disabled = true;
    // gracz2btn2.disabled = true;



}

gracz1Btn1.addEventListener('click', losuj)
gracz1Btn2.addEventListener('click', losuj)
gracz2btn1.addEventListener('click', losuj)
gracz2btn2.addEventListener('click', losuj)



zagraj.addEventListener('click' , iloscOsob)



