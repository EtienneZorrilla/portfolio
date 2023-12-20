// Script pour la validation du formulaire (exemple de validation minimale)

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Validation minimale (vérifie si les champs Nom, Email et Message sont remplis)
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (nom === '' || email === '' || message === '') {
        alert('Veuillez remplir tous les champs.');
    } else {
        // Ici, vous pouvez envoyer le formulaire
        // Par exemple, en utilisant fetch() pour envoyer les données à un serveur
        // fetch('url_du_serveur', {
        //     method: 'POST',
        //     body: new FormData(form)
        // }).then(response => {
        //     // Gérer la réponse du serveur
        // }).catch(error => {
        //     // Gérer les erreurs
        // });
        alert('Formulaire soumis avec succès !');
        form.reset(); // Réinitialise le formulaire
    }
});
