// เลขหน้าอ้างอิงเป็นหน้า PDF โดยนับหน้าปกเป็นหน้า 1
// คำอธิบายเสริมมาตรฐานแยกจากข้อความในสไลด์อย่างชัดเจน
export const webQuestions = [
  {
    id: 'ch10-01', chapter: 10, topic: 'เลือกข้อแตกต่าง: linear / nonlinear และ MEMEX',
    prompt: 'พิจารณาวิธีเข้าถึงตามสถานการณ์ที่ระบุ ข้อใดต่างจากข้ออื่น เพราะใช้ลำดับเนื้อหาเดียวแทนการเลือกเส้นทางแบบ nonlinear?',
    options: [
      'ใช้ MEMEX ตามแนวคิดของ Bush เพื่อตามรอยเชื่อมโยงเอกสารและเลือก trails',
      'ชมภาพยนตร์ในโรงตามลำดับที่ฉายตั้งแต่ต้นจนจบ โดยผู้ชมเลือกข้ามเนื้อหาไม่ได้',
      'เลือกเพลงจากรายการแทร็กของ Audio CD โดยไม่ต้องเล่นทุกเพลงก่อนหน้า',
      'เลือก hyperlink ในเว็บเพื่อข้ามไปยังเนื้อหาที่เกี่ยวข้อง'
    ],
    correct: 1,
    explanation: 'การชมภาพยนตร์ตามสถานการณ์นี้มีลำดับเดียว ส่วนอีกสามข้อเลือกชิ้นข้อมูลหรือเส้นทางได้ MEMEX เป็นแนวคิดต้นแบบของ hypertext/hypermedia จากการเชื่อมเอกสาร ไม่ใช่เว็บที่สร้างเสร็จในปี 1945 ให้จำแนกจากวิธีเข้าถึง ไม่เหมารวมว่าสื่อชนิดหนึ่งเป็น linear เสมอ',
    optionExplanations: [
      'MEMEX เสนอการเชื่อมโยงเอกสารและ trails จึงอยู่กลุ่มแนวคิดการเข้าถึงแบบ nonlinear และเป็นต้นแบบแนวคิด hypertext',
      'เป็นข้อแตกต่าง: ผู้ชมรับเนื้อหาตามลำดับฉายเดียวในสถานการณ์ที่กำหนด',
      'การเลือกแทร็กโดยข้ามเพลงก่อนหน้าได้เป็นการเข้าถึงแบบ nonlinear แม้เพลงหนึ่งมีลำดับเวลา',
      'การตาม hyperlink เปิดให้เลือกเส้นทางไปเนื้อหาอื่น จึงอยู่กลุ่ม nonlinear'
    ],
    source: 'สไลด์บท 10 หน้า PDF 6–10; ดัดแปลงแนวแบบฝึกเดิม',
    difficulty: 'ประยุกต์'
  },
  {
    id: 'ch10-02', chapter: 10, topic: 'HTML ปัจจุบัน, SGML และ markup สองประเภท',
    prompt: 'ข้อใดอธิบายประเภท markup และความสัมพันธ์ระหว่าง HTML กับ SGML ได้ถูกที่สุดตามสไลด์?',
    options: [
      'HTML จัดเป็น descriptive markup แม้มี legacy formatting tags และ HTML ปัจจุบันมีกฎของตนเองแทนการอิง SGML แบบรุ่นแรก',
      'HTML รุ่นแรกอิง SGML จริง ดังนั้น HTML ปัจจุบันจึงยังต้องนิยามและ parse ตามกฎ SGML เดิมทั้งหมด',
      'HTML เป็น descriptive จึงไม่เคยมี tags ที่เกี่ยวข้องกับการจัดรูปแบบมาก่อน',
      'Procedural เน้นวิธีจัดรูปจริง ดังนั้น HTML ต้องเป็น procedural ทั้งหมดเพราะ browser แสดงมันบนจอ'
    ],
    correct: 0,
    explanation: 'Descriptive บอกชนิดและโครงสร้างเนื้อหา ส่วน procedural เน้นวิธีจัดรูปหรือแสดงผล สไลด์จัด HTML/XML เป็น descriptive และ LaTeX/PostScript เป็น procedural พร้อมระบุ legacy formatting tags ของ HTML ส่วนเรื่อง SGML ต้องแยกประวัติ HTML รุ่นแรกออกจาก HTML ปัจจุบันซึ่งมีกฎของตนเอง',
    optionExplanations: [
      'ถูกครบ: descriptive เป็นการจัดประเภทภาพรวม ไม่ได้ลบข้อยกเว้น legacy และ HTML ปัจจุบันไม่อิง SGML แบบเดิม',
      'ประวัติ HTML รุ่นแรกถูก แต่ขยายเป็นข้อสรุปเกี่ยวกับ HTML ปัจจุบันผิด ต้องอ่านหน้า 19 ประกอบ',
      'HTML อยู่กลุ่ม descriptive จริง แต่สไลด์ยก legacy formatting tag เช่น <B> จึงใช้คำว่าไม่เคยไม่ได้',
      'เอกสารที่ browser แสดงได้ยังเป็น descriptive ได้ การนำไปแสดงไม่ทำให้ภาษานั้นเน้นคำสั่งจัดรูปทั้งหมด'
    ],
    source: 'สไลด์บท 10 หน้า PDF 19–20 (อ่านประกบข้อความย่อในหน้า PDF 14); ดัดแปลงแนวแบบฝึกเดิม', difficulty: 'พื้นฐาน'
  },
  {
    id: 'ch10-03', chapter: 10, topic: 'HTML HTTP URL DOM',
    prompt: 'เมื่อผู้เรียนเปิดลิงก์บทเรียนใน browser การแจกแจงหน้าที่ขององค์ประกอบเว็บข้อใดครบและถูกที่สุด?',
    options: [
      'URL ระบุที่อยู่และ HTML แลกเปลี่ยนข้อมูล ส่วน HTTP กำหนดโครงสร้างเอกสาร',
      'HTML กำหนดโครงสร้างและ HTTP แลกเปลี่ยนข้อมูล ส่วน DOM คือที่อยู่ไฟล์บน server',
      'DOM เป็น protocol และ URL เป็นโครงสร้างข้อมูลในหน่วยความจำ ส่วน HTML กำหนดเนื้อหา',
      'URL อ้างตำแหน่ง resource, HTTP ใช้แลกเปลี่ยนข้อมูล, HTML ระบุโครงสร้าง และ DOM แทนเอกสารในหน่วยความจำ'
    ],
    correct: 3,
    explanation: 'องค์ประกอบทั้งสี่ทำหน้าที่คนละอย่าง: ที่อยู่ วิธีสื่อสาร โครงสร้างเอกสาร และแบบจำลองเอกสารในหน่วยความจำ ไม่ควรสลับ HTML กับ HTTP หรือ DOM กับ URL',
    optionExplanations: [
      'URL อ้างที่อยู่ถูก แต่สลับหน้าที่ HTML กับ HTTP',
      'HTML และ HTTP ถูก แต่ DOM ไม่ใช่ที่อยู่ไฟล์',
      'HTML เกี่ยวกับโครงสร้างเนื้อหาจริง แต่ DOM ไม่ใช่ protocol และ URL ไม่ใช่โครงสร้างข้อมูลเอกสาร',
      'จับคู่หน้าที่ทั้งสี่ถูกต้อง'
    ],
    source: 'สไลด์บท 10 หน้า PDF 14, 25, 42', difficulty: 'พื้นฐาน'
  },
  {
    id: 'ch10-04', chapter: 10, topic: 'Tag Element Attribute',
    prompt: 'จากโค้ด <a href="lesson.html">อ่านต่อ</a> ข้อใดจำแนกองค์ประกอบได้ถูกที่สุด?',
    options: [
      'href เป็น text content ส่วน อ่านต่อ เป็น attribute value',
      '<a> คือทั้ง element เสมอ และ lesson.html เป็นชื่อ tag',
      'href เป็นชื่อ attribute, lesson.html เป็นค่า, อ่านต่อ เป็นข้อความ และโค้ดทั้งชุดเป็น element',
      'href เป็น attribute จริง ดังนั้นโค้ดนี้มี element สองตัวคือ a กับ href'
    ],
    correct: 2,
    explanation: 'Attribute ให้ข้อมูลประกอบ element และอยู่ใน start tag ข้อความอยู่ระหว่าง start/end tags; element ในตัวอย่างคือ anchor ทั้งชุด ไม่ใช่นับ attribute เป็น element เพิ่ม',
    optionExplanations: [
      'สลับ attribute กับข้อความที่เป็นเนื้อหา',
      'Tag เป็นส่วนกำกับเริ่มหรือจบของ element ส่วน lesson.html เป็นค่า attribute',
      'แยกชื่อ attribute ค่า attribute ข้อความ และ element ได้ถูกครบ',
      'href เป็น attribute จริง แต่ไม่ใช่ element อีกตัว'
    ],
    source: 'สไลด์บท 10 หน้า PDF 21–22', difficulty: 'พื้นฐาน'
  },
  {
    id: 'ch10-05', chapter: 10, topic: 'HTML CSS JavaScript DOM',
    prompt: 'เว็บลงทะเบียนแสดงคำเตือนเมื่อผู้ใช้กรอกข้อมูลไม่ครบ และเปลี่ยนขนาดกล่องตามจอ ข้อใดอธิบายหน้าที่เทคโนโลยีได้เหมาะสมที่สุด?',
    options: [
      'HTML ระบุองค์ประกอบ, CSS กำหนด presentation รวม layout และ JavaScript ใช้ DOM API อ่านหรือแก้ข้อมูลในหน้าเพื่อตอบสนองผู้ใช้',
      'HTML ระบุองค์ประกอบและ CSS กำหนดสีจริง แต่ JavaScript ใช้ DOM API ได้เฉพาะอ่าน ห้ามแก้เอกสาร',
      'JavaScript เพิ่ม interactivity จริง จึงเป็นตัวเก็บ DOM และ CSS เป็น protocol ติดต่อ server',
      'CSS จัดรูปแบบได้ ดังนั้นการตรวจข้อมูลและเปลี่ยนข้อความทุกกรณีต้องเกิดใน CSS เท่านั้น'
    ],
    correct: 0,
    explanation: 'HTML คือโครงสร้าง CSS คือการนำเสนอรวมการจัดวาง และ JavaScript เพิ่มพฤติกรรมโดยเรียก API ที่เกี่ยวข้อง DOM API รองรับทั้งการอ่านและเปลี่ยนเอกสารในหน่วยความจำ',
    optionExplanations: [
      'ครบทั้งโครงสร้าง presentation และพฤติกรรมที่อ่านหรือแก้ DOM ได้',
      'สองบทบาทแรกถูกบางส่วน แต่ DOM API ไม่ได้จำกัดแค่อ่าน และ CSS ไม่ได้มีเพียงสี',
      'JavaScript เพิ่ม interactivity จริง แต่ DOM เป็นโครงสร้างข้อมูล และ CSS ไม่ใช่ protocol',
      'CSS จัด presentation จริง แต่ไม่ได้หมายความว่าการตรวจข้อมูลและแก้ข้อความเป็นหน้าที่ CSS ทุกกรณี'
    ],
    source: 'สไลด์บท 10 หน้า PDF 24–25, 29–32', difficulty: 'ประยุกต์'
  },
  {
    id: 'ch10-06', chapter: 10, topic: 'DOM กับ DOM API และการแก้ไข',
    prompt: 'เมื่อกดเพิ่มสินค้าแล้ว JavaScript สร้างรายการใหม่บนหน้าโดยไม่โหลดเอกสารใหม่ทั้งหน้า ข้อใดอธิบาย DOM และ DOM API ได้ชัดที่สุด?',
    options: [
      'DOM API คือต้นไม้ข้อมูลเอกสาร ส่วน DOM คือชุดเมธอดสำหรับสร้าง node',
      'DOM เก็บเอกสารในหน่วยความจำจริง แต่ DOM API ทำได้เฉพาะดึงข้อมูลเดิมมาแสดง',
      'เพราะ HTML กำหนดองค์ประกอบ การเพิ่มรายการจึงต้องเขียนไฟล์ HTML บน server ใหม่ทุกครั้ง',
      'DOM เป็นโครงสร้างข้อมูลแทนเอกสาร ส่วน DOM API เป็นช่องทางที่ JavaScript ใช้สร้างหรือเพิ่ม node แล้ว browser ปรับการแสดงผล'
    ],
    correct: 3,
    explanation: 'ต้องแยกสิ่งที่ถูกจัดการคือ DOM ออกจากช่องทางที่ใช้จัดการคือ DOM API การเพิ่ม ลบ หรือแก้ node เปลี่ยน DOM ที่อยู่ใน browser ได้ โดยไม่จำเป็นต้องแก้ไฟล์ต้นฉบับบน server ทุก interaction',
    optionExplanations: [
      'สลับ data structure กับ interface',
      'DOM อยู่ในหน่วยความจำถูก แต่ API รองรับการแก้ เพิ่ม และลบด้วย',
      'HTML ระบุโครงสร้างต้นทางจริง แต่ script เปลี่ยน DOM ภายหลังได้',
      'แยกข้อมูลกับ interface และอธิบายการเพิ่ม node ได้ตรงกรณี'
    ],
    source: 'สไลด์บท 10 หน้า PDF 25, 29, 31–32, 42', difficulty: 'ประยุกต์'
  },
  {
    id: 'ch10-07', chapter: 10, topic: 'นับ direct element children ใน DOM',
    prompt: 'จาก markup นี้ <section id="memo"><h2>บันทึก</h2><p>เปิด <a href="plan.html">แผนงาน</a></p><div><p>ร่าง</p><p>ตรวจ</p></div></section> มี element กี่ตัวที่มีลูกโดยตรงเป็น element (direct element children) มากกว่า 1 ตัว? พิจารณาเฉพาะ elements ใน markup นี้ ไม่นับ text nodes (ทั้งข้อความและ whitespace) เป็นลูก และไม่นับลูกหลานชั้นถัดไปเป็นลูกโดยตรง',
    options: [
      '1 ตัว คือ section เพราะ div เป็นลูกหลานจึงไม่ต้องพิจารณาจำนวนลูกของมัน',
      '2 ตัว คือ section และ div',
      '3 ตัว คือ section, p ที่มีลิงก์ และ div เพราะข้อความกับ a นับเป็นลูกสองตัวของ p',
      '7 ตัว เพราะทุก element ที่ปรากฏใน markup รวม section ต้องมีลูกมากกว่า 1'
    ],
    correct: 1,
    explanation: 'มี 2 elements ที่ผ่านเงื่อนไข: section มี direct element children 3 ตัวคือ h2, p และ div; ส่วน div มี p เป็นลูกโดยตรง 2 ตัว สำหรับ p ที่มีลิงก์ มี element child เพียง a ตัวเดียว จึงไม่ผ่าน แม้มีข้อความด้วย ข้อความและ whitespace เป็น text nodes ซึ่งโจทย์ไม่ให้นับ และ a กับ p ใต้ div เป็น descendants ของ section แต่ไม่ใช่ลูกโดยตรงของ section',
    optionExplanations: [
      'section ผ่านจริง แต่ต้องตรวจ div ด้วย เพราะโจทย์ถามทุก element ใน markup ไม่ได้จำกัดเฉพาะราก',
      'ถูก: section มีลูกโดยตรงเป็น element 3 ตัว และ div มี 2 ตัว จึงมี parent ที่ผ่านเงื่อนไขรวม 2 ตัว',
      'section และ div ผ่านจริง แต่ p มี direct element child เพียง a; ข้อความไม่นับตามเงื่อนไข',
      'มี elements ทั้งชุด 7 ตัวจริง แต่ไม่ได้แปลว่าทุกตัวมีลูกโดยตรงเป็น element มากกว่า 1; หลายตัวไม่มี element children'
    ],
    source: 'สไลด์บท 10 หน้า PDF 26–28; ดัดแปลงแนวแบบฝึกเดิมด้วย markup ใหม่ที่ปิด tags ครบ', difficulty: 'ประยุกต์'
  },
  {
    id: 'ch10-08', chapter: 10, topic: 'Renderer และ main thread',
    prompt: 'หน้าเว็บมี JavaScript คำนวณต่อเนื่องนานจนปุ่มตอบสนองช้า คำอธิบายใดสอดคล้องกับ renderer มากที่สุด?',
    options: [
      'Browser ทั้งระบบมี thread เดียว จึงไม่มีงาน network หรือการวาดใดทำแยกได้',
      'Main thread คำนวณ layout จริง แต่ไม่เคย execute JavaScript จึงไม่มีทางเกี่ยวกับอาการนี้',
      'งาน JavaScript ที่ยึด main thread นานอาจทำให้งาน UI และการปรับการแสดงผลต้องรอ แม้ browser มีหลาย processes และ threads',
      'DOM ถูกสร้างจาก HTML จริง ดังนั้นหลังสร้างแล้วไม่ต้องคำนวณ layout อีกแม้หน้าเปลี่ยน'
    ],
    correct: 2,
    explanation: 'Main thread ทำหลายหน้าที่รวม parse/build DOM, execute JavaScript และคำนวณ layout การครองเวลานานจึงกระทบการตอบสนองได้ แต่ไม่ควรเหมารวมว่า browser ทั้งระบบมี thread เดียว',
    optionExplanations: [
      'สไลด์ระบุหลาย processes/threads และมี threads ที่ paint pixels',
      'Main thread คำนวณ layout จริง และ execute JavaScript ด้วย',
      'อธิบายการแย่งเวลาบน main thread โดยไม่เหมารวมสถาปัตยกรรมทั้ง browser',
      'DOM เริ่มจาก HTML ได้จริง แต่การเปลี่ยนเอกสารหรือรูปแบบอาจทำให้ต้องคำนวณการแสดงผลใหม่'
    ],
    source: 'สไลด์บท 10 หน้า PDF 33–36 โดยเฉพาะแผนภาพหน้า 35', difficulty: 'ประยุกต์'
  },
  {
    id: 'ch10-09', chapter: 10, topic: 'Web Worker และ DOM',
    prompt: 'เว็บต้องคำนวณข้อมูลกราฟจำนวนมากและแสดงผลเป็นข้อความบนหน้า โดยยังอยากให้ปุ่มตอบสนอง วิธีใดเหมาะสมที่สุด?',
    options: [
      'ให้ worker ทำงานคำนวณที่เหมาะ ส่งผลด้วย message กลับมา แล้วให้ main thread ใช้ DOM API อัปเดตข้อความ',
      'ให้ worker คำนวณแยก thread และแก้ DOM ของหน้าโดยตรง จึงไม่ต้องส่งผลกลับ',
      'ย้ายทุกคำสั่งไป worker เพราะมี thread เพิ่มแล้วทุกงานจะเสร็จเร็วขึ้นเสมอ',
      'เพิ่ม CSS อย่างเดียว เพราะการกำหนด presentation จะทำให้งานคำนวณหนักใช้ main thread น้อยลงทุกชนิด'
    ],
    correct: 0,
    explanation: 'Worker รัน script แยกจาก main thread และสื่อสารด้วย message จึงช่วยให้ main thread มีเวลาสำหรับ UI งานที่เกี่ยวกับ DOM ของหน้าให้ main thread จัดการ ไม่รับประกันว่าทุก workload จะเร็วขึ้นเพราะยังมีต้นทุนเริ่มงานและสื่อสาร',
    optionExplanations: [
      'แยกงานคำนวณและการแก้ DOM พร้อมวิธีสื่อสารได้ถูกต้อง',
      'รันแยก thread ถูก แต่ worker เข้าถึง DOM ของหน้าโดยตรงไม่ได้',
      'มี thread เพิ่มจริง แต่มีข้อจำกัด API และ overhead จึงไม่เร็วขึ้นเสมอ',
      'CSS เกี่ยวกับ presentation จริง แต่ไม่ใช่วิธีย้ายงานคำนวณ JavaScript ไป thread อื่น'
    ],
    source: 'สไลด์บท 10 หน้า PDF 36–37; เสริมข้อจำกัด DOM จาก MDN Using Web Workers: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers',
    difficulty: 'ประยุกต์'
  },
  {
    id: 'ch10-10', chapter: 10, topic: 'WordPress เป็น WCMS และบทบาท CMA/CDA',
    prompt: 'หน่วยงานใช้ WordPress จัดทำและเผยแพร่ข่าว ข้อใดระบุประเภทระบบและบทบาท CMA/CDA ได้ครบที่สุด?',
    options: [
      'WordPress เป็น WCMS โดย CDA เป็นส่วนเขียนข่าวและ CMA เป็นส่วนส่งเนื้อหาให้ผู้ชม',
      'WordPress เป็น WCMS โดย CMA ช่วยเขียนและแก้ไข ส่วน CDA ทำให้เนื้อหาพร้อมเข้าถึงบนเว็บ',
      'WordPress มี editor และ themes จริง จึงเป็นเพียง descriptive markup language เช่นเดียวกับ HTML',
      'WordPress เป็น WCMS และ CMA ช่วยเขียนข่าวจริง จึงไม่ต้องมีบทบาท delivery เพราะผู้เขียนเผยแพร่เองได้'
    ],
    correct: 1,
    explanation: 'WordPress เป็นตัวอย่าง WCMS ในสไลด์ ใช้จัดทำและเผยแพร่เนื้อหาเว็บ CMA คือ Content Management Application สำหรับ authoring/editing ส่วน CDA คือ Content Delivery Application สำหรับทำให้เนื้อหาพร้อมเข้าถึงบนเว็บ ต้องอธิบายทั้งประเภทระบบและหน้าที่ให้ครบ',
    optionExplanations: [
      'ระบุประเภท WCMS ถูก แต่สลับ CMA กับ CDA',
      'ระบุ WordPress เป็น WCMS และจับคู่ส่วนจัดทำ/ส่งมอบเนื้อหาถูกทั้งสอง',
      'WordPress มี editor/themes จริง แต่เป็นระบบจัดการเนื้อหา ไม่ใช่ชื่อ markup language',
      'ประเภท WCMS และ CMA ถูก แต่การที่ผู้เขียนกด publish ไม่ได้ลบบทบาททำให้ผู้ชมเข้าถึงเนื้อหา'
    ],
    source: 'สไลด์บท 10 หน้า PDF 44, 46–49; ดัดแปลงแนวแบบฝึกเดิม', difficulty: 'พื้นฐาน'
  },
  {
    id: 'ch10-11', chapter: 10, topic: 'WCMS workflow versioning access control',
    prompt: 'เว็บองค์กรต้องให้ผู้เขียนร่างประกาศ บรรณาธิการตรวจ และผู้มีสิทธิ์อนุมัติก่อนเผยแพร่ พร้อมย้อนดูการแก้ไข วิธีใช้ฟีเจอร์ใดครบที่สุด?',
    options: [
      'ใช้ versioning เก็บรุ่น จึงแทนการอนุมัติและกำหนดสิทธิ์ได้ทั้งหมด',
      'ใช้ WYSIWYG ช่วยผู้เขียนไม่ต้องรู้ HTML จึงไม่จำเป็นต้องมีขั้นตรวจ',
      'ใช้ workflow ติดป้ายสถานะหลังเผยแพร่เท่านั้น เพราะ workflow ไม่เกี่ยวกับลำดับก่อนเผยแพร่',
      'ใช้ workflow กำกับขั้นร่าง–ตรวจ–เผยแพร่, access control กำหนดผู้ทำแต่ละขั้น และ versioning ติดตามรุ่น'
    ],
    correct: 3,
    explanation: 'ฟีเจอร์เหล่านี้ตอบคนละความต้องการ: workflow คือลำดับงาน, access control คือสิทธิ์ และ versioning คือประวัติแต่ละรุ่น การมี editor ที่ใช้ง่ายไม่ได้แทนกระบวนการตรวจและอนุมัติ',
    optionExplanations: [
      'Versioning เก็บประวัติจริง แต่ไม่ได้ทำหน้าที่อนุมัติหรือกำหนดสิทธิ์แทนทั้งหมด',
      'WYSIWYG ช่วยการเขียนจริง แต่ไม่ตัดความต้องการตรวจขององค์กร',
      'สถานะอาจเป็นส่วนหนึ่งของ workflow แต่ workflow ใช้จัดลำดับ authoring, review, publish ได้ด้วย',
      'เชื่อมความต้องการกับฟีเจอร์ทั้งสามได้ครบ'
    ],
    source: 'สไลด์บท 10 หน้า PDF 45, 49', difficulty: 'ประยุกต์'
  },
  {
    id: 'ch10-12', chapter: 10, topic: 'Canvas WebGL WebXR',
    prompt: 'ทีมต้องแสดงโมเดล 3D ที่หมุนได้ในหน้าเว็บและใช้ GPU ช่วยวาด ข้อใดเลือกเทคโนโลยีพร้อมอธิบายได้ตรงที่สุด?',
    options: [
      'ใช้ WebXR เพราะทุกกราฟิก 3D ต้องเป็น VR หรือ AR เท่านั้น',
      'ใช้ Canvas แล้ว JavaScript ทุกคำสั่งจะย้ายไปรันบน GPU อัตโนมัติ',
      'ใช้ WebGL สำหรับ rendering บน HTML canvas โดยอาศัย GPU; WebXR เหมาะกับงาน VR/AR เพิ่มเติม',
      'ใช้ Web Worker เพราะคำว่า worker หมายถึงหน่วย GPU ที่ทำ rendering ให้ canvas โดยตรง'
    ],
    correct: 2,
    explanation: 'WebGL ใช้ API แนว OpenGL ES ทำ rendering 2D/3D บน canvas โดยใช้ GPU ส่วน WebXR เกี่ยวข้องกับ VR/AR และ worker เป็นกลไกรัน script แยก thread ไม่ใช่ชื่อ GPU',
    optionExplanations: [
      'WebXR เกี่ยวกับ VR/AR จริง แต่กราฟิก 3D บนเว็บไม่จำเป็นต้องเป็น VR/AR',
      'Canvas เป็นพื้นที่วาดได้จริง แต่ไม่ได้หมายความว่า JavaScript ทุกคำสั่งรันบน GPU',
      'เลือก WebGL และแยกหน้าที่จาก WebXR ได้ตรงความต้องการ',
      'Worker ช่วยแยกงาน script แต่ไม่เท่ากับ GPU หรือ rendering API'
    ],
    source: 'สไลด์บท 10 หน้า PDF 23, 38–39', difficulty: 'ประยุกต์'
  },
  {
    id: 'ch10-13', chapter: 10, topic: 'Web Storage',
    prompt: 'เว็บอยากเก็บธีมที่ผู้ใช้เลือกไว้ข้ามการเปิดใช้งาน และแยกข้อมูลขั้นตอนชั่วคราวของแต่ละแท็บ ข้อใดเหมาะสมที่สุด?',
    options: [
      'ใช้ localStorage สำหรับธีม และ sessionStorage สำหรับข้อมูล page session ของแท็บ โดยไม่ถือว่าการ reload ต้องล้าง sessionStorage',
      'ใช้ sessionStorage สำหรับธีมเพราะชื่อ session หมายถึงข้อมูลถาวร และ localStorage ล้างทุกครั้งที่ reload',
      'ใช้ localStorage ได้จริง และทุก browser รับประกันพื้นที่ 10 MB เท่ากันเสมอโดยไม่มีข้อจำกัด',
      'ใช้ sessionStorage แยกแท็บได้จริง แต่ข้อมูลทั้งหมดจะหายทุกครั้งที่กด reload แม้ยังเป็น page session เดิม'
    ],
    correct: 0,
    explanation: 'localStorage ออกแบบให้เก็บข้าม session ได้ ส่วน sessionStorage แยกตาม page session/แท็บหรือหน้าต่างและอยู่ผ่านการ reload ใน session เดิม ตัวเลขพื้นที่ 5 หรือ 10 MB ในสไลด์เป็นค่าทั่วไป ไม่ใช่การรับประกันทุก browser',
    optionExplanations: [
      'เลือกอายุและขอบเขตการเก็บได้ตรงความต้องการ',
      'สลับคุณสมบัติของทั้งสองชนิด',
      'localStorage ใช้เก็บธีมได้ แต่ quota ไม่ใช่ค่ารับประกันตายตัวทุก browser',
      'แยก page session ถูก แต่ reload ไม่ได้ทำให้ sessionStorage หายตามกฎนั้น'
    ],
    source: 'สไลด์บท 10 หน้า PDF 41; เสริมอายุและขอบเขตจาก WHATWG Web Storage: https://html.spec.whatwg.org/multipage/webstorage.html',
    difficulty: 'ประยุกต์'
  },
  {
    id: 'ch10-14', chapter: 10, topic: 'Push: SSE และ WebSocket',
    prompt: 'หน้าแสดงคะแนนสดอยากรับคะแนนใหม่เมื่อ server มีข้อมูล โดยไม่ส่งคำถามซ้ำเป็นช่วง ๆ ข้อใดอธิบาย push ได้ถูกที่สุด?',
    options: [
      'Push แปลว่า server ส่งเข้าหน้าเว็บได้โดยไม่ต้องเริ่ม connection หรือ request ใด ๆ จาก client เลย',
      'Client เริ่มการเชื่อมต่อก่อน แล้วรับข้อมูลเพิ่มได้โดยไม่ polling ทุกครั้ง; SSE เป็น stream จาก server ส่วน WebSocket รองรับการสื่อสารสองทาง',
      'SSE ลด polling ได้จริง จึงไม่ใช้ HTTP และต้องสื่อสารสองทางแบบ WebSocket เสมอ',
      'WebSocket สื่อสารสองทางได้จริง ดังนั้น client ยังต้อง polling ก่อนรับข้อมูลใหม่แต่ละครั้ง'
    ],
    correct: 1,
    explanation: 'จุดสำคัญของกรณีนี้คือไม่ต้องถาม server ซ้ำสำหรับข้อมูลใหม่ทุกครั้งหลังเปิดการเชื่อมต่อ ภาพสไลด์ SSE ยังมี request เริ่มต้นตามด้วย response stream; ความต่างทิศทาง SSE/WebSocket เป็นรายละเอียดเสริมมาตรฐาน',
    optionExplanations: [
      'ไม่ polling ไม่ได้แปลว่าไม่ต้องเริ่มการเชื่อมต่อ ภาพสไลด์ยังแสดง request',
      'แยกการเริ่ม connection ออกจาก polling และแยกทิศทางสอง API ได้ถูก',
      'SSE ช่วยรับข้อมูลโดยไม่ polling จริง แต่ทำงานเป็น event stream ผ่าน HTTP และไม่ใช่ช่องสองทางแบบ WebSocket',
      'WebSocket สองทางจริง แต่ไม่ต้อง polling ก่อนข้อความ server ทุกข้อความ'
    ],
    source: 'สไลด์บท 10 หน้า PDF 38, 40; เสริมจาก WHATWG SSE https://html.spec.whatwg.org/multipage/server-sent-events.html และ WebSockets https://websockets.spec.whatwg.org/',
    difficulty: 'ประยุกต์'
  }
];

export const webDeepDive = [
  {
    id: 'html-dom',
    title: 'HTML → DOM และความสัมพันธ์กับ CSS, JavaScript, DOM API',
    lead: 'จำให้เป็นกระบวนการ: HTML คือคำอธิบายเอกสาร, DOM คือข้อมูลเอกสารในหน่วยความจำ และ DOM API คือช่องทางอ่านหรือเปลี่ยนข้อมูลนั้น ส่วน CSS กำหนดการนำเสนอและ JavaScript เพิ่มพฤติกรรม',
    source: 'สไลด์บท 10 หน้า PDF 21–32, 42',
    sections: [
      {
        title: 'แยกบทบาททั้งห้าให้ตอบได้',
        body: 'Browser parse HTML แล้วสร้างแบบจำลองเอกสารเป็น DOM โครงสร้างนี้มีความสัมพันธ์ parent/child ของ nodes และสามารถเปลี่ยนภายหลังจากเอกสารต้นทางถูกอ่านแล้วได้',
        bullets: [
          'HTML: ระบุโครงสร้างและองค์ประกอบ เช่น heading, paragraph, link และ form',
          'CSS: กำหนด presentation เช่นสี ขนาด ระยะห่าง และ layout',
          'JavaScript: ภาษา scripting สำหรับพฤติกรรมและการตอบสนองต่อเหตุการณ์',
          'DOM: โครงสร้างข้อมูลแทนเอกสารใน memory ของ browser ไม่ใช่ภาษาและไม่ใช่ protocol',
          'DOM API: interface มาตรฐานที่ scripts ใช้อ่าน แก้ เพิ่ม หรือลบ nodes และข้อมูลใน DOM'
        ],
        source: 'สไลด์บท 10 หน้า PDF 24–25, 29–32, 42'
      },
      {
        title: 'ตัวอย่างกดปุ่มแล้วข้อความเปลี่ยน',
        body: 'เริ่มจาก HTML มี paragraph และปุ่ม CSS จัดรูปแบบ เมื่อผู้ใช้กดปุ่ม event handler ของ JavaScript เรียก DOM API เลือก paragraph แล้วแก้ข้อความใน DOM Browser จึงปรับการแสดงผลตามข้อมูลใหม่ ไม่จำเป็นต้องแก้ไฟล์ HTML บน server ทุกครั้ง',
        bullets: [
          'อย่าตอบเพียงว่า API ดึงข้อมูลมาแสดง เพราะโจทย์ interaction มักต้องอธิบายการ MODIFY DOM',
          'ตัวอย่างสไลด์ใช้ getElementById("demo").innerHTML เพื่อเขียนเนื้อหาใหม่ และอ่าน document.title',
          'querySelectorAll("p") เลือก paragraph ทั้งหมด; index 0 คืออันแรก; nodeName เป็นชื่อ node ไม่ใช่ข้อความที่อยู่ข้างใน'
        ],
        example: 'ตัวอย่างใหม่เพื่ออธิบายบทบาท: const note = document.getElementById("notice"); note.textContent = "ลงทะเบียนสำเร็จ"; ตัวแปร note อ้างถึง element ใน DOM ส่วน getElementById และ textContent เป็นส่วนของ API ที่ใช้เข้าถึง/แก้ข้อมูล',
        source: 'สไลด์บท 10 หน้า PDF 31–32; โค้ด textContent เป็นตัวอย่างเสริมที่สอดคล้องกับบทบาท API'
      },
      {
        title: 'อ่านต้นไม้และแยก tag / element / attribute',
        body: 'ใน <a href="guide.html">คู่มือ</a> ชื่อ attribute คือ href ค่าเป็น guide.html และข้อความคือ คู่มือ โค้ดทั้งชุดเป็น anchor element; tag เป็นส่วนกำกับเริ่มหรือจบของ element',
        bullets: [
          'DOM มีได้ทั้ง element nodes และ text nodes ข้อความจึงไม่ใช่ element ทุกกรณี',
          'Text nodes เป็น leaf nodes แต่บทกลับว่า leaf ทุกตัวเป็น text ไม่จริงทั่วไป',
          'ภาพสไลด์หน้า 27 ใช้ body เป็นรากของ subtree ที่ยกมา ไม่ใช่บอกว่า body เป็น root ของ document ทั้งหมด',
          'ข้อยกเว้นเสริม: ไม่ใช่ทุก element ต้องมี end tag เช่น img และ br เป็น void elements; ไม่ควรเหมารวมจากตัวอย่าง p'
        ],
        source: 'สไลด์บท 10 หน้า PDF 21–22, 26–28; ข้อยกเว้น end tag เสริมจาก WHATWG HTML syntax: https://html.spec.whatwg.org/multipage/syntax.html#void-elements'
      }
    ],
    essay: {
      prompt: 'อธิบายความสัมพันธ์ HTML, CSS, JavaScript, DOM และ DOM API พร้อมตัวอย่างเมื่อผู้ใช้กดปุ่มแล้วข้อความในหน้าเปลี่ยน',
      answer: 'HTML ระบุโครงสร้างและองค์ประกอบของหน้า ซึ่ง browser parse แล้วสร้างเป็น DOM ในหน่วยความจำ ส่วน CSS กำหนดรูปแบบการนำเสนอและ layout เมื่อผู้ใช้กดปุ่ม JavaScript ใน event handler เรียก DOM API เพื่อเลือก element และแก้ข้อความใน DOM ทำให้ browser ปรับการแสดงผลตามการเปลี่ยนแปลงนั้น',
      checklist: [
        'ระบุ HTML → parse → DOM ใน memory',
        'แยก DOM ที่เป็นข้อมูลกับ DOM API ที่เป็นช่องทางจัดการ',
        'CSS กำหนด presentation รวม layout',
        'JavaScript ตอบสนองเหตุการณ์และแก้ DOM ผ่าน API',
        'มีตัวอย่างการเปลี่ยนจริงและผลต่อการแสดงหน้า'
      ]
    },
    pitfalls: [
      'สลับ DOM กับ DOM API',
      'บอกว่า DOM API อ่านได้อย่างเดียว',
      'คิดว่าทุกการเปลี่ยนหน้าต้องแก้ไฟล์ HTML ที่ server',
      'คิดว่า CSS มีหน้าที่เฉพาะสี หรือ DOM มีแต่ element nodes'
    ]
  },
  {
    id: 'renderer-worker',
    title: 'Renderer, main thread และ Web Worker: ทำไม UI ค้างและแบ่งงานอย่างไร',
    lead: 'งานคำนวณหนักอาจครอง main thread จน UI ตอบสนองช้า Worker ช่วยรัน script บางงานแยก thread แต่ต้องส่งผลกลับมาให้ main thread แก้ DOM ของหน้า',
    source: 'สไลด์บท 10 หน้า PDF 33–37, 42; ข้อจำกัด DOM เสริมจาก MDN Using Web Workers',
    sections: [
      {
        title: 'Browser มีหลายงาน ไม่ใช่ทั้งระบบมี thread เดียว',
        body: 'เมื่อเปิด browser จะมีหลาย processes และ threads ทำงานด้าน network, browser UI, storage และ rendering โดย renderer process รับผิดชอบการแสดงเนื้อหา Main thread ของ renderer ทำงานหลายอย่างรวมการ parse HTML, สร้าง DOM, execute JavaScript และคำนวณ layout',
        bullets: [
          'แผนภาพหน้า 35 แสดง Parse HTML → Build DOM → Build CSSOM → Run JS → Generate Render Tree → Calculate Layout → Paint Information',
          'ข้อมูลพร้อมวาดถูกส่งให้ threads ที่ paint pixels ตามแผนภาพ',
          'CSSOM เป็นแบบจำลองข้อมูล CSS และ render tree ใช้กำหนดสิ่งที่ต้องแสดง; รายละเอียดนี้อ่านประกอบแผนภาพ ไม่ต้องจำว่า browser ทุกตัวมี implementation ตายตัวเหมือนกัน',
          'การเปลี่ยน DOM หรือ style อาจทำให้ต้องปรับบางขั้นของ rendering อีก ไม่ใช่คำนวณ layout เพียงครั้งเดียวตลอดอายุหน้า'
        ],
        source: 'สไลด์บท 10 หน้า PDF 33–35'
      },
      {
        title: 'จากงานหนักไปสู่อาการปุ่มไม่ตอบสนอง',
        body: 'หาก JavaScript ทำการคำนวณหนักต่อเนื่องบน main thread งานตอบสนองต่อผู้ใช้และการอัปเดตการแสดงผลอาจต้องรอ Multimedia หลายชนิดคำนวณมากและต้องการ feedback เร็ว จึงควรพิจารณาแบ่งงานที่เหมาะสม',
        bullets: [
          'สายเหตุผลที่ต้องเขียนให้ครบ: คำนวณหนัก → ใช้ main thread นาน → งาน UI/การแสดงผลล่าช้า',
          'คำว่าแต่ละขั้นทำตามลำดับไม่ได้แปลว่าทุก process และ thread ของ browser หยุดทั้งหมด',
          'ตัวอย่างงานที่ใช้เพื่ออธิบาย: คำนวณฟิลเตอร์ภาพหรือวิเคราะห์ข้อมูลเสียงจำนวนมาก'
        ],
        source: 'สไลด์บท 10 หน้า PDF 34–36; ตัวอย่างงานเป็นกรณีประยุกต์ของผู้ติว'
      },
      {
        title: 'Worker คำนวณ → message → main thread อัปเดต DOM',
        body: 'Web Worker สร้างบริบท script แยกจาก Window Context ตามภาพหน้า 37 และสื่อสารกับ main thread ผ่าน message เช่น postMessage ทำให้ย้ายภาระคำนวณที่เหมาะออกจาก main thread ได้',
        bullets: [
          'Main thread ส่ง input ให้ worker; worker คำนวณ; worker ส่งผลกลับ; main thread ใช้ DOM API เปลี่ยนข้อความหรือองค์ประกอบในหน้า',
          'ข้อเสริมมาตรฐาน: worker เข้าถึง DOM ของหน้าโดยตรงไม่ได้ และ API ที่ใช้ได้ต่างจาก window',
          'ประโยชน์หลักในโจทย์นี้คือรักษา responsiveness และใช้ multicore ได้ดีขึ้น ไม่ใช่รับประกันว่าทุกงานเสร็จเร็วขึ้น',
          'มีต้นทุนเริ่ม worker และส่งข้อมูล จึงเลือกย้ายงานที่เหมาะ ไม่สร้าง worker ต่อ pixel',
          'Worker เป็นเรื่องรัน scripts แยก thread; WebGL เป็นเรื่อง rendering ด้วย GPU จึงไม่ใช่คำแทนกัน'
        ],
        example: 'เว็บวิเคราะห์เสียง: main ส่งข้อมูลเสียง → worker คำนวณผล → worker postMessage ผลกลับ → main เปลี่ยนข้อความผลลัพธ์ผ่าน DOM API และอัปเดตกราฟผ่าน API ที่เหมาะ โดยยังรับปุ่มหยุดได้คล่องขึ้น',
        source: 'สไลด์บท 10 หน้า PDF 36–39; เสริมจาก https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers และ https://html.spec.whatwg.org/multipage/workers.html'
      }
    ],
    essay: {
      prompt: 'เว็บประมวลผลภาพขนาดใหญ่แล้วปุ่มตอบสนองช้า อธิบายสาเหตุและวิธีแบ่งงานด้วย Web Worker พร้อมวิธีทำให้ผลปรากฏบนหน้า',
      answer: 'งาน JavaScript ที่คำนวณหนักอาจครอง main thread ซึ่งต้องรับผิดชอบการตอบสนองและงาน rendering ด้วย จึงทำให้ UI ล่าช้าได้ เราอาจย้ายการคำนวณที่เหมาะไป Web Worker ซึ่งรัน script แยก thread และส่งผลกลับด้วย message ให้ main thread ใช้ DOM API อัปเดตหน้า เพราะ worker ไม่แก้ DOM ของหน้าโดยตรง วิธีนี้ช่วย responsiveness แต่ไม่รับประกันว่าจะเร็วขึ้นทุก workload',
      checklist: [
        'เชื่อมงานหนักกับการครองเวลาของ main thread',
        'ไม่เหมารวมว่า browser ทั้งระบบมี thread เดียว',
        'Worker รัน script แยก thread',
        'ระบุ message/postMessage และ main thread อัปเดต DOM',
        'ไม่อ้างว่า worker แก้ DOM ตรงหรือทำให้ทุกงานเร็วขึ้นเสมอ'
      ]
    },
    pitfalls: [
      'เรียก worker ว่า GPU หรือสับสนกับ WebGL',
      'ย้ายคำสั่ง document.getElementById ไป worker แล้วคาดว่าจะเข้าถึง DOM ของหน้าได้',
      'บอกว่ามีหลาย thread จึงไม่มีทางเกิด UI ค้าง',
      'สรุปว่าเพิ่ม worker มากเท่าไรก็เร็วขึ้นเสมอ'
    ]
  },
  {
    id: 'wcms',
    title: 'WCMS: จากการเขียนเนื้อหาไปสู่การตรวจและเผยแพร่',
    lead: 'ตอบให้ครบทั้งการจัดทำและการส่งมอบ: CMA ช่วยสร้างและแก้ไข CDA ทำให้ผู้ชมเข้าถึงเนื้อหา ส่วน workflow, access control และ versioning แก้คนละปัญหาของการทำงานร่วมกัน',
    source: 'สไลด์บท 10 หน้า PDF 44–49',
    sections: [
      {
        title: 'CMS / WCMS และคู่ CMA–CDA',
        body: 'CMS คือซอฟต์แวร์สำหรับจัดการการสร้างและแก้ไข digital content ส่วน WCMS ใช้กับการจัดทำ จัดการ และเผยแพร่เนื้อหาเว็บ สไลด์แยกองค์ประกอบหลักเป็น Content Management Application และ Content Delivery Application',
        bullets: [
          'CMA: authoring/editing ผู้เขียนสร้างและแก้เนื้อหาผ่านส่วนนี้',
          'CDA: ทำให้เนื้อหาพร้อมเข้าถึงผ่านเว็บ ไม่ใช่ส่วนที่นิยามว่ามีไว้เฉพาะวิดีโอ',
          'จำเส้นทาง: ผู้เขียนจัดทำผ่าน CMA → เนื้อหาที่เผยแพร่เข้าถึงได้ผ่าน CDA',
          'สองคำนี้แยกบทบาทการทำงาน ไม่จำเป็นต้องตีความว่าผู้ใช้ต้องติดตั้งสองโปรแกรมแยกเสมอ'
        ],
        source: 'สไลด์บท 10 หน้า PDF 44, 49'
      },
      {
        title: 'เชื่อม feature กับปัญหาที่แก้',
        body: 'การตอบข้อเขียนไม่ควรเรียงชื่อฟีเจอร์อย่างเดียว ให้เชื่อมว่าฟีเจอร์ช่วยขั้นตอนใดและใครได้ประโยชน์ เช่นผู้เขียนไม่รู้ HTML ใช้ editor ที่มองเห็นผลได้ หรือหลายฝ่ายร่วมกันต้องมีขั้นตรวจและสิทธิ์ที่ชัดเจน',
        bullets: [
          'GUI/WYSIWYG: เขียนและแก้เนื้อหาได้โดยไม่ต้องรู้ HTML',
          'Templates: เริ่มทำหน้าได้เร็วและใช้รูปแบบสม่ำเสมอ',
          'Versioning: ติดตามเนื้อหาแต่ละรุ่นและความแตกต่างระหว่างการแก้ไข',
          'Multilingual: สนับสนุนการเขียนและเผยแพร่หลายภาษา',
          'Workflow: จัดลำดับงาน เช่น authoring → review → publish ไม่ใช่เพียงติดป้ายหลังเผยแพร่',
          'Access control: กำหนดว่าใครมีสิทธิ์ทำงานอะไร ไม่ใช่ให้ editor ที่ใช้ง่ายแทนการแบ่งบทบาท',
          'SEO features: ช่วยวิเคราะห์หรือแนะนำเนื้อหาเพื่อการค้นหา ไม่ได้รับประกันอันดับหนึ่ง'
        ],
        source: 'สไลด์บท 10 หน้า PDF 45, 49'
      },
      {
        title: 'ตัวอย่างองค์กรหลายผู้เขียน',
        body: 'สมมติเจ้าหน้าที่ร่างประกาศผ่าน CMA บรรณาธิการตรวจและผู้มีสิทธิ์อนุมัติตาม workflow ก่อนเผยแพร่ Versioning เก็บร่องรอยการแก้ไข ส่วน CDA ทำให้ประกาศที่เผยแพร่แล้วพร้อมให้ผู้ชมอ่านผ่านเว็บได้',
        bullets: [
          'เก็บประวัติรุ่นได้ ไม่ได้แปลว่าตรวจอนุมัติแล้ว: versioning กับ workflow คนละหน้าที่',
          'มี WYSIWYG แล้ว ยังอาจต้องใช้ workflow และ access control ตามความต้องการองค์กร',
          'ตัวอย่างระบบตามสไลด์: Wix, WordPress.com, Drupal, Shopify, Joomla, TYPO3',
          'คำ Best overall / Best for ในหน้า 48 เป็นความเห็นจากแหล่ง Forbes ที่สไลด์ระบุ ไม่ใช่คุณสมบัติตายตัวที่ต้องท่อง'
        ],
        example: 'โจทย์: ข่าวถูกแก้หลายครั้งและห้ามเผยแพร่ก่อนหัวหน้าตรวจ → ใช้ versioning ติดตามรุ่น, workflow วางลำดับตรวจ/เผยแพร่ และ access control จำกัดผู้ทำแต่ละขั้น พร้อมอธิบายบทบาท CMA/CDA ให้ครบ',
        source: 'สไลด์บท 10 หน้า PDF 44–45, 48–49; สถานการณ์เป็นตัวอย่างประยุกต์'
      }
    ],
    essay: {
      prompt: 'องค์กรมีผู้เขียนหลายคน ต้องตรวจประกาศก่อนเผยแพร่และติดตามว่าแก้อะไรไปบ้าง เหตุใด WCMS จึงช่วยได้ และ CMA/CDA เกี่ยวข้องอย่างไร?',
      answer: 'WCMS ช่วยจัดทำ จัดการ และเผยแพร่เนื้อหาเว็บ โดยผู้เขียนสร้างหรือแก้เนื้อหาผ่าน CMA และ CDA ทำให้เนื้อหาที่เผยแพร่เข้าถึงได้ผ่านเว็บ องค์กรใช้ workflow กำกับขั้นร่าง–ตรวจ–เผยแพร่ ร่วมกับ access control เพื่อแบ่งสิทธิ์แต่ละบทบาท และใช้ versioning ติดตามการแก้แต่ละรุ่น นอกจากนี้ WYSIWYG ช่วยผู้เขียนที่ไม่รู้ HTML และ templates ช่วยให้รูปแบบหน้าเว็บสม่ำเสมอ',
      checklist: [
        'นิยาม WCMS เชื่อมการจัดทำกับเผยแพร่เว็บ',
        'CMA เขียน/แก้ และ CDA ทำให้เข้าถึงได้',
        'Workflow กำกับขั้นก่อนเผยแพร่ด้วย ไม่ใช่เพียงสถานะ',
        'Access control ระบุสิทธิ์ และ versioning ติดตามรุ่น',
        'เชื่อมฟีเจอร์กับความต้องการ ไม่เพียงไล่ชื่อโปรแกรม'
      ]
    },
    pitfalls: [
      'ตอบ CMA อย่างเดียวแล้วลืม CDA',
      'สลับ CMA/CDA หรือแบ่งตามสื่อข้อความ/วิดีโอ',
      'ใช้ versioning แทนการอนุมัติ',
      'ลด workflow เหลือป้ายสถานะหลังเผยแพร่',
      'ถืออันดับ Best for จากความเห็นแหล่งหนึ่งเป็นความจริงตายตัว'
    ]
  }
];
