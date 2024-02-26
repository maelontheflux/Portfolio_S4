import { ref } from 'vue';

// Fonction pour afficher l'heure //
export const currentTime = ref<string>(''); //Variable pour stocker l'heure actuelle

// Fonction pour obtenir l'heure actuelle selon le fuseau horaire en AM/PM
function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours() % 12 || 12; // Conversion en format 12 heures
  const minutes = date.getMinutes();
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM'; // Détermine si c'est le matin ou l'après-midi

  currentTime.value = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
}

// Appeler la fonction getCurrentTime
getCurrentTime();
// Met à jour l'heure toutes les minutes
setInterval(getCurrentTime, 60000);
////
