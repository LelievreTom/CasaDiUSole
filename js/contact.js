// Récupérer les éléments
const mainButton = document.getElementById('mainButton');
const submenu = document.getElementById('submenu');

// Ajouter un gestionnaire d'événements pour le clic sur le bouton principal
mainButton.addEventListener('click', function() {
    submenu.classList.toggle('visible'); // Affiche ou cache le sous-menu
});

// Initialisation de EmailJS avec votre User ID
emailjs.init("LV-qqM_sx1i4fOoZT");

// Gestionnaire d'événement pour le formulaire
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Vérifiez les données du formulaire
  const formData = new FormData(this); // Capture les données du formulaire
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`); // Affiche chaque paire clé-valeur dans la console
  }

  // Envoi des données via EmailJS
  emailjs.sendForm("service_tu85qzc", "template_ya0u36o", this)
    .then(function() {
      document.getElementById("contactForm").reset();
      alert("Message envoyé avec succès !");
    })
    .catch(function(error) {
      alert("Erreur lors de l'envoi : " + JSON.stringify(error));
    });
});
