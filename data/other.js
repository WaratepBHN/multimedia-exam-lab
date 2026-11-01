export const otherQuestions = [
  {
    id: 'ch7-01', chapter: 7, topic: 'Speed control', difficulty: 'ประยุกต์',
    prompt: 'ณ เวลา t หนึ่ง speed-control function ให้ระยะสะสม S(t)=0.32 ตาราง arc length ของเส้นทาง P(u) มีคู่ (u,s) เป็น (0.15,0.23), (0.20,0.32), (0.25,0.40) ควรหาตำแหน่งอย่างไร?',
    options: ['ใช้ P(0.32) เพราะระยะสะสมและพารามิเตอร์เส้นโค้งต้องเท่ากัน', 'ใช้ P(t) โดยตรง เพราะตาราง arc length มีไว้แสดงอัตราเร็วเท่านั้น', 'ค้น U(0.32)=0.20 จากตาราง แล้วประเมินตำแหน่ง P(0.20)', 'ใช้ P(0.15) เพราะต้องเริ่มคำนวณจากแถวก่อนหน้าของระยะที่ต้องการเสมอ'],
    correct: 2,
    explanation: 'ทำตามลำดับ t → s=S(t) → u=U(s) → p=P(u) ตารางจับคู่ระยะสะสม 0.32 กับ u=0.20 พอดี จึงได้ P(0.20) โดยไม่ต้อง interpolate ระหว่างแถว ทั้งนี้ S เป็นระยะ ส่วนความชันของ S จึงบอกอัตราเร็ว',
    optionExplanations: ['s และ u อาจอยู่ช่วง 0–1 เหมือนกัน แต่ไม่ได้เท่ากันโดยอัตโนมัติ', 'การใช้ P(t) ตรง ๆ ข้ามการแปลงระยะเป็นพารามิเตอร์ และ u ที่เพิ่มเท่ากันอาจเดินได้ไม่เท่ากัน', 'ถูกที่สุด: หา parameter ที่ให้ระยะสะสมตรงเป้าก่อนประเมินเส้นโค้ง', 'เมื่อมีแถวตรงเป้าพอดีต้องใช้แถวนั้น ไม่ใช่เลื่อนไปแถวก่อนเสมอ'],
    source: 'สไลด์บท 7 หน้า PDF 48–52; ดัดแปลงแนวแบบฝึกเดิม'
  },
  {
    id: 'ch7-02', chapter: 7, topic: 'G1 และ C1 continuity', difficulty: 'ประยุกต์',
    prompt: 'เส้นโค้งสองช่วงมีจุดปลายร่วมกัน อนุพันธ์อันดับหนึ่งเมื่อเข้ารอยต่อเป็น (2, 0) และเมื่อออกเป็น (5, 0) โดยใช้พารามิเตอร์เวลาเดียวกัน ข้อใดถูกที่สุด?',
    options: ['เป็น G1 แต่ไม่เป็น C1: ทิศสัมผัสต่อกัน แต่อัตราเร็วกระโดด', 'เป็น C1 เพราะทั้งสองเวกเตอร์ชี้ไปทางขวาเหมือนกัน', 'เป็นเพียง G0 เพราะขนาดอนุพันธ์ต่างกันจึงไม่มีทิศสัมผัสร่วม', 'เป็น G2 เพราะจุดปลายและทิศความเร็วตรงกันเพียงพอแล้ว'],
    correct: 0,
    explanation: 'G1 ต้องมีตำแหน่งร่วมและทิศ tangent ต่อกัน ส่วน C1 ต้องให้เวกเตอร์อนุพันธ์เท่ากันด้วย เมื่อพารามิเตอร์เป็นเวลา ขนาด 2 เปลี่ยนเป็น 5 จึงเป็นการกระโดดของอัตราเร็ว',
    optionExplanations: ['ถูกที่สุด: แยกความต่อเนื่องของรูปเส้นกับความเร็วได้', 'ทิศเหมือนกันเป็นเงื่อนไข G1 แต่ขนาดยังต่างจึงไม่ C1', 'ขนาดต่างไม่ทำลาย G1 เพราะ tangent ยังมีทิศเดียวกัน', 'ยังไม่มีข้อมูล curvature จึงสรุป G2 ไม่ได้'],
    source: 'สไลด์บท 7 หน้า PDF 37–39'
  },
  {
    id: 'ch7-03', chapter: 7, topic: 'G2 และ C2 continuity', difficulty: 'พื้นฐาน',
    prompt: 'ทีมทำ motion path ต้องการอธิบาย G2 เทียบกับ C2 โดยไม่จำกฎอนุพันธ์แบบคลาดเคลื่อน ข้อใดแม่นที่สุดสำหรับเส้นโค้งปกติที่ tangent ไม่เป็นศูนย์?',
    options: ['G2 ต้องให้อนุพันธ์อันดับสองชี้ทิศเดียวกันเท่านั้น ไม่ต้องตรวจรอยต่ออันดับต่ำกว่า', 'C2 ตรวจเพียงอนุพันธ์อันดับสองเท่ากัน ส่วนตำแหน่งและอนุพันธ์อันดับหนึ่งต่างกันได้', 'G2 และ C2 เหมือนกันทุกกรณี เพราะต่างเรียกว่าเส้นโค้งเรียบ', 'G2 ต้องมีตำแหน่ง ทิศสัมผัส และ curvature ต่อกัน ส่วน C2 ต้องต่อแบบ C1 และมีอนุพันธ์อันดับสองเท่ากัน'],
    correct: 3,
    explanation: 'G2 คือความต่อเนื่องเชิงเรขาคณิตถึงระดับ curvature ส่วน C2 ผูกกับพารามิเตอร์และต้องมีอนุพันธ์ทุกอันดับถึง 2 ต่อเนื่องด้วย คำอธิบาย G2 ว่าเพียงทิศของอนุพันธ์อันดับสองเหมือนกันในสไลด์เป็นการย่อที่ไม่ถูกทั่วไป',
    optionExplanations: ['ทิศอนุพันธ์อันดับสองอย่างเดียวไม่พอรับประกัน curvature เท่ากัน', 'C2 ต้องรวม C0 และ C1 ไม่ใช่ตรวจอนุพันธ์อันดับสองแยกเดี่ยว', 'รูปทรงอาจเหมือนกันแต่ใช้พารามิเตอร์ต่างกัน จึงมีระดับ C ต่างกันได้', 'ถูกที่สุด: แยกรูปทรงออกจากเงื่อนไขอนุพันธ์ของพารามิเตอร์'],
    source: 'สไลด์บท 7 หน้า PDF 37–39; นิยาม G2 ตรวจเทียบ Rhino Essential Mathematics'
  },
  {
    id: 'ch7-04', chapter: 7, topic: 'Morphing', difficulty: 'ประยุกต์',
    prompt: 'ต้องเปลี่ยนภาพใบหน้าคน A ไปเป็นคน B โดยให้ตำแหน่งตาและปากค่อย ๆ เคลื่อนตรงกัน แนวทางใดครบกว่าการลด opacity ภาพ A แล้วเพิ่มภาพ B อย่างเดียว?',
    options: ['ใช้ cross-dissolve อย่างเดียว เพราะเป็นการผสมสี จึงจัดตำแหน่งตาและปากให้ตรงกันเอง', 'จับคู่จุดสำคัญ → warp รูปร่างเข้าหากัน → blend สีระหว่างภาพ', 'เพิ่มจำนวนเฟรมอย่างเดียว เพราะเฟรมมากจะทำให้จุดสำคัญย้ายเข้าหากันอัตโนมัติ', 'เลื่อนภาพทั้งใบเข้าหากัน แล้วใช้ cross-dissolve โดยไม่ต้องคำนึงถึงความต่างของรูปหน้า'],
    correct: 1,
    explanation: 'Morphing ใช้ point mapping กำหนดความสอดคล้อง ตามด้วย warping เพื่อเปลี่ยนรูป และ cross-dissolve เพื่อผสมสี การผสมสีอย่างเดียวอาจเห็นภาพซ้อนเพราะจุดสำคัญไม่ตรงกัน',
    optionExplanations: ['ผสมสีได้จริง แต่ไม่ได้แก้ตำแหน่งและสัดส่วนที่ไม่ตรงกัน', 'ถูกที่สุด: มีทั้งการจับคู่ เปลี่ยนรูป และเปลี่ยนสี', 'จำนวนเฟรมช่วยความละเอียดตามเวลา แต่ไม่ได้สร้าง mapping ที่ขาดไป', 'การเลื่อนทั้งภาพอาจจัดบางจุดได้ แต่ไม่แก้ความต่างรูปทรงภายใน'],
    source: 'สไลด์บท 7 หน้า PDF 63–69'
  },
  {
    id: 'ch7-05', chapter: 7, topic: 'Forward และ inverse kinematics', difficulty: 'ประยุกต์',
    prompt: 'นักทำแอนิเมชันกำหนดว่า “มือของตัวละครต้องจับลูกบิดตรงตำแหน่งนี้” แล้วให้ระบบหามุมไหล่และข้อศอก แนวคิดใดตรงที่สุด?',
    options: ['Forward kinematics เพราะมือเป็นส่วนหนึ่งของโครงสร้างลำดับชั้น', 'Motion capture เพราะทุกเป้าหมายมือจำเป็นต้องได้จากการวัดคนจริง', 'Inverse kinematics เพราะเริ่มจากเป้าหมายปลายแขนแล้วหาค่าข้อต่อ', 'Shape tweening เพราะเพียงเปลี่ยนสีหรือรูปร่างมือก็ทำให้มือถึงลูกบิด'],
    correct: 2,
    explanation: 'IK รับเป้าหมายของ end-effector แล้วแก้หาพารามิเตอร์ข้อต่อ ส่วน FK กำหนดค่าข้อต่อก่อนแล้วคำนวณตำแหน่งปลาย โครงสร้างลำดับชั้นใช้ร่วมกับทั้งสองแนวคิดได้',
    optionExplanations: ['มี hierarchy จริง แต่โจทย์ไม่ได้ให้มุมข้อต่อเพื่อคำนวณมือแบบ FK', 'Motion capture ใช้ข้อมูลการเคลื่อนไหวจริง แต่ไม่จำเป็นสำหรับการแก้เป้าหมายนี้', 'ถูกที่สุด: ทิศทางการแก้ปัญหาคือเป้าหมายปลาย → ค่าข้อต่อ', 'การเปลี่ยนรูปลักษณ์อย่างเดียวไม่แก้ตำแหน่งตามข้อจำกัดของโครงกระดูก'],
    source: 'สไลด์บท 7 หน้า PDF 74–76'
  },
  {
    id: 'ch7-06', chapter: 7, topic: 'Keyframe และ tweening', difficulty: 'พื้นฐาน',
    prompt: 'งาน A ใช้ปากกาวาดภาพทุกเฟรมในคอมพิวเตอร์ งาน B กำหนดตำแหน่งเริ่ม–จบแล้วให้โปรแกรมสร้างเฟรมระหว่างกลาง ข้อใดแยกแนวทางได้ถูกที่สุด?',
    options: ['A เป็น computer-based hand-drawn ส่วน B ใช้ tweening และ interpolation เพื่อหาค่าระหว่าง keyframes', 'ทั้งสองเป็น tweening เสมอ เพราะทำด้วยคอมพิวเตอร์เหมือนกัน', 'A เป็น stop-motion เพราะมีภาพทีละเฟรม ส่วน B ไม่ต้องมี keyframe', 'B เป็นการสร้างโมเดล 3D เสมอ เพราะคอมพิวเตอร์คำนวณเฟรมให้อัตโนมัติ'],
    correct: 0,
    explanation: 'การใช้คอมพิวเตอร์วาดไม่ได้ทำให้เฟรมระหว่างกลางถูกสร้างอัตโนมัติ Tweening ใช้ข้อมูล keyframes กับ interpolation และทำกับงาน 2D ได้ด้วย Interpolation ใช้ได้ทั้งตำแหน่ง การหมุน สี และรูปร่าง ไม่ได้จำกัดเฉพาะการย้ายวัตถุ',
    optionExplanations: ['ถูกที่สุด: แยกเครื่องมือที่ใช้วาดออกจากวิธีสร้างเฟรม', 'สถานที่ทำงานในคอมพิวเตอร์ไม่ใช่เงื่อนไขเพียงพอของ tweening', 'Stop-motion ถ่ายวัตถุจริงที่ขยับทีละนิด และ B มี keyframes ตามโจทย์', 'การคำนวณ in-between ไม่ได้บังคับว่าต้องมีโมเดล 3D'],
    source: 'สไลด์บท 7 หน้า PDF 16–18, 23–24, 31–35, 44, 54, 58'
  },
  {
    id: 'ch9-01', chapter: 9, topic: 'Unicode และ UTF', difficulty: 'ประยุกต์',
    prompt: 'ข้อความ Aก💩 ประกอบด้วย 3 code points โดย 💩 คือ U+1F4A9 ถ้าไม่คิด BOM หรือ metadata ข้อใดระบุขนาด UTF-8, UTF-16, UTF-32 ตามลำดับได้ถูกต้อง?',
    options: ['3, 6, 12 bytes เพราะแต่ละตัวใช้หนึ่งหน่วยของแต่ละ UTF', '8, 8, 12 bytes เพราะแต่ละ code point อาจใช้หลาย code units', '8, 6, 12 bytes เพราะ UTF-16 ใช้สอง bytes ต่อ code point เสมอ', '12, 12, 12 bytes เพราะ Unicode ทุกตัวต้องมีพื้นที่เท่ากันเพื่อรองรับ emoji'],
    correct: 1,
    explanation: 'UTF-8 ใช้ 1+3+4 = 8 bytes; UTF-16 ใช้ 2+2+4 = 8 bytes เพราะ emoji นี้อยู่นอก BMP; UTF-32 ใช้ 4×3 = 12 bytes ขนาด code unit กับขนาดต่อ code point จึงไม่ใช่เรื่องเดียวกัน',
    optionExplanations: ['UTF-8 และ UTF-16 ไม่ได้ใช้หนึ่ง code unit ต่อ code point เสมอ', 'ถูกที่สุด: นับตาม encoding และตำแหน่งของ code point', 'UTF-16 ต้องใช้ surrogate pair รวม 4 bytes สำหรับ emoji นี้', 'Unicode ไม่ได้บังคับ fixed-size ทุก encoding; UTF-32 จึงไม่ใช่ขนาดของ UTF ทั้งหมด'],
    source: 'สไลด์บท 9 หน้า PDF 21–28'
  },
  {
    id: 'ch9-02', chapter: 9, topic: 'Character, font และ glyph', difficulty: 'ประยุกต์',
    prompt: 'เปลี่ยนฟอนต์ในเอกสารแล้วตัว ก เปลี่ยนหน้าตา แต่ข้อความยังค้นหาและคัดลอกเป็น ก ได้ ข้อใดอธิบายได้แม่นที่สุด?',
    options: ['Code point เปลี่ยนตามรูปร่างทุกครั้ง แต่โปรแกรมเดาว่าเป็นตัวเดิม', 'Typeface คือค่าตัวเลข ส่วน Unicode คือไฟล์เก็บเส้นโค้งของตัวอักษร', 'Font กับ character เป็นสิ่งเดียวกัน จึงเปลี่ยนแยกจากกันไม่ได้', 'Character และ code point ยังเดิม แต่ font ให้รูป glyph สำหรับแสดงผลต่างกัน'],
    correct: 3,
    explanation: 'Character คือหน่วยข้อความเชิงนามธรรม ส่วน glyph เป็นรูปที่นำมาแสดง Typeface คือแนวการออกแบบ และ font เก็บข้อมูลดิจิทัลที่ใช้แสดงรูปเหล่านั้น จึงเปลี่ยนหน้าตาโดยไม่ต้องเปลี่ยนข้อความ',
    optionExplanations: ['การเปลี่ยนฟอนต์ไม่จำเป็นต้องแก้ code point ของข้อความ', 'สลับบทบาท: Unicode ระบุ code points ส่วน font เก็บข้อมูลรูป/metrics', 'ข้อมูลข้อความกับข้อมูลที่ใช้แสดงรูปร่างมีบทบาทต่างกัน', 'ถูกที่สุด: แยกความหมายของข้อความออกจากรูปลักษณ์'],
    source: 'สไลด์บท 9 หน้า PDF 6–9, 21–22'
  },
  {
    id: 'ch9-03', chapter: 9, topic: 'Typography spacing', difficulty: 'ประยุกต์',
    prompt: 'หัวเรื่องมีปัญหาเฉพาะคู่ AV ดูห่างเกินไป แต่ช่องไฟคู่อื่นและระยะบรรทัดพอดีแล้ว ควรเริ่มแก้ด้วยอะไร?',
    options: ['เพิ่ม leading เพราะช่วยเปลี่ยนช่องว่างของทุกคู่ในบรรทัด', 'ลด tracking ทั้งหัวเรื่อง เพราะการแก้เฉพาะคู่ไม่มีใน typography', 'ปรับ kerning ของคู่ AV โดยรักษาค่า spacing ส่วนอื่นที่เหมาะสมไว้', 'ลด x-height เพราะเป็นระยะห่างระหว่างตัวอักษรสองตัว'],
    correct: 2,
    explanation: 'Kerning ปรับระยะระหว่างคู่ตัวอักษรเฉพาะ Tracking ปรับช่องไฟทั้งชุด ส่วน leading คือระยะ baseline ระหว่างบรรทัด จึงควรเลือกเครื่องมือให้ตรงปัญหา',
    optionExplanations: ['Leading แก้ระยะบรรทัด ไม่ใช่ช่องไฟระหว่าง A กับ V', 'Tracking ใช้ปรับทั้งชุดได้ แต่จะเปลี่ยนคู่อื่นที่โจทย์บอกว่าพอดีแล้ว', 'ถูกที่สุด: แก้ที่คู่ซึ่งมีปัญหาโดยตรง', 'X-height คือความสูงตัว x เล็ก ไม่ใช่ช่องไฟระหว่างคู่'],
    source: 'สไลด์บท 9 หน้า PDF 42–45'
  },
  {
    id: 'ch9-04', chapter: 9, topic: 'Bitmap และ outline fonts', difficulty: 'ประยุกต์',
    prompt: 'ต้องใช้ typeface เดียวกันทั้งข้อความเล็กบนจอและหัวเรื่องใหญ่บนโปสเตอร์ เหตุใด outline font จึงเหมาะกว่าการขยาย bitmap ชุดเดียว?',
    options: ['เก็บเส้นและโค้งที่ปรับขนาดได้ แล้ว rasterize ให้เหมาะกับขนาดและอุปกรณ์ปลายทาง', 'เป็น vector จึงแสดงบนจอได้โดยไม่ต้องผ่าน rasterization เลย', 'เก็บ bitmap สำหรับทุกขนาดที่เป็นไปได้ครบแล้ว จึงไม่ต้องคำนวณ', 'มี hinting เสมอ จึงรับประกันว่ารูปอักษรทุกขนาดเหมือนกันทุกพิกเซล'],
    correct: 0,
    explanation: 'Outline font เก็บคำอธิบายรูปร่างทางคณิตศาสตร์ จึงปรับขนาดก่อน rasterization ได้ ส่วน bitmap มีจำนวนพิกเซลจำกัด Hinting ช่วยความชัดในบางขนาด แต่ไม่ใช่การรับประกันภาพเหมือนกันทุกอุปกรณ์',
    optionExplanations: ['ถูกที่สุด: เชื่อมการจัดเก็บแบบ outline กับขั้นแสดงผลได้ครบ', 'จอแบบพิกเซลยังต้อง rasterize รูปร่างเพื่อแสดงผล', 'เป็นแนวคิดตรงข้ามกับประโยชน์ของ outline ที่ไม่ต้องเตรียมทุกขนาด', 'Hinting ไม่ใช่เหตุผลหลักของการขยายแบบ outline และไม่รับประกันแบบนั้น'],
    source: 'สไลด์บท 9 หน้า PDF 53–56, 60'
  },
  {
    id: 'ch9-05', chapter: 9, topic: 'Point และ em', difficulty: 'ประยุกต์',
    prompt: 'กำหนดช่องว่าง 0.5 em ให้ข้อความ จากนั้นเปลี่ยนขนาด type จาก 12 pt เป็น 20 pt โดยค่า em ไม่เปลี่ยน ข้อใดถูกที่สุด?',
    options: ['ช่องว่างเท่าเดิม 6 pt เพราะ em เป็นหน่วย absolute เช่นเดียวกับ point', 'ช่องว่างเปลี่ยนจาก 6 pt เป็น 10 pt เพราะ em อิงขนาด type ปัจจุบัน', 'ช่องว่างเปลี่ยนเป็น 20 pt เพราะ 0.5 em ต้องเท่ากับหนึ่ง point size เสมอ', 'ช่องว่างลดลง เพราะ point มีค่า 1/72 inch และค่า em ต้องแปรผกผัน'],
    correct: 1,
    explanation: 'หนึ่ง em เท่ากับขนาด type ที่กำลังใช้ จึงได้ 0.5×12 = 6 pt และ 0.5×20 = 10 pt Point เป็นหน่วย absolute แต่จำนวน points ที่แทน em เปลี่ยนตามขนาด type',
    optionExplanations: ['ค่าตัวคูณ em เท่าเดิม แต่ระยะจริงเปลี่ยนตาม point size', 'ถูกที่สุด: ใช้ความสัมพันธ์ของ relative unit กับขนาดปัจจุบัน', '20 pt คือ 1 em ของขนาดใหม่ ส่วนครึ่ง em คือ 10 pt', 'ค่า inch ต่อ point คงที่ ไม่ได้ทำให้ em แปรผกผันกับ type size'],
    source: 'สไลด์บท 9 หน้า PDF 34–37'
  },
  {
    id: 'ch9-06', chapter: 9, topic: 'Character encoding และ code point encoding', difficulty: 'ประยุกต์',
    prompt: 'ไฟล์ไทยแบบ code page เดิมแสดงเป็นข้อความเพี้ยนเมื่อโปรแกรมเลือกตารางผิด ข้อใดอธิบายปัญหาและลำดับของ Unicode ได้ตรงคำศัพท์ในสไลด์ที่สุด?',
    options: ['ASCII เป็น character encoding จริง แต่ UTF-8 เป็นเพียงฟอนต์ที่เลือกรูป glyph จึงไม่เกี่ยวกับ bytes', 'ข้อความเพี้ยนเกิดจากขนาด point ของฟอนต์เสมอ จึงแก้ด้วยการเพิ่มขนาดอักษรโดยไม่ต้องตรวจ encoding', 'UTF-8 กำหนด code point ของตัวอักษรใหม่ทุกครั้ง ทำให้ตัว ก มีหมายเลขเปลี่ยนตามเครื่อง', 'Code page ผิดทำให้ตีความรหัสผิด; Unicode กำหนด character → code point แล้ว UTF-8 เข้ารหัส code point เป็น code units/bytes ตามที่สไลด์แยกขั้นไว้'],
    correct: 3,
    explanation: 'สไลด์เรียก ASCII เป็นตัวอย่าง character encoding และแยก Unicode character encoding ที่กำหนด code points ออกจาก code point encoding ด้วย UTF ตัว ก จึงมี code point คงเดิม แต่ bytes ที่ใช้เก็บขึ้นกับ encoding การเลือก code page ผิดเป็นปัญหาการตีความรหัส ไม่ใช่แค่ขนาดตัวอักษร',
    optionExplanations: ['ส่วน ASCII จริง แต่ UTF-8 เป็น encoding ไม่ใช่ฟอนต์หรือชุด glyph', 'ขนาดอักษรมีผลรูปลักษณ์ แต่ไม่แก้การแปลรหัสด้วยตารางผิด', 'UTF-8 แปลง code point ที่กำหนดไว้แล้ว ไม่ได้ตั้งหมายเลขตัวอักษรใหม่ตามเครื่อง', 'ถูกที่สุด: แยกการตีความ code page กับ character → code point → code units/bytes'],
    source: 'สไลด์บท 9 หน้า PDF 14–21, 26–28; ดัดแปลงแนวแบบฝึกเดิม'
  },
  {
    id: 'ch11-01', chapter: 11, topic: 'Ingest และ adaptive streaming', difficulty: 'ประยุกต์',
    prompt: 'OBS ส่งภาพสดด้วย RTMP ไปยัง server ซึ่งสร้างหลาย bitrate และ manifest แล้วกระจาย segments ผ่าน CDN เมื่อเน็ตผู้ชมช้าลง ข้อใดอธิบายระบบครบที่สุด?',
    options: ['RTMP เป็นช่วง ingest ส่วน client ของ HLS/DASH เลือก segments bitrate ต่ำลงตามเงื่อนไขเครือข่ายได้', 'มี CDN แล้วทุกคนต้องรับ bitrate สูงสุดได้ เพราะ CDN เพิ่ม bandwidth ของสายผู้ชมโดยตรง', 'Manifest เป็นไฟล์วิดีโอหลัก จึงต้องส่งภาพทุกเฟรมอยู่ภายในไฟล์นั้น', 'Server รับด้วย RTMP แล้ว delivery ต้องใช้ RTMP เท่านั้นเพื่อรักษา codec เดิม'],
    correct: 0,
    explanation: 'Ingest กับ delivery ใช้ protocol ต่างกันได้ HLS/DASH ให้ client ขอ segments จาก representation ที่เหมาะสม ส่วน CDN ช่วยกระจาย cache และลดภาระ origin แต่ไม่ได้แก้ทุกข้อจำกัดของ last mile',
    optionExplanations: ['ถูกที่สุด: แยกช่วงรับเข้าและการเลือก bitrate ของฝั่งผู้ชม', 'CDN ช่วย delivery แต่ไม่ทำให้ความจุเครือข่ายผู้ชมไร้ขีดจำกัด', 'Manifest อธิบายรายการ/ลำดับ/representation ไม่ใช่รวม payload ทุกเฟรม', 'Protocol ของ ingest ไม่ได้บังคับ protocol ของ delivery'],
    source: 'สไลด์บท 11 หน้า PDF 20–30'
  },
  {
    id: 'ch11-02', chapter: 11, topic: 'Interactive, streaming และ real-time', difficulty: 'ประยุกต์',
    prompt: 'เปรียบเทียบการประชุม Zoom การดู Netflix/ฟัง Spotify และระบบที่มี deadline เคร่งครัด ข้อใดตรงการแบ่งกลุ่มในสไลด์ที่สุด?',
    options: ['Netflix เป็น interactive เสมอเพราะมีปุ่มเล่น/พัก ส่วน Zoom เป็น streaming ที่ยอม delay ยาวได้เท่ากัน', 'Hard real-time เน้นส่งครบในที่สุด จึงไม่สำคัญว่าข้อมูลมาถึงหลัง deadline หรือไม่', 'Zoom เป็น interactive; Netflix/Spotify เป็น streaming โดยทั่วไป; hard real-time มี deadline เคร่งครัด ขณะที่ firm แบบวิดีโออาจทิ้งข้อมูลที่ช้าบางส่วนโดยไม่ทำให้ระบบทั้งหมดล้ม', 'เมื่อ throughput เฉลี่ยพอแล้ว Zoom และ Netflix ไม่ต้องคำนึงถึง latency หรือเวลาส่งข้อมูลอีก'],
    correct: 2,
    explanation: 'สไลด์แยก interactive ที่ต้องโต้ตอบทันเวลากับ streaming ซึ่งยังต้องคำนึง timing แต่ยอม delay ได้มากกว่าโดยทั่วไป Hard real-time เคร่งครัด deadline; firm ยอมพลาดบางครั้งได้โดยข้อมูลที่ช้าอาจหมดประโยชน์ ไม่ควรใช้เพียงว่ามีปุ่มควบคุมเพื่อตัดสินกลุ่ม',
    optionExplanations: ['มีปุ่มโต้ตอบไม่ได้เปลี่ยนการดูสื่อเป็นกลุ่ม interactive แบบการสนทนา และ Zoom ต้องระวัง delay', 'การส่งครบแต่ช้าไม่ตอบข้อกำหนด deadline ของ hard real-time', 'ถูกที่สุด: แยกประเภทแอปและความหมายของ hard/firm ตามสไลด์', 'Throughput กับ latency เป็นคนละมิติ ปริมาณเฉลี่ยพอไม่ได้แปลว่าส่งทันเวลา'],
    source: 'สไลด์บท 11 หน้า PDF 6–11; ดัดแปลงแนวแบบฝึกเดิม'
  },
  {
    id: 'ch11-03', chapter: 11, topic: 'การจัดกลุ่ม protocol ตามสไลด์', difficulty: 'พื้นฐาน',
    prompt: 'ตามการจัดกลุ่มในสไลด์บทนี้ ข้อใดต่างจากพวก เพราะอยู่ระหว่าง transport กับ application แทนที่จะอยู่ในรายการ application-layer protocols สำหรับ video streaming หน้า PDF 15?',
    options: ['HTTP', 'HLS', 'RTSP', 'WebRTC', 'RTP'],
    correct: 4,
    explanation: 'สไลด์หน้า 15 ใส่ HTTP, HLS, DASH, RTSP, RTMP และ WebRTC ในกลุ่ม application protocols ส่วนหน้า 14 วาง RTP/RTCP ระหว่าง transport กับ application RTP ขน media พร้อม timing/sequence และมักคู่ RTCP ซึ่งให้ feedback; ข้อนี้ยึดการจัดกลุ่มของสไลด์ ไม่ได้อ้างว่า RTP ไม่เกี่ยวกับ streaming',
    optionExplanations: ['HTTP อยู่ในรายการ application protocols หน้า 15 และใช้ progressive download ได้', 'HLS อยู่ในรายการหน้า 15 ใช้ segments และ manifest ผ่าน HTTP', 'RTSP อยู่ในรายการหน้า 15 เน้นควบคุม session และมักใช้ RTP ขน media', 'WebRTC อยู่ในรายการหน้า 15 แม้เป็นชุดเทคโนโลยีสำหรับการสื่อสารแบบ real-time ที่กว้างกว่า protocol เดี่ยว', 'ถูกที่สุดตามโจทย์: หน้า 14 จัด RTP ไว้คั่น transport กับ application'],
    source: 'สไลด์บท 11 หน้า PDF 14–15, 19; ดัดแปลงแนวแบบฝึกเดิม'
  },
  {
    id: 'ch11-04', chapter: 11, topic: 'HTTPS, DRM, EME และ watermark', difficulty: 'ประยุกต์',
    prompt: 'บริการต้องป้องกันการดัก traffic คุมสิทธิ์ดูหนัง และติดตามแหล่งที่มาหากมีการแจกจ่ายสำเนา ข้อใดแบ่งหน้าที่ครบที่สุด?',
    options: ['HTTPS คุมสิทธิ์ใช้เนื้อหาหลังดาวน์โหลดครบแล้ว จึงทำหน้าที่แทน DRM ได้ทั้งหมด', 'Watermark ฝังตัวระบุได้ จึงเป็นกุญแจถอดรหัสที่ทำให้ทุกคนเปิดวิดีโอไม่ได้โดยอัตโนมัติ', 'EME เป็นอัลกอริทึมเข้ารหัสวิดีโอเอง ส่วน CDM มีไว้แสดงโลโก้เจ้าของสิทธิ์', 'HTTPS ป้องกันระหว่างทาง; DRM คุมสิทธิ์รวมเงื่อนไขผู้ใช้ เวลา สถานที่ และลักษณะการใช้ที่อนุญาต; watermark ช่วย trace; EME เป็น API ทำงานกับระบบถอดรหัส เช่น CDM'],
    correct: 3,
    explanation: 'เทคโนโลยีเหล่านี้เสริมกันตามหน้าที่ DRM ไม่จำกัดเพียงตรวจชื่อผู้ใช้ แต่กำกับ who/what/when/where ตามสิทธิ์ เช่นระยะเวลารับชม พื้นที่ และคุณภาพที่อนุญาตตามระบบ EME ไม่ใช่ DRM หรือ cipher เอง และ watermark เน้นการระบุติดตาม ไม่ใช่ตัวล็อกการเปิดเล่นแบบเดียวกับการเข้ารหัส',
    optionExplanations: ['HTTPS ป้องกัน connection แต่ไม่ได้แทนข้อกำหนดการใช้เนื้อหาของ DRM', 'ฝังตัวระบุช่วย trace แต่ไม่เท่ากับเข้ารหัสและควบคุม key', 'EME เป็น interface ส่วน CDM เกี่ยวกับการถอดรหัส/ระบบป้องกัน', 'ถูกที่สุด: ครบทั้ง transport, rights, trace และ browser interface'],
    source: 'สไลด์บท 11 หน้า PDF 33–42; นิยาม EME ตรวจเทียบ W3C; ดัดแปลงแนวแบบฝึกเดิม'
  },
  {
    id: 'ch12-01', chapter: 12, topic: 'CPU, GPU และ NPU', difficulty: 'ประยุกต์',
    prompt: 'แอปต้องควบคุมโปรแกรมทั่วไป render ฉาก 3D ที่มีงานขนานจำนวนมาก และรัน neural network ลบเสียงรบกวนบนเครื่องอย่างประหยัดไฟ การเลือกหน่วยประมวลผลใดเหมาะที่สุดตามลำดับ?',
    options: ['GPU → CPU → NPU เพราะ CPU เหมาะกับงานกราฟิกขนานมากกว่า GPU เสมอ', 'CPU → GPU → NPU เมื่อโมเดลและ operations ของงาน AI รองรับ NPU', 'NPU → NPU → NPU เพราะเป็นหน่วยใหม่จึงแทนอีกสองหน่วยได้ทุกงาน', 'CPU → GPU → Cloud เท่านั้น เพราะ neural network ทำงานบนอุปกรณ์ไม่ได้'],
    correct: 1,
    explanation: 'CPU เหมาะงานทั่วไปและ control logic; GPU เหมาะงาน parallel เช่น rendering; NPU ออกแบบเพื่อ neural-network computation ที่รองรับอย่างมีประสิทธิภาพ ไม่ใช่ตัวแทนทุก workload',
    optionExplanations: ['สลับบทบาทงานทั่วไปกับกราฟิกขนาน และคำว่าเสมอทำให้ผิด', 'ถูกที่สุด: เลือกตามลักษณะงานและเงื่อนไขการรองรับ', 'ความเฉพาะทางไม่ได้แปลว่าดีกว่าหรือแทนได้ทุกงาน', 'On-device AI ทำได้จริงและลดการพึ่ง network ได้'],
    source: 'สไลด์บท 12 หน้า PDF 12–19'
  },
  {
    id: 'ch12-02', chapter: 12, topic: 'Display properties', difficulty: 'ประยุกต์',
    prompt: 'จอ A ขนาด 24 นิ้ว 120 Hz และจอ B ขนาด 32 นิ้ว 60 Hz มี resolution 2560×1440 เท่ากัน ข้อใดสรุปจากข้อมูลนี้ได้โดยตรง?',
    options: ['A มี PPI สูงกว่าและ refresh ถี่กว่า แต่ยังสรุป response time หรือ color gamut ไม่ได้', 'A มี PPI สูงกว่า จึงมีจำนวนพิกเซลทั้งหมดมากกว่า B ด้วย', 'A เป็น 120 Hz จึงรับประกันว่าทุกวิดีโอที่เปิดจะมีภาพใหม่ 120 เฟรมต่อวินาที', 'B ใหญ่กว่า จึงมี PPI สูงกว่าและ contrast ดีกว่าโดยไม่ต้องดู specification เพิ่ม'],
    correct: 0,
    explanation: 'จำนวน pixels เท่ากันแต่พื้นที่จอ A เล็กกว่าจึงมีความหนาแน่นสูงกว่า และ 120 Hz คืออัตรา refresh ไม่ใช่หลักประกัน fps ของเนื้อหา คุณสมบัติด้านสี/response ต้องตรวจแยก',
    optionExplanations: ['ถูกที่สุด: สรุปเฉพาะขนาด ความละเอียด และอัตรา refresh ที่มีข้อมูล', 'จำนวนพิกเซลรวมเท่ากัน เพราะ resolution เท่ากัน', 'จอ refresh ได้ 120 ครั้งต่อวินาทีแต่เนื้อหาอาจมีเฟรมใหม่ต่ำกว่านั้น', 'เมื่อ resolution เท่ากันจอใหญ่กลับมี PPI ต่ำกว่า และ contrast ยังไม่ทราบ'],
    source: 'สไลด์บท 12 หน้า PDF 22'
  },
  {
    id: 'ch12-03', chapter: 12, topic: 'Display technologies', difficulty: 'พื้นฐาน',
    prompt: 'ร้านเสนอ Mini-LED LCD เทียบกับ OLED และ MicroLED คำอธิบายใดช่วยแยกเทคโนโลยีได้ถูกที่สุด?',
    options: ['Mini-LED กับ MicroLED คือชื่อเดียวกัน เพราะทั้งคู่มีคำว่า LED', 'OLED ใช้ backlight เหมือน LCD เพียงเปลี่ยนวัสดุขั้วไฟฟ้าเป็น organic', 'E-paper refresh ช้าจริง จึงต้องใช้พลังงานสูงกว่าจอเปล่งแสงตลอดเวลาเสมอ', 'Mini-LED เป็น backlight แบบแบ่งโซนให้ LCD ส่วน OLED และ MicroLED เป็นจุดเปล่งแสงเอง'],
    correct: 3,
    explanation: 'Mini-LED ในตารางเป็น LCD ที่ใช้ zoned backlight ส่วน OLED และ MicroLED เป็น self-emissive โดย MicroLED ใช้วัสดุ inorganic การแยกแหล่งกำเนิดแสงช่วยเข้าใจ contrast และข้อจำกัดของแต่ละแบบ',
    optionExplanations: ['ชื่อคล้ายกันแต่โครงสร้างและบทบาท LED ต่างกัน', 'OLED ไม่ต้องมี backlight แบบ LCD เพราะเปล่งแสงเอง', 'Refresh ช้าไม่ได้แปลว่ากินไฟสูง; e-paper เด่นเรื่องใช้พลังงานต่ำ', 'ถูกที่สุด: แยก backlight ออกจาก self-emissive ได้ตรงตาราง'],
    source: 'สไลด์บท 12 หน้า PDF 23–26'
  },
  {
    id: 'ch12-04', chapter: 12, topic: 'Motion sensors และ haptics', difficulty: 'ประยุกต์',
    prompt: 'VR controller ต้องตรวจการหมุนมือและสร้างแรงต้านเหมือนจับวัตถุแข็ง การจับคู่ใดแม่นที่สุด?',
    options: ['Accelerometer วัดมุมหมุนโดยตรงเสมอ และ tactile vibration ให้แรงต้านคงรูปได้เหมือนกันทุกกรณี', 'Gyroscope วัดตำแหน่งมือในห้องโดยตรง และ tactile device ใช้แทนแรงผลักดึงทุกขนาด', 'Gyroscope วัด angular rate เพื่อนำไปประเมินการหมุน ส่วน force feedback ใช้จำลองแรงต้าน/ผลักดึง', 'NPU เป็นเซนเซอร์วัดการหมุน ส่วน accelerometer ใช้สร้างแรงต้านกลับไปยังมือ'],
    correct: 2,
    explanation: 'MEMS gyroscope ให้ angular velocity/rate แล้วระบบใช้ข้อมูลตามเวลาช่วยประเมิน orientation ส่วน force feedback เน้นแรงทางกลที่รับรู้ได้ ต่างจาก tactile ที่เน้นสัมผัส เช่นสั่น',
    optionExplanations: ['Accelerometer ตรวจการเร่งรวมผล gravity ไม่ใช่มุมหมุนโดยตรงเสมอ; การสั่นไม่เท่ากับแรงต้าน', 'Gyroscope ไม่ได้ให้ตำแหน่งในห้องโดยตรง และ tactile ไม่แทนทุกแรง', 'ถูกที่สุด: แยกการวัดการหมุนกับการสร้างแรงสัมผัสกลับ', 'NPU เป็น processor ส่วน accelerometer เป็น input sensor ไม่ใช่ actuator'],
    source: 'สไลด์บท 12 หน้า PDF 29–34; คำว่า angular rate ตรวจเทียบ STMicroelectronics'
  }
];

export const quickReview = [
  {
    chapter: 7, title: 'Computer Animation', minutes: 1,
    keyPoints: [
      'Keyframes ให้สถานะหลัก; interpolation สร้าง in-between ได้ทั้งตำแหน่ง ขนาด การหมุน สี และรูปร่าง การวาดด้วยคอมพิวเตอร์ทุกเฟรมยังเป็น hand-drawn ได้; multiplane camera ใช้ชั้นภาพต่างระยะสร้าง parallax ให้ฉากดูมีความลึก',
      'G0=C0 จุดต่อกัน; G1 ทิศ tangent ต่อกัน; C1 เวกเตอร์อนุพันธ์ตรงกัน; G2 เพิ่ม curvature ต่อเนื่อง; C2 เพิ่มอนุพันธ์อันดับสองตรงกัน โดยรวมเงื่อนไขอันดับต่ำกว่าด้วย',
      'Speed control: t → S(t) ระยะสะสม → U(s) พารามิเตอร์ → P(u) ตำแหน่ง ความชันของ S คืออัตราเร็ว ไม่ใช่ค่าความสูงกราฟ',
      'Morphing: จับคู่จุด → warp → blend สี; FK ให้ค่าข้อต่อแล้วหาปลาย ส่วน IK ให้เป้าปลายแล้วหาค่าข้อต่อ'
    ],
    example: 'S(t)=t²: ครึ่งเวลาแรกเดิน 25% จึงเร่งขึ้น; S(t)=2t−t²: ครึ่งเวลาแรกเดิน 75% แล้วค่อยช้าจนหยุด',
    trap: 'เพิ่ม u เท่ากันไม่รับประกันระยะเท่ากัน และ G2 ไม่ใช่เพียงทิศอนุพันธ์อันดับสองเหมือนกัน',
    pages: 'PDF 8–24, 31–39, 44, 48–58, 63–76'
  },
  {
    chapter: 8, title: 'Sound', minutes: 3,
    keyPoints: [
      'Sampling rate วัดถี่ตามเวลา; bit depth ให้จำนวนระดับ amplitude=2^N; PCM bitrate=sample rate×bits/sample×channels เพิ่ม 16→24 bits ทำ bitrate×1.5 แต่จำนวนระดับ×256',
      'Lossless เช่น FLAC/ALAC สร้างค่า sample ดิจิทัลก่อนบีบอัดกลับครบ ใช้ prediction + residual ที่เก็บครบกับข้อมูลเริ่มต้นและตัวทำนายตรงกัน ไม่ได้ลบความคลาดเคลื่อน ADC ที่เกิดก่อนหน้า',
      'Lossy เช่น MP3/AAC ใช้ psychoacoustics: threshold คือระดับเสียงขั้นต่ำ ณ ความถี่หนึ่ง; frequency masking กลบความถี่ใกล้กันได้; temporal masking มีทั้งก่อนและหลังเสียงดัง',
      'Encoder: PCM → filter bank → psychoacoustic analysis → bit allocation/quantization → bitstream พร้อม side information จัดบิตให้ quantization noise ไม่เด่นเหนือ masking threshold ภายใต้ bit budget',
      'Dither เติม noise เล็กน้อยก่อน requantization เพื่อลด quantization distortion ไม่ซ่อม clipping; LPF/HPF เลือกผ่านย่าน, EQ ปรับสมดุลย่าน, reverb เป็นการสะท้อน; vocoder ใช้ envelope ของ modulator คุม carrier ต่างจาก Auto-Tune ที่แก้ pitch',
      'Additive รวมคลื่น; subtractive กรองคลื่น; FM เปลี่ยนความถี่ carrier; granular จัด grains; wavetable เล่นรูปคลื่นในตาราง; sample-based เล่นเสียงบันทึก ส่วน ITD/ILD ช่วยซ้าย–ขวา และ spectral cues/HRTF ช่วยหน้า–หลัง/สูง–ต่ำ'
    ],
    example: 'Sample [1000,1003,1001,1002] เก็บค่าแรก 1000 กับ residual [+3,−2,+1] แล้วบวกกลับได้ครบ; ย่านที่ noise เกิน masking threshold ควรพิจารณาเพิ่มบิตก่อนย่านที่ noise ถูกกลบแล้ว',
    trap: 'ฟังคล้ายเดิมไม่ได้แปลว่า lossless; noise ถูกกลบไม่เท่ากับลบทั้งย่านที่ยังได้ยินได้; stereo สองช่องไม่รับประกันแยกหน้า–หลัง',
    pages: 'PDF 19–29, 31–58, 60–75, 77–98'
  },
  {
    chapter: 9, title: 'Text & Typography', minutes: 1,
    keyPoints: [
      'Character คือหน่วยข้อความ; typeface คือรูปลักษณ์; font คือข้อมูลดิจิทัล; glyph คือรูปที่แสดง Unicode แยก code point → code units ของ UTF → bytes',
      'ASCII 7 bits มี 128 รหัส; code page เดิมต้องระบุให้ตรงกัน UTF-8 ใช้ 1–4 bytes/code point (ไทย 3); UTF-16 ใช้ 2 หรือ 4; UTF-32 ใช้ 4 โดยหนึ่งรูปที่เห็นอาจมีหลาย code points',
      'Leading ระยะ baseline ระหว่างบรรทัด; tracking ช่องไฟทั้งชุด; kerning เฉพาะคู่; 1 pt=1/72 inch, 1 pica=12 pt, 1 em เท่าขนาด type ปัจจุบัน',
      'Bitmap ผูกขนาด/ความละเอียด; outline เก็บเส้นแล้ว rasterize ตาม output มี width/kerning metrics; hinting ช่วยการแสดงเล็ก; OpenType รองรับ TrueType หรือ CFF outlines; WOFF2 เหมาะการส่ง font บนเว็บ'
    ],
    example: 'Aก💩 มี UTF-8 1+3+4=8 bytes, UTF-16 2+2+4=8 bytes และ UTF-32 12 bytes ไม่รวม BOM/metadata',
    trap: 'Unicode ไม่ใช่ทุกตัว 16 bits; code point ไม่ใช่ glyph; OpenType ไม่ได้บังคับใส่ outline สองชนิดรวมกัน และ font ยังมีเงื่อนไข license',
    pages: 'PDF 6–12, 14–30, 34–50, 53–65'
  },
  {
    chapter: 10, title: 'Hypermedia and Web Platform', minutes: 3,
    keyPoints: [
      'Hypertext เชื่อมข้อความให้เลือกเส้นทาง nonlinear; hypermedia ขยายถึงภาพ เสียง วิดีโอ MEMEX เป็นแนวคิด microfilm เชื่อมเอกสาร/annotation/trails ไม่ใช่เว็บ browser สมัยใหม่',
      'HTML โครงสร้าง, HTTP protocol แลกเปลี่ยน, URL ที่อยู่ resource, DOM แบบจำลองเอกสารในหน่วยความจำ CSS กำหนด presentation/layout; JavaScript เพิ่มพฤติกรรมและเรียก DOM API อ่านหรือแก้ DOM',
      'แยกข้อมูลกับ interface: DOM คือต้นไม้ข้อมูล; DOM API คือช่องทางเข้าถึง/เปลี่ยน node ไม่ได้มีไว้แค่อ่าน การกดปุ่มแก้ DOM แล้ว browser อัปเดตภาพได้โดยไม่แก้ไฟล์บน server ทุกครั้ง',
      'Renderer สร้าง DOM/CSSOM → render tree → layout → paint ตาม pipeline หลัก งาน JS หนักบน main thread ทำ UI ล่าช้าได้ Worker รัน script แยก ส่งผลด้วย postMessage ให้ main thread อัปเดต DOM; ไม่ได้แก้ page DOM โดยตรง',
      'WCMS: CMA ให้ผู้เขียนสร้าง/แก้; CDA ทำเนื้อหาที่เผยแพร่พร้อมให้ผู้ชมเข้าถึง Workflow กำกับร่าง→ตรวจ/อนุมัติ→เผยแพร่; versioning ติดตามรุ่น; access control กำหนดสิทธิ์; template/WYSIWYG ช่วยทำงานสม่ำเสมอและลดการเขียน markup',
      'Canvas วาดภาพ; WebGL ใช้ GPU ช่วย rendering; WebXR สำหรับ AR/VR; WebSocket สองทาง; SSE ส่ง server→client; localStorage อยู่ข้าม session ส่วน sessionStorage ตาม page session ไม่ใช่ล้างทุก reload'
    ],
    example: 'เว็บแต่งภาพให้ main thread รับปุ่ม ส่งการคำนวณหนักไป Worker รับผลกลับแล้วแก้ DOM/แสดงภาพ ช่วยให้ UI ตอบสนองระหว่างประมวลผล',
    trap: 'Browser ทั้งระบบไม่ได้มี thread เดียว; Worker ไม่รับประกันทุกงานเร็วขึ้น; versioning ไม่แทนการอนุมัติ และอธิบาย WCMS ต้องมีทั้ง CMA กับ CDA',
    pages: 'PDF 6–10, 14–22, 24–42, 44–49'
  },
  {
    chapter: 11, title: 'Multimedia Networking & Security', minutes: 1,
    keyPoints: [
      'Real-time เน้น deadline: hard ผิดเวลาไม่ได้; firm ข้อมูลช้าอาจหมดประโยชน์; soft ผลช้ายังใช้ได้บางส่วน Interactive ต้อง delay ต่ำกว่า streaming โดยทั่วไป; throughput ไม่ใช่ latency',
      'HTTP progressive เริ่มเล่นขณะโหลด; RTSP คุม session, RTP ส่ง media, RTCP feedback; RTMP มักใช้ ingest ส่วน HLS/DASH แบ่ง segments หลาย bitrate มี manifest ให้ client เลือกตาม network',
      'Pipeline: encode → ingest → transcode/package → CDN → player; CDN cache/distribute ลดภาระ origin แต่ไม่เพิ่มความจุสายผู้ชมแบบไร้ขีดจำกัด',
      'HTTPS ป้องกันระหว่างทาง; DRM คุมสิทธิ์ใช้เนื้อหา; EME เป็น API ทำงานกับระบบถอดรหัส/CDM; forensic watermark ฝังตัวระบุเพื่อ trace การแจกจ่าย'
    ],
    example: 'OBS ส่งเข้า RTMP → server ทำ HLS/DASH → CDN ส่ง segments → client ลด bitrate เมื่อเน็ตช้า: ingest กับ delivery ต่าง protocol ได้',
    trap: 'EME ไม่ใช่ตัว DRM/cipher; watermark ไม่ใช่ตัวล็อกเปิดไฟล์ และ DASH ไม่ได้บังคับ segments ต้องเป็น .ts เท่านั้น',
    pages: 'PDF 6–11, 14–31, 33–42'
  },
  {
    chapter: 12, title: 'Multimedia Devices', minutes: 1,
    keyPoints: [
      'Capture → digitize → process → store/transmit → present; CPU งานทั่วไป/control, GPU งานขนาน/render, NPU neural computation ที่รองรับ; integrated GPU แชร์ RAM ส่วน discrete มี VRAM',
      'Edge AI ลด network delay/offline/ข้อมูลอยู่เครื่อง แต่จำกัด memory/power/heat; Cloud รองรับ model ใหญ่แต่พึ่ง network',
      'Display แยก resolution, PPI, aspect ratio, refresh, response time, color depth, gamut, contrast และ brightness; LCD ใช้ backlight, Mini-LED เป็น zoned LCD backlight, OLED/MicroLED เปล่งแสงเอง, e-paper กินไฟต่ำแต่ refresh ช้า',
      'Accelerometer วัด linear acceleration รวมผล gravity; gyroscope วัด angular rate ใช้ประเมินการหมุน; tactile สร้างสัมผัสเช่นสั่น ส่วน force feedback ให้แรงผลัก/ดึง/ต้าน'
    ],
    example: 'สองจอ resolution เท่ากัน จอเล็กมี PPI สูงกว่า; 120 Hz refresh ถี่กว่า 60 Hz แต่ยังบอก response time หรือ fps ของเนื้อหาไม่ได้',
    trap: 'Mini-LED ไม่ใช่ MicroLED; NPU ไม่แทน processor ทุกงาน; gyroscope ไม่ได้ให้ตำแหน่งหรือมุมในห้องโดยตรง',
    pages: 'PDF 6–19, 22–26, 28–34'
  }
];
