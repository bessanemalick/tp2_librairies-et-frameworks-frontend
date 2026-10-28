
const images = document.querySelectorAll('.diaporama img');
let index = 0;
let enCours = false;

function changerImage(direction) {
    if (enCours) return;
    enCours = true;

    const actuelle = images[index];
    const suivantIndex = (index + direction + images.length) % images.length;
    const suivante = images[suivantIndex];

    suivante.style.transition = 'none';
    suivante.style.transform = `translateX(${direction * 100}%)`;
    suivante.classList.add('active');

    suivante.offsetHeight;

    suivante.style.transition = 'transform 0.5s ease';
    actuelle.style.transition = 'transform 0.5s ease';

    suivante.style.transform = 'translateX(0)';
    actuelle.style.transform = `translateX(${-direction * 100}%)`;

    setTimeout(() => {
        actuelle.classList.remove('active');
        actuelle.style.transition = '';
        actuelle.style.transform = '';
        suivante.style.transition = '';
        suivante.style.transform = '';
        index = suivantIndex;
        enCours = false;
    }, 500);
}
