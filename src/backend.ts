import { ref } from 'vue';

// Import Pocketbase
import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');

import type { ProjetsRecord, NotesRecord } from '@/pocketbase-types';
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
  const records = await pb.collection('projets').getFullList<ProjetsRecord>();
  return records;
}
// Retourne toutes les notes
export async function allNotes() {
  const records = await pb.collection('Notes').getFullList<NotesRecord>();
  return records;
}
// Retourne un projet par son id
export async function ProjectCrac(id: string) {
  const record = await pb.collection('projets').getOne<ProjetsRecord>('01ajn7fzezgtj21');
  return record;
}
export async function ProjectDuaLipa(id: string) {
  const record = await pb.collection('projets').getOne<ProjetsRecord>('4dzfg6gf6rxa30t');
  return record;
}
export async function ProjectYumin(id: string) {
  const record = await pb.collection('projets').getOne<ProjetsRecord>('c2gk7ueq53e4a2j');
  return record;
}
export async function ProjectStellaris(id: string) {
  const record = await pb.collection('projets').getOne<ProjetsRecord>('835ek99cjob1jzp');
  return record;
}
// //