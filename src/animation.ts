import { gsap } from 'gsap';

export function shuffle(input) {
    let originalText = input.innerText;
    let originalLength = originalText.length;

    // Fonction pour générer un texte mélangé aléatoire
    function generateShuffledText() {
        let shuffledText = '';
        const characters = originalText.split('');
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const allCharacters = [...characters, ...alphabet];
        
        for (let i = 0; i < originalLength; i++) {
            const randomIndex = Math.floor(Math.random() * allCharacters.length);
            shuffledText += allCharacters[randomIndex];
        }
        return shuffledText;
    }

    input.addEventListener('mouseenter', () => {
        // Définir une boucle infinie pour générer un texte mélangé aléatoire
        let animation = gsap.to(input, { 
            repeat: -1,
            ease: "easeInOutQuad",
            onUpdate: () => {
                input.innerText = generateShuffledText();
            }
        });

        // Stopper l'animation lorsque le curseur quitte l'élément
        setTimeout(() => {
            animation.kill();
            input.innerText = originalText;
        }, 400);
    });
}
