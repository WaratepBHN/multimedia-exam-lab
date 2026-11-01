import { audioQuestions, audioDeepDive } from './audio.js';
import { webQuestions, webDeepDive } from './web.js';
import { otherQuestions, quickReview as originalQuickReview } from './other.js';
import { chapter6Review, vectorDeepDive } from './vector.js';
export const questionBank = [...otherQuestions, ...audioQuestions, ...webQuestions];
export const quickReview = [chapter6Review, ...originalQuickReview.map(chapter => ({...chapter, minutes: chapter.chapter === 8 || chapter.chapter === 10 ? 2.5 : chapter.minutes}))];
export {audioDeepDive, webDeepDive, vectorDeepDive};
export const chapterNames = {6:'2D & 3D Graphics',7:'Computer Animation',8:'Sound',9:'Text & Typography',10:'Hypermedia & Web',11:'Networking & Security',12:'Multimedia Devices'};
