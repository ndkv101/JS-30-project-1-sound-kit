
const animals = document.querySelectorAll('.animal');
const audios = document.querySelectorAll('audio');

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; 
    this.classList.remove('clicking');
}

animals.forEach(animal => animal.addEventListener('transitionend', removeTransition)); 

 animals[0].addEventListener('click', e => {
    audios[0].play();
    animals[0].classList.add('clicking');
 } );
 animals[1].addEventListener('click', e => {
    audios[1].play();
    animals[1].classList.add('clicking');
 } );
 animals[2].addEventListener('click', e => {
    audios[2].play();
    animals[2].classList.add('clicking');
 } );
 animals[3].addEventListener('click', e => {
    audios[3].play();
    animals[3].classList.add('clicking');
 } );
 animals[4].addEventListener('click', e => {
    audios[4].play();
    animals[4].classList.add('clicking');
 } );
 animals[5].addEventListener('click', e => {
    audios[5].play();
    animals[5].classList.add('clicking');
 } );
 animals[6].addEventListener('click', e => {
    audios[6].play();
    animals[6].classList.add('clicking');
 } );
 animals[7].addEventListener('click', e => {
    audios[7].play();
    animals[7].classList.add('clicking');
 } );
 animals[8].addEventListener('click', e => {
    audios[8].play();
    animals[8].classList.add('clicking');
 } );


