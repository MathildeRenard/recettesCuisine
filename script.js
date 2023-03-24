// Récupération des éléments li dans une variable
const links = document.querySelectorAll("li a");

// Ajout d'un écouteur d'événement pour chaque lien
links.forEach(link => {
  link.addEventListener("mouseover", function() {
    this.style.backgroundColor = "red"; // Change la couleur du texte en rouge
  });

  link.addEventListener("mouseout", function() {
    this.style.backgroundColor = "black"; // Réinitialise la couleur du texte
  });
});

