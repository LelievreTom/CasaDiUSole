// Récupérer les éléments
const mainButton = document.getElementById('mainButton');
const submenu = document.getElementById('submenu');

// Ajouter un gestionnaire d'événements pour le clic sur le bouton principal
mainButton.addEventListener('click', function() {
    submenu.classList.toggle('visible'); // Affiche ou cache le sous-menu
});



// Fonction générique pour initialiser un slider
function initializeSlider(sliderId, prevButtonId, nextButtonId) {
    const slider = document.querySelector(`#${sliderId} .pictures-section`);
    const pictures = slider.querySelectorAll('.picture');
    const prevBtn = document.getElementById(prevButtonId);
    const nextBtn = document.getElementById(nextButtonId);
    let currentPicture = 0;

    if (pictures.length > 0) {
        pictures[currentPicture].classList.add('active');

        prevBtn.addEventListener('click', function () {
            pictures[currentPicture].classList.remove('active');
            currentPicture = (currentPicture - 1 + pictures.length) % pictures.length;
            pictures[currentPicture].classList.add('active');
        });

        nextBtn.addEventListener('click', function () {
            pictures[currentPicture].classList.remove('active');
            currentPicture = (currentPicture + 1) % pictures.length;
            pictures[currentPicture].classList.add('active');
        });
    }
}

// Initialiser chaque slider
initializeSlider('slider1', 'prevPicture1', 'nextPicture1');
initializeSlider('slider2', 'prevPicture2', 'nextPicture2');
initializeSlider('slider3', 'prevPicture3', 'nextPicture3');
initializeSlider('slider4', 'prevPicture4', 'nextPicture4');

