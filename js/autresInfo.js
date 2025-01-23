// Récupérer les éléments
const mainButton = document.getElementById('mainButton');
const submenu = document.getElementById('submenu');

// Ajouter un gestionnaire d'événements pour le clic sur le bouton principal
mainButton.addEventListener('click', function() {
    submenu.classList.toggle('visible'); // Affiche ou cache le sous-menu
});