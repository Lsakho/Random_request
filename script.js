// Fonction pour générer un nombre aléatoire entre min et max inclus
function generateRandomNumber(min, max, selectedNumbers) {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (selectedNumbers.includes(randomNumber));
    selectedNumbers.push(randomNumber);
    return randomNumber;
}

// Fonction pour afficher les nombres aléatoires dans le div de réponse
function displayRandomNumbers() {
    const min1 = 1;
    const max1 = 50;
    const min2 = 1;
    const max2 = 12;
    const responseDiv = document.querySelector('.response');
    // Effacer le contenu précédent du div de réponse
    responseDiv.innerHTML = '';

    // Tableaux pour stocker les nombres déjà sélectionnés
    let selectedNumbers1 = [];
    let selectedNumbers2 = [];

    // Créer un div pour afficher les nombres aléatoires entre 1 et 50
    const numbersDiv1 = document.createElement('div');
    numbersDiv1.classList.add('numbers');
    for (let i = 0; i < 5; i++) {
        const randomNumber1 = generateRandomNumber(min1, max1, selectedNumbers1);
        const numberElement1 = document.createElement('span');
        numberElement1.textContent = randomNumber1 + ' ';
        numbersDiv1.appendChild(numberElement1);
    }

    // Créer un div pour afficher les nombres aléatoires entre 1 et 12
    const numbersDiv2 = document.createElement('div');
    numbersDiv2.classList.add('numbers');
    for (let i = 0; i < 2; i++) {
        const randomNumber2 = generateRandomNumber(min2, max2, selectedNumbers2);
        const numberElement2 = document.createElement('span');
        numberElement2.textContent = randomNumber2 + ' ';
        numbersDiv2.appendChild(numberElement2);
    }

    // Ajouter les divs dans le div de réponse
    responseDiv.appendChild(numbersDiv1);
    responseDiv.appendChild(numbersDiv2);
}

// Récupérer le bouton et lui ajouter un écouteur d'événements pour la demande de nombres aléatoires
const requestButton = document.querySelector('button');
requestButton.addEventListener('click', displayRandomNumbers);
