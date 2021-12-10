/* ---------------------------------------------- Animation Photo --------------------------------------------------*/
let vader= ["./images/David.jpg", "./images/brad pitt.jpg", "./images/bp.jpg"];

let photoIndex = 0;

function ChangeRock() {
    photoIndex = (photoIndex+1) % vader.length;
    document.querySelector("#photo").style.backgroundImage = "url('"+vader[photoIndex]+"')";
    console.log(vader);
}

/* ----------------------------------------------Animation Click --------------------------------------------------*/

window.addEventListener('click', (e) => {
    const rond = document.createElement('div');
    rond.className = 'clickAnim';
    rond.style.top = `${e.pageY - 12.5}px`;
    rond.style.left = `${e.pageX - 12.5}px`;
    document.body.appendChild(rond);
})