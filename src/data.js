// my pet data for the kennel app
import happyBuddy from './assets/happy buddy.webp';
import angryBuddy from './assets/angry buddy.jpg';
import happyWhiskers from './assets/happy whiskers.webp';
import angryWhiskers from './assets/angry whiskers.jpg';
import happyMax from './assets/happy max.webp';
import angryMax from './assets/angry max.jpg';

export const initialData = [
  {
    id: 1,
    name: "Buddy",
    status: "Hungry",
    mood: "sad",
    sadImage: angryBuddy,
    happyImage: happyBuddy,
    angryImage: angryBuddy
  },
  {
    id: 2,
    name: "Whiskers",
    status: "Lonely",
    mood: "sad",
    sadImage: angryWhiskers,
    happyImage: happyWhiskers,
    angryImage: angryWhiskers
  },
  {
    id: 3,
    name: "Max",
    status: "Bored",
    mood: "sad",
    sadImage: angryMax,
    happyImage: happyMax,
    angryImage: angryMax
  }
];
