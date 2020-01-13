const zagraj = document.querySelector('.zagraj')
const div = document.querySelector('.graj')
const pierwszy = document.querySelector('.pierwszy')
const drugi = document.querySelector('.drugi')
const trzeci = document.querySelector('.trzeci')


const gracz1Btn1 = document.createElement('button')
const gracz1Btn2 = document.createElement('button')

const gracz2btn1 = document.createElement('button')
const gracz2btn2 = document.createElement('button')

const gracz3Btn1 = document.createElement('button')
const gracz3Btn2 = document.createElement('button')
const odNowa = document.querySelector('.odNowa')
const btnOdNowa = document.createElement('button')
btnOdNowa.classList.add('btnOdNowa')

const wynikKoncowy = document.querySelector('.wynikKoncowy')
const wynikKoncowy2 = document.querySelector('.wynikKoncowy2')
const wynikKoncowy3 = document.querySelector('.wynikKoncowy3')

gracz1Btn1.disabled = false;
gracz1Btn2.disabled = true;
gracz2btn1.disabled = true;
gracz2btn2.disabled = true;
gracz3Btn1.disabled = true;
gracz3Btn2.disabled = true;

const punktyGracz1 = document.createElement('div')
punktyGracz1.classList.add('sumaPkt')
const punktyGracz2 = document.createElement('div')
punktyGracz2.classList.add('sumaPkt2')
const punktyGracz3 = document.createElement('div')
punktyGracz3.classList.add('sumaPkt3')
const randomowePunktyGracz1 = document.createElement('div')
randomowePunktyGracz1.classList.add('sumaPkt')

const gracz1PunktyJednorazowe1 = document.createElement('div')
const gracz1PunktyJednorazowe2 = document.createElement('div')
const gracz2PunktyJednorazowe1 = document.createElement('div')
const gracz2PunktyJednorazowe2 = document.createElement('div')
const gracz3PunktyJednorazowe1 = document.createElement('div')
const gracz3PunktyJednorazowe2 = document.createElement('div')

const maxymalnaIloscRzutow = document.querySelector('.max');
const iloscGraczy = document.querySelector('.wyborO')

let pktGracz1 = 0;
let pktGracz2 = 0;
let pktGracz3 = 0;
let max10 = 0;
let sprawdzCzy10 = 0;
let iloscRzutow = 0; 
let i = 0;


const iloscOsob = () => {
   
    
    if(iloscGraczy.value == 1) {
        i++;
        gracz1Btn1.innerHTML = "Pierwszy rzut";
        gracz1Btn2.innerHTML = "drugi rzut";
  
        gracz1Btn1.classList.add('btn', 'btn1')
        gracz1Btn2.classList.add('btn', 'btn2')
          
        if(i==1) {
          pierwszy.appendChild(gracz1Btn1)
          pierwszy.appendChild(gracz1Btn2)
          pierwszy.appendChild(gracz1PunktyJednorazowe1)
          pierwszy.appendChild(gracz1PunktyJednorazowe2)
          
          wynikKoncowy.appendChild(punktyGracz1)
          }
      }



    if(iloscGraczy.value == 2) {
      i++;
      gracz1Btn1.innerHTML = "Pierwszy rzut";
      gracz1Btn2.innerHTML = "drugi rzut";

      gracz1Btn1.classList.add('btn', 'btn1')
      gracz1Btn2.classList.add('btn', 'btn2')
      gracz2btn1.classList.add('btn', 'btn3')
      gracz2btn2.classList.add('btn', 'btn4')

      gracz2btn1.innerHTML = "pierwszy rzut"
      gracz2btn2.innerHTML = "drugi rzut"
    
      if(i==1) {
        pierwszy.appendChild(gracz1Btn1)
        pierwszy.appendChild(gracz1Btn2)
        drugi.appendChild(gracz2btn1)
        drugi.appendChild(gracz2btn2)
        pierwszy.appendChild(gracz1PunktyJednorazowe1)
        pierwszy.appendChild(gracz1PunktyJednorazowe2)
        
        drugi.appendChild(gracz2PunktyJednorazowe1)
        drugi.appendChild(gracz2PunktyJednorazowe2)
        wynikKoncowy.appendChild(punktyGracz1)
        wynikKoncowy2.appendChild(punktyGracz2)
        }
    }

    if(iloscGraczy.value == 3) {
        i++;
        gracz1Btn1.innerHTML = "Pierwszy rzut";
        gracz1Btn2.innerHTML = "drugi rzut";
  
      gracz1Btn1.classList.add('btn', 'btn1')
      gracz1Btn2.classList.add('btn', 'btn2')
      gracz2btn1.classList.add('btn', 'btn3')
      gracz2btn2.classList.add('btn', 'btn4')
      gracz3Btn1.classList.add('btn', 'btn5')
      gracz3Btn2.classList.add('btn', 'btn6')
          
        gracz2btn1.innerHTML = "pierwszy rzut"
        gracz2btn2.innerHTML = "drugi rzut"

        gracz3Btn1.innerHTML = "pierwszy rzut"
        gracz3Btn2.innerHTML = "drugi rzut"
      
        if(i==1) {
          pierwszy.appendChild(gracz1Btn1)
          pierwszy.appendChild(gracz1Btn2)
          drugi.appendChild(gracz2btn1)
          drugi.appendChild(gracz2btn2)
          trzeci.appendChild(gracz3Btn1)
          trzeci.appendChild(gracz3Btn2)

          pierwszy.appendChild(gracz1PunktyJednorazowe1)
          pierwszy.appendChild(gracz1PunktyJednorazowe2)
          drugi.appendChild(gracz2PunktyJednorazowe1)
          drugi.appendChild(gracz2PunktyJednorazowe2)
          trzeci.appendChild(gracz3PunktyJednorazowe1)
          trzeci.appendChild(gracz3PunktyJednorazowe2)

          wynikKoncowy.appendChild(punktyGracz1)
          wynikKoncowy2.appendChild(punktyGracz2)
          wynikKoncowy3.appendChild(punktyGracz3)
          }
      }
}

const losuj = () => {
//dla ilosci graczy 1;

if(iloscRzutow<10) {

    if(iloscGraczy.value == 1) {
        let randomowo = Math.floor(Math.random()*11)
        console.log(randomowo + " tyle zbitych")
      
            if(gracz1Btn1.disabled == false)
            {
                
    
                sprawdzCzy10 = randomowo;
                max10 = randomowo;
                pktGracz1 = pktGracz1 + randomowo
                punktyGracz1.innerHTML = "Suma punktow gracza nr 1:  " + pktGracz1;
                gracz1PunktyJednorazowe1.innerHTML = "Rz:1: " + randomowo 
                if(sprawdzCzy10==10) {
                    gracz1Btn1.disabled = false;
                    gracz1Btn2.disabled = true;
                    pktGracz1 = pktGracz1 + 5;
                    ++iloscRzutow;
                }
                else {
                    gracz1Btn2.disabled = false;
                    gracz1Btn1.disabled = true;
                }
            }
            else if(gracz1Btn2.disabled == false) {
                gracz1Btn2.disabled = true;
                gracz1Btn1.disabled = false;
                let warunek = max10 + randomowo;
                ++iloscRzutow;
                if(warunek <= 10)
                {
                    sprawdzCzy10 = randomowo;
                    pktGracz1 = pktGracz1 + randomowo;
                    punktyGracz1.innerHTML = "Suma punktow gracza nr 1: " + pktGracz1;
                    console.log(warunek + "WARRUNEK")
                    gracz1PunktyJednorazowe2.innerHTML = "Rz:2: " + randomowo 
                    if(sprawdzCzy10==10) {
                        gracz1Btn1.disabled = false;
                        gracz1Btn2.disabled = true;
                    } 
                }
                else if(warunek > 10) {
                    gracz1PunktyJednorazowe2.innerHTML = "Rz:2: " + 0 + " Niestety :("
                }
        }
        sprawdzCzy10 = 0;
        maxymalnaIloscRzutow.innerHTML = `rzutów: ${iloscRzutow}`;
        }
        
        
       
    
//dla ilosci graczy 2;
    if(iloscGraczy.value == 2) {
    let randomowo = Math.floor(Math.random()*11)

    console.log(randomowo + " tyle zbitych")

    if(gracz1Btn1.disabled == false)
    {
        
        sprawdzCzy10 = randomowo;
        max10 = randomowo;
        pktGracz1 = pktGracz1 + randomowo
        punktyGracz1.innerHTML = "Suma punktow gracza nr 1: " + pktGracz1;
        gracz1PunktyJednorazowe1.innerHTML = "Rz:1: " + randomowo 
        if(sprawdzCzy10==10) {
            gracz2btn1.disabled = false;
            gracz1Btn1.disabled = true;
            gracz1Btn2.disabled = true;
            pktGracz1 = pktGracz1 + 5;
        }
        else {
            gracz1Btn2.disabled = false;
            gracz1Btn1.disabled = true;
        }
        
    }

    else if(gracz1Btn2.disabled == false) {
        gracz1Btn2.disabled = true;
        gracz2btn1.disabled = false;

        let warunek = max10 + randomowo;
        
        if(warunek <= 10)
        {
            sprawdzCzy10 = randomowo;
            pktGracz1 = pktGracz1 + randomowo;
            punktyGracz1.innerHTML = "Suma punktow gracza nr 1: " + pktGracz1;
            console.log(warunek + "WARRUNEK")
            gracz1PunktyJednorazowe2.innerHTML = "Rz:2: " + randomowo 
            if(sprawdzCzy10==10) {
                gracz2btn1.disabled = true;
                gracz1Btn2.disabled = false;
            }
            
        }
        else if(warunek > 10) {
            gracz1PunktyJednorazowe2.innerHTML = "Rz:2: " + 0 + " Niestety :("
        }

    }
    else if(gracz2btn1.disabled == false) {
        sprawdzCzy10 = randomowo;
        max10 = randomowo;
        pktGracz2 = pktGracz2 + randomowo
        punktyGracz2.innerHTML = "Suma punktow gracza nr 2: " + pktGracz2;
        gracz2PunktyJednorazowe1.innerHTML = "Rz:1: " + randomowo 
        if(sprawdzCzy10==10) {
            gracz2btn1.disabled = true;
            gracz2btn2.disabled = true;
            gracz1Btn1.disabled = false;

            pktGracz2 = pktGracz2 + 5;
            ++iloscRzutow;
        }
        else {
            gracz2btn1.disabled = true;
            gracz2btn2.disabled = false;
        }
    }
    
    else if(gracz2btn2.disabled == false) {
        gracz2btn2.disabled = true;
        gracz1Btn1.disabled = false;
        let warunek = max10 + randomowo;
        ++iloscRzutow;
        if(warunek <= 10)
        {
            sprawdzCzy10 = randomowo;
            pktGracz2 = pktGracz2 + randomowo;
            punktyGracz2.innerHTML = "Suma punktow gracza nr 1: " + pktGracz2;
            gracz2PunktyJednorazowe2.innerHTML = "Rz:2: " + randomowo 
            if(sprawdzCzy10==10) {
                gracz2btn2.disabled = true;
                gracz1Btn1.disabled = false;
            }
        }
        else if(warunek > 10) {
            gracz2PunktyJednorazowe2.innerHTML = "Rz:2: " + 0 + " Niestety :("
        }
    }
    sprawdzCzy10 = 0;
    maxymalnaIloscRzutow.innerHTML = `rzutów: ${iloscRzutow}`;
}


//dla ilosci graczy 3
if(iloscGraczy.value == 3) {

    let randomowo = Math.floor(Math.random()*11)

    console.log(randomowo + " tyle zbitych")

    if(gracz1Btn1.disabled == false)
    {
        
        sprawdzCzy10 = randomowo;
        max10 = randomowo;
        pktGracz1 = pktGracz1 + randomowo
        punktyGracz1.innerHTML = "Suma punktow gracza nr 1: " + pktGracz1;
        gracz1PunktyJednorazowe1.innerHTML = "Rz:1: " + randomowo 
        if(sprawdzCzy10==10) {
            gracz2btn1.disabled = false;
            gracz1Btn1.disabled = true;
            gracz1Btn2.disabled = true;
            pktGracz1 = pktGracz1 + 5;
        }
        else {
            gracz1Btn2.disabled = false;
            gracz1Btn1.disabled = true;
        }
        
    }

    else if(gracz1Btn2.disabled == false) {
        gracz1Btn2.disabled = true;
        gracz2btn1.disabled = false;

        let warunek = max10 + randomowo;
        
        if(warunek <= 10)
        {
            sprawdzCzy10 = randomowo;
            pktGracz1 = pktGracz1 + randomowo;
            punktyGracz1.innerHTML = "Suma punktow gracza nr 1: " + pktGracz1;
            console.log(warunek + "WARRUNEK")
            gracz1PunktyJednorazowe2.innerHTML = "Rz:2: " + randomowo 
            if(sprawdzCzy10==10) {
                gracz2btn1.disabled = true;
                gracz1Btn2.disabled = false;
            }
            
        }
        else if(warunek > 10) {
            gracz1PunktyJednorazowe2.innerHTML = "Rz:2: " + 0 + " Niestety :("
        }

    }
    else if(gracz2btn1.disabled == false) {
        sprawdzCzy10 = randomowo;
        max10 = randomowo;
        pktGracz2 = pktGracz2 + randomowo
        punktyGracz2.innerHTML = "Suma punktow gracza nr 2: " + pktGracz2;
        gracz2PunktyJednorazowe1.innerHTML = "Rz:1: " + randomowo 
        if(sprawdzCzy10==10) {
            gracz2btn1.disabled = true;
            gracz2btn2.disabled = true;
            gracz3Btn1.disabled = false;

            pktGracz2 = pktGracz2 + 5;
        }
        else {
            gracz2btn1.disabled = true;
            gracz2btn2.disabled = false;
        }
    }
    
    else if(gracz2btn2.disabled == false) {
        gracz2btn2.disabled = true;
        gracz3Btn1.disabled = false;
        let warunek = max10 + randomowo;
        if(warunek <= 10)
        {
            sprawdzCzy10 = randomowo;
            pktGracz2 = pktGracz2 + randomowo;
            punktyGracz2.innerHTML = "Suma punktow gracza nr 1: " + pktGracz2;
            gracz2PunktyJednorazowe2.innerHTML = "Rz:2: " + randomowo 
            if(sprawdzCzy10==10) {
                gracz2btn2.disabled = true;
                gracz3Btn1.disabled = false;
            }
        }
        else if(warunek > 10) {
            gracz2PunktyJednorazowe2.innerHTML = "Rz:2: " + 0 + " Niestety :("
        }
    }
//
    else if(gracz3Btn1.disabled == false) {
        sprawdzCzy10 = randomowo;
        max10 = randomowo;
        pktGracz3 = pktGracz3 + randomowo
        punktyGracz3.innerHTML = "Suma punktow gracza nr 3: " + pktGracz3;
        gracz3PunktyJednorazowe1.innerHTML = "Rz:1: " + randomowo 
        if(sprawdzCzy10==10) {
            gracz3Btn1.disabled = true;
            gracz3Btn2.disabled = true;
            gracz1Btn1.disabled = false;
            pktGracz3 = pktGracz3 + 5;
            ++iloscRzutow;
        }
        else {
            gracz3Btn1.disabled = true;
            gracz3Btn2.disabled = false;
        }
    }
    
    else if(gracz3Btn2.disabled == false) {
        gracz1Btn1.disabled = false;
        gracz3Btn1.disabled = true;
        gracz3Btn2.disabled = true;
        ++iloscRzutow;
        let warunek = max10 + randomowo;
        if(warunek <= 10)
        {
            sprawdzCzy10 = randomowo;
            pktGracz3 = pktGracz3 + randomowo;
            punktyGracz3.innerHTML = "Suma punktow gracza nr 3: " + pktGracz3;
            gracz3PunktyJednorazowe2.innerHTML = "Rz:2: " + randomowo 
            if(sprawdzCzy10==10) {
                gracz3btn2.disabled = true;
                gracz1Btn1.disabled = false;
            }
        }
        else if(warunek > 10) {
            gracz3PunktyJednorazowe2.innerHTML = "Rz:2: " + 0 + " Niestety :("
        }
    }



    sprawdzCzy10 = 0;
    maxymalnaIloscRzutow.innerHTML = `rzutów: ${iloscRzutow}`;
}
}
else {
    
    btnOdNowa.innerHTML = 'Zagraj od nowa! :) '
    odNowa.appendChild(btnOdNowa)
    btnOdNowa.addEventListener('click', () => {
        iloscRzutow = 0;
        pktGracz1 = 0;
        pktGracz2 = 0;
        pktGracz3 = 0;
        punktyGracz1.innerHTML = "Suma punktow gracza nr 1: " + 0;
        punktyGracz2.innerHTML = "Suma punktow gracza nr 2: " + 0;
        punktyGracz3.innerHTML = "Suma punktow gracza nr 3: " + 0;
        gracz1PunktyJednorazowe1.value = 0;
        gracz1PunktyJednorazowe2.value = 0;
        gracz2PunktyJednorazowe1.value = 0;
        gracz2PunktyJednorazowe2.value = 0;
        gracz3PunktyJednorazowe1.value = 0;
        gracz3PunktyJednorazowe2.value = 0;

        gracz1PunktyJednorazowe1.innerHTML = "Rz:1: " + 0 
        gracz1PunktyJednorazowe2.innerHTML = "Rz:2: " + 0 
        gracz2PunktyJednorazowe1.innerHTML = "Rz:2: " + 0 
        gracz2PunktyJednorazowe2.innerHTML = "Rz:2: " + 0 
        gracz3PunktyJednorazowe1.innerHTML = "Rz:2: " + 0 
        gracz3PunktyJednorazowe2.innerHTML = "Rz:2: " + 0 

        gracz1Btn1.disabled = false;
        gracz1Btn2.disabled = true;
        gracz2btn1.disabled = true;
        gracz2btn2.disabled = true;
        gracz3Btn1.disabled = true;
        gracz3Btn2.disabled = true;
    })
}

}

gracz1Btn1.addEventListener('click', losuj)
gracz1Btn2.addEventListener('click', losuj)
gracz2btn1.addEventListener('click', losuj)
gracz2btn2.addEventListener('click', losuj)
gracz3Btn1.addEventListener('click', losuj)
gracz3Btn2.addEventListener('click', losuj)







zagraj.addEventListener('click' , iloscOsob)



