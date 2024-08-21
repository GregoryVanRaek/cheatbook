var sequences = [
  [1, 3, 2],
  [0, 2, 4],
  [5, 6, 7],
  [8, 9, 4],
  [2, 3, 8],
  [0, 1, 5],
  [4, 7, 9],
  [6, 8, 2],
  [3, 5, 6],
  [1, 4, 9],
]; // Tableau de toutes les séquences possibles

var selectedRunes = []; // Tableau pour stocker les runes sélectionnées
var successMessagesCounter = {};
var phrasesErreur = [
  "Désolé, essayez encore.",
  "Hmm, ça ne semble pas être la bonne combinaison.",
  "Oh non, ce n'est pas la bonne séquence.",
  "Essayez autre chose, s'il vous plaît.",
  "Hmm, quelque chose ne va pas, réessayez.",
  "Cette séquence n'est pas valide, essayez à nouveau.",
  "Il semble que vous ayez fait une erreur dans la séquence.",
  "Oops, ce n'est pas tout à fait ça.",
  "Essayez encore une fois, vous êtes proche !",
  "Il y a une erreur dans la séquence, réessayez.",
  "Oh non, cette séquence n'est pas correcte.",
  "Hmm, ça ne semble pas être la bonne combinaison.",
];

var phrasesReussite = [
  ["Premier indice", "Deuxieme indice", "Troisieme indice"],
  [
    "Magnifique ! Vous avez débloqué une nouvelle voie.",
    "Vous avez percé le mystère avec brio ! Continuez sur cette lancée.",
    "Superbe ! Vous êtes sur la bonne voie, ne vous arrêtez pas.",
  ],
  [
    "Incroyable ! Vous avez réussi. Vous êtes un véritable expert.",
    "Génial ! La magie opère, continuez à avancer.",
    "C'est ça ! Continuez à résoudre les énigmes, vous êtes sur la bonne voie.",
  ],
  [
    "Bien joué ! Vous avez réussi à déverrouiller une nouvelle partie du jeu !",
    "Fantastique ! Vous êtes sur le point de découvrir de nouveaux secrets.",
    "Vous avez réussi ! Continuez à explorer, il y a encore beaucoup à découvrir.",
  ],
  [
    "Vous avez réussi à débloquer une nouvelle voie. Continuez à avancer.",
    "Bravo ! Vous avez résolu l'énigme. Continuez à explorer le monde mystérieux.",
    "Magnifique ! Vous avancez dans le jeu avec succès.",
  ],
  [
    "Félicitations ! Vous avez trouvé la clé pour avancer. Continuez à explorer.",
    "Superbe ! Vous avez découvert un nouveau secret. Continuez à chercher.",
    "Bravo ! Vous avez réussi à avancer. Continuez à résoudre les énigmes.",
  ],
  [
    "Vous avez débloqué une nouvelle partie du jeu. Continuez sur cette lancée.",
    "Félicitations ! Vous avez trouvé la solution. Continuez à progresser.",
    "Excellent travail ! Vous avancez dans le jeu avec succès.",
  ],
  [
    "Félicitations ! Vous avez débloqué une nouvelle étape. Continuez à avancer.",
    "Bravo ! Vous avez réussi à percer le mystère. Continuez à explorer.",
    "Magnifique ! Vous êtes sur la bonne voie pour réussir.",
  ],
  [
    "Superbe ! Vous avez trouvé la clé. Continuez à explorer le jeu.",
    "Félicitations ! Vous avez résolu l'énigme. Continuez à chercher.",
    "Excellent travail ! Vous avez réussi à avancer. Continuez comme ça.",
  ],
  [
    "Félicitations ! Vous avez réussi à déverrouiller une nouvelle partie. Continuez à explorer.",
    "Bravo ! Vous avez découvert un nouveau secret. Continuez à chercher.",
    "Magnifique ! Vous avez trouvé la solution. Continuez à avancer.",
  ],
]; // Tableau de messages de réussite personnalisés pour chaque combinaison

document.addEventListener("DOMContentLoaded", function () {
  var runes = document.querySelectorAll(".runes");
  var selectedRunesContainer = document.getElementById(
    "selectedRunesContainer"
  );

  runes.forEach(function (rune) {
    rune.addEventListener("click", function () {
      var runeIndex = parseInt(this.dataset.index);
      if (selectedRunes.length < 3) {
        selectedRunes.push(runeIndex); // Ajoute la rune cliquée à la liste des runes sélectionnées
        this.classList.add("selected"); // Ajoute une classe pour indiquer que la rune est sélectionnée
        this.classList.add("pressed");
        addRuneToSelectedContainer(this.cloneNode(true)); // Ajoute la rune à la div prévue
        if (selectedRunes.length === 3) {
          // Si trois runes ont été sélectionnées
          validateSequence(); // Valide la séquence
        }
      }
    });

    // Supprimer la classe 'pressed' après l'animation
    rune.addEventListener("animationend", function () {
      this.classList.remove("pressed");
    });
  });

  const reset = document.getElementById("reset");
  reset.addEventListener("click", () => {
    resetGame();
  });
});

function addRuneToSelectedContainer(runeElement) {
  runeElement.classList.add("selected-rune");
  selectedRunesContainer.appendChild(runeElement);
}

// Déclarer un objet pour stocker les séquences validées avec leurs messages de succès associés et le nombre de fois qu'elles ont été validées
var validatedSequences = {};

function validateSequence() {
  var isMatch = false;
  var index = -1;
  for (var i = 0; i < sequences.length; i++) {
    if (arraysEqual(selectedRunes, sequences[i])) {
      isMatch = true;
      index = i;
      break;
    }
  }
  if (isMatch) {
    var sequenceKey = selectedRunes.join("-"); // Créer une clé unique pour la séquence
    if (!validatedSequences.hasOwnProperty(sequenceKey)) {
      // Si la séquence n'a pas déjà été validée
      validatedSequences[sequenceKey] = {
        messages: phrasesReussite[index],
        count: 1,
      }; // Initialiser les messages de succès et le nombre de fois validé pour cette séquence
    } else {
      // Si la séquence a déjà été validée, incrémenter le nombre de fois validé
      var sequenceInfo = validatedSequences[sequenceKey];
      sequenceInfo.count++;
    }
    var sequenceInfo = validatedSequences[sequenceKey];
    var messages = sequenceInfo.messages;
    var messageCount = Math.min(sequenceInfo.count, messages.length); // Limiter le nombre de messages affichés
    var messagesContainer = document.getElementById("successMessagesContainer");
    messagesContainer.innerHTML = ""; // Vide le contenu du conteneur avant d'ajouter de nouveaux messages
    for (var i = 0; i < messageCount; i++) {
      var messageElement = document.createElement("p");
      messageElement.textContent = messages[i];
      messagesContainer.appendChild(messageElement); // Ajouter le message au conteneur
    }
  } else {
    var randomIndex = Math.floor(Math.random() * phrasesErreur.length);
    showMessage(phrasesErreur[randomIndex]);
  }
  selectedRunes.forEach(function (runeIndex) {
    var rune = document.querySelector(".runes[data-index='" + runeIndex + "']");
    var clonedRune = rune.cloneNode(true); // Clonez la rune sélectionnée
  });
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function showMessage(message) {
  document.getElementById("successMessagesContainer").innerText = message;
}

function resetGame() {
  document.getElementById("successMessagesContainer").innerText = "";
  selectedRunes = []; // Réinitialiser le tableau des runes sélectionnées

  // Supprimer le contenu de la div "selectedRunesContainer"
  selectedRunesContainer.innerHTML = "";

  // Réinitialiser les runes à leur état initial en supprimant la classe 'selected' et 'descend'
  runes.forEach(function (rune) {
    rune.classList.remove("selected");
    rune.classList.remove("descend");
  });

  // Supprimer les classes 'pressed' et 'glow' après l'animation
  runes.forEach(function (rune) {
    rune.classList.remove("pressed");
    rune.classList.remove("glow");
  });

  // Supprimer les animations en cours sur les runes
  runes.forEach(function (rune) {
    rune.style.animation = "none";
  });

  // Réinitialiser les autres éléments si nécessaire
  clearSuccessMessages();
}

function clearSuccessMessages() {
  var messagesContainer = document.getElementById("successMessagesContainer");
  messagesContainer.innerHTML = ""; // Vide le contenu du conteneur
}
