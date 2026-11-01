import assert from 'node:assert/strict';
import {questionBank,quickReview,audioDeepDive,webDeepDive} from '../data/index.js';
import {createExam,gradeExam,EXAM_QUOTAS,escapeHTML} from '../core.js';
const counts={7:6,8:16,9:6,10:14,11:4,12:4};
assert.equal(questionBank.length,50);
assert.equal(new Set(questionBank.map(q=>q.id)).size,50);
for(const [chapter,count] of Object.entries(counts))assert.equal(questionBank.filter(q=>q.chapter===Number(chapter)).length,count);
for(const q of questionBank){assert.ok(q.prompt.length>15,q.id);assert.ok(q.options.length>=4&&q.options.length<=5,q.id);assert.equal(q.optionExplanations.length,q.options.length,q.id);assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length,q.id);assert.equal(new Set(q.options).size,q.options.length,q.id);assert.ok(q.explanation&&q.source&&q.topic,q.id);assert.ok(q.optionExplanations.every(x=>x.length>5),q.id);}
const signatures=new Set();
for(let run=0;run<150;run++){const exam=createExam(questionBank);assert.equal(exam.length,30);assert.equal(new Set(exam.map(q=>q.id)).size,30);for(const [chapter,count] of Object.entries(EXAM_QUOTAS))assert.equal(exam.filter(q=>q.chapter===Number(chapter)).length,count);signatures.add(exam.map(q=>q.id).sort().join('|'));for(const q of exam){assert.equal(q.choices.length,q.options.length);for(const choice of q.choices){assert.equal(choice.text,q.options[choice.originalIndex]);assert.equal(choice.explanation,q.optionExplanations[choice.originalIndex]);}}const answers=Object.fromEntries(exam.map(q=>[q.id,q.correct]));assert.equal(gradeExam(exam,answers).correct,30);answers[exam[0].id]=(exam[0].correct+1)%exam[0].options.length;assert.equal(gradeExam(exam,answers).correct,29);delete answers[exam[1].id];const graded=gradeExam(exam,answers);assert.equal(graded.answered,29);assert.equal(graded.correct,28);assert.equal(Object.values(graded.chapters).reduce((n,x)=>n+x.total,0),30);}
assert.ok(signatures.size>140,'ชุดสุ่มควรหลากหลาย');
assert.equal(quickReview.length,6);assert.equal(quickReview.reduce((sum,x)=>sum+x.minutes,0),10);
assert.ok(audioDeepDive.length>=3);assert.equal(webDeepDive.length,3);
assert.equal(escapeHTML('<p id="x">&\'</p>'),'&lt;p id=&quot;x&quot;&gt;&amp;&#39;&lt;/p&gt;');
console.log('PASS: 50 questions, source metadata, 150 randomized 30-question sets, option mapping, grading, 10-minute review and safe markup.');
