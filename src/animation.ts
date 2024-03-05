import { gsap } from 'gsap';

export function shuffle(input : HTMLElement) {
    let originalText = input.innerText;
    let originalLength = originalText.length;

    // Fonction pour générer un texte mélangé aléatoire
    function generateShuffledText() {
        let shuffledText = '';
        const characters = originalText.split('');
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const allCharacters = [...characters, ...alphabet];
        
        for (let i = 0; i <= originalLength; i++) {
            const randomIndex = Math.floor(Math.random() * allCharacters.length);
            shuffledText += allCharacters[randomIndex];
        }
        return shuffledText;
    }

    input.addEventListener('mouseenter', () => {
        // Boucle infinie pour générer un texte mélangé aléatoire
        let animation = gsap.to(input, { 
            repeat: -1,
            ease: "easeInOutQuad",
            onUpdate: () => {
                input.innerText = generateShuffledText();
            },
            onComplete: () => {
                input.innerText = originalText;
                animation.kill();
            }
        });

        // Stopper l'animation
        setTimeout(() => {
            input.innerText = originalText;
            animation.kill();
        }, 400);
    });
}
