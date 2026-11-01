import { audioQuestions, audioDeepDive } from './audio.js';
import { webQuestions, webDeepDive } from './web.js';
import { otherQuestions, quickReview } from './other.js';
export const questionBank = [...otherQuestions, ...audioQuestions, ...webQuestions];
export {audioDeepDive, webDeepDive, quickReview};
export const chapterNames = {7:'Computer Animation',8:'Sound',9:'Text & Typography',10:'Hypermedia & Web',11:'Networking & Security',12:'Multimedia Devices'};
