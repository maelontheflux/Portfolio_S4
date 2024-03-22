import { ref } from 'vue';

// Import Pocketbase
import PocketBase from 'pocketbase';
// PocketBase vps connection
var pocketbase_ip=''
if(import.meta.env.MODE === 'production')
  pocketbase_ip='https://maelgrosjean.fr/'
else
  pocketbase_ip='http://127.0.0.1:8090'

export const pb = new PocketBase(pocketbase_ip);
//

import type { ProjetsResponse, NotesResponse } from '@/pocketbase-types';
// //

// Fonction pour afficher l'heure //
export const currentTime = ref<string>(''); //Variable pour stocker l'heure actuelle

// Fonction pour obtenir l'heure actuelle selon le fuseau horaire en AM/PM //
function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours() % 12 || 12; // Conversion en format 12 heures
  const minutes = date.getMinutes();
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM'; // Détermine si c'est le matin ou l'après-midi

  currentTime.value = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
}

// Appeler la fonction getCurrentTime
getCurrentTime();
// Met à jour l'heure toutes les minutes
setInterval(getCurrentTime, 60000);
// //

// Pocketbase //
// Retourne tous les projets
export async function allProject() {
  const records = await pb.collection('projets').getFullList<ProjetsResponse>();
  return records;
}
// Retourne toutes les notes
export async function allNotes() {
  const records = await pb.collection('notes').getFullList<NotesResponse>();
  return records;
}
// Retourne un projet par son id
export async function ProjectCrac(id: string) {
  const record = await pb.collection('projets').getOne<ProjetsResponse>('01ajn7fzezgtj21');
  return record;
}
export async function ProjectDuaLipa(id: string) {
  const record = await pb.collection('projets').getOne<ProjetsResponse>('4dzfg6gf6rxa30t');
  return record;
}
export async function ProjectYumin(id: string) {
  const record = await pb.collection('projets').getOne<ProjetsResponse>('c2gk7ueq53e4a2j');
  return record;
}
export async function ProjectStellaris(id: string) {
  const record = await pb.collection('projets').getOne<ProjetsResponse>('835ek99cjob1jzp');
  return record;
}
// //

// Etat de connexion
export const currentUser = ref(); // Déclare currentUser en tant que référence réactive

async () => { // onMounted pour exécuter du code après que le composant est monté
    // Écoute les changements dans le magasin d'authentification
    pb.authStore.onChange(() => {
        // Met à jour currentUser avec la nouvelle valeur du modèle d'authentification
        currentUser.value = pb.authStore.model;
    }, true); // Utilise l'option immediate pour exécuter le rappel une fois immédiatement
};
console.log(currentUser.value);