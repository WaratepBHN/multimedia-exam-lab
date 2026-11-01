export const chapter6Review = {
  chapter: 6,
  title: '2D & 3D Graphics',
  minutes: 1,
  keyPoints: [
    'Bitmap เก็บ pixels; vector เก็บรูปทรงและพารามิเตอร์ เหมาะ logo/icon/line art ปรับขนาดแล้ว rasterize ตามอุปกรณ์ ส่วนภาพถ่ายซับซ้อนมักเหมาะ bitmap มากกว่า',
    'Bézier degree 1/2/3 ใช้ control points 2/3/4 จุด; cubic ผ่านจุดต้น–ปลาย ส่วนจุดภายในควบคุม tangent/รูปทรง เชื่อมหลาย segments เป็นเส้นซับซ้อนได้',
    'Stroke คือเส้นขอบ; fill คือภายใน Affine มี translate/rotate/scale/reflect/shear และรักษาเส้นขนาน แต่ไม่รักษามุมหรือความยาวทุกกรณี Boolean: union รวม, intersection เอาส่วนซ้อน, difference ตัด, XOR เอาส่วนที่ไม่ซ้อน',
    '3D modeling สร้างรูปจาก primitives หรือ extrusion/lathe; polygon mesh ประกอบด้วย vertices/edges/faces; parametric surfaces เช่น NURBS เป็นอีกวิธีแทนผิว แล้วกำหนด material/texture',
    'Rendering เปลี่ยน scene+แสง+กล้องเป็นภาพ: projection → visibility → shading ตาม pipeline ย่อของสไลด์ Flat ใช้ค่าต่อหน้า; Gouraud interpolate สี/แสงจาก vertices; Phong interpolate normals แล้วคำนวณแสงภายในหน้า'
  ],
  example: 'Linear Bézier: P(t)=(1−t)P₀+tP₁ ถ้า P₀=(0,0), P₁=(8,4), t=0.25 จะได้ P=(2,1) จุดบนเส้น ไม่ใช่การเพิ่ม pixel resolution ของภาพเดิม',
  trap: 'Vector ไม่ได้ไฟล์เล็กกว่าทุกภาพ; control points ภายในไม่จำเป็นอยู่บน curve; flat shading ไม่ใช่ไม่มีการคำนวณแสง และผิวดูเรียบขึ้นไม่ได้เพิ่ม geometry ของ mesh',
  pages: 'PDF 6–24, 26–36, 38–47, 49–73, 75–94'
};

export const vectorDeepDive = [
  {
    id: 'vector-basics',
    title: '1. Vector, bitmap และการแสดงผล',
    summary: 'แยกข้อมูลที่เก็บออกจากพิกเซลที่ใช้แสดง: vector เก็บรูปทรง ส่วน bitmap เก็บค่าสีของ pixels',
    paragraphs: [
      'Bitmap แทนภาพด้วยตาราง pixels ส่วน vector ใช้รูปเรขาคณิต เช่น line, curve, circle และ rectangle พร้อมพารามิเตอร์ รูปวงกลมจึงระบุด้วยจุดศูนย์กลางและรัศมีได้ ไม่ต้องเก็บค่าสีทุกจุดของวงกลมตั้งแต่ต้น',
      'Logo, icon และ line art ที่มีขอบชัดมักแทนด้วยรูปทรงจำนวนน้อย จึงมีข้อมูลกะทัดรัดและปรับขนาดได้ดี แต่ภาพถ่ายธรรมชาติที่มี texture และสีซับซ้อนอาจต้องใช้รูปทรงจำนวนมาก จึงไม่ควรสรุปว่า vector เล็กกว่า bitmap เสมอ',
      'Coordinate system ทำให้ตำแหน่งเป็นตัวเลขและคำนวณได้ Point เช่น (x,y) ระบุตำแหน่ง ส่วน vector แทนการกระจัดที่มีทั้งทิศและขนาด ในตัวอย่างพิกัดจอของสไลด์ จุดกำเนิดอยู่ซ้ายบน x เพิ่มไปขวา y เพิ่มลงล่าง ต่างจากแกนคณิตศาสตร์ที่คุ้นเคย',
      'เมื่อต้องแสดงบนจอ pixels รูปทรงต้องผ่าน rendering/rasterization เพื่อเลือก pixels และสี การขยาย vector คงคำอธิบายรูปทรงไว้แล้วคำนวณภาพใหม่ได้ จึงไม่เหมือนขยาย pixels ชุดเดิมของ bitmap'
    ],
    steps: ['กำหนดรูปทรงและพารามิเตอร์ในระบบพิกัด', 'ปรับตำแหน่ง ขนาด และคุณสมบัติที่ต้องการ', 'Rasterize เป็น pixels ให้เหมาะกับ output'],
    example: {
      title: 'วงกลมและเวกเตอร์: ตัวอย่างคำนวณเสริมจากนิยาม',
      lines: [
        'วงกลมศูนย์กลาง (2,3) รัศมี 5 มีสมการ (x−2)²+(y−3)²=25',
        'จุด (5,7): (5−2)²+(7−3)²=9+16=25 จึงอยู่บนวงกลม',
        'จาก A=(2,3) ไป B=(5,7) ได้ vector B−A=(3,4) และขนาด √(3²+4²)=5'
      ]
    },
    pitfalls: ['Vector ในชื่อ vector graphics ไม่ใช่เพียงเส้นลูกศร แต่เป็นการแทนภาพด้วยข้อมูลเรขาคณิต', 'การเก็บแบบ resolution-independent ไม่ได้แปลว่าจอปลายทางไม่ต้องใช้ pixels', 'คำอธิบายเลือก pixel ตามค่า y ที่ปัดในหน้า 21 เป็นภาพรวม อย่าจำว่า Bresenham ทุกกรณีคือคำนวณเลขทศนิยมแล้วปัดอย่างเดียว'],
    sources: ['สไลด์บท 6 หน้า PDF 6–24; ตัวอย่างวงกลม/การกระจัดเป็นการแทนค่าเสริมจากนิยามหน้า 13, 17–18']
  },
  {
    id: 'vector-bezier',
    title: '2. Bézier curves: จุดควบคุมและ interpolation',
    summary: 'Degree บอกลำดับพหุนาม ไม่ใช่จำนวนมิติ: linear ใช้ 2 จุด, quadratic 3 จุด, cubic 4 จุด',
    paragraphs: [
      'Curve คือวัตถุเรขาคณิตที่ไม่จำเป็นต้องตรง Bézier เป็นแบบจำลองที่นิยมเพราะควบคุมรูปทรงได้ผ่าน control points สไลด์ภาพหน้า 29 แสดงสูตร linear, quadratic และ cubic ครบ ส่วนหน้า 30–32 แสดงการสร้างจุดด้วย interpolation ต่อเนื่องหลายระดับ',
      'Linear: P(t)=(1−t)P₀+tP₁; quadratic: P(t)=(1−t)²P₀+2(1−t)tP₁+t²P₂; cubic: P(t)=(1−t)³P₀+3(1−t)²tP₁+3(1−t)t²P₂+t³P₃ โดยใช้ 0≤t≤1 เพื่อรวมจุดต้นและปลาย คูณน้ำหนักและบวกแยกแต่ละ coordinate',
      'Cubic ผ่าน P₀ และ P₃ ส่วน P₁/P₂ ควบคุมทิศและลักษณะความโค้ง ไม่ต้องอยู่บนเส้น ทิศ tangent ต้นสัมพันธ์กับ P₁−P₀ และปลายกับ P₃−P₂; อนุพันธ์จริงของสูตร cubic ตามพารามิเตอร์นี้มีค่า 3(P₁−P₀) และ 3(P₃−P₂)',
      'หลาย Bézier segments ต่อกันเป็นเส้นยาว/ซับซ้อน และปิดเส้นเพื่อสร้าง shape ได้ C0 คือจุดปลายร่วม; C1 เพิ่มอนุพันธ์อันดับหนึ่งเท่ากันเมื่อใช้พารามิเตอร์ที่สอดคล้อง เรื่อง G/C continuity ละเอียดเชื่อมกับบท 7'
    ],
    steps: ['กำหนด control points ตาม degree', 'เลือกค่า t ระหว่าง 0 ถึง 1', 'ผสมพิกัดด้วยน้ำหนักตามสูตร หรือทำ linear interpolation หลายระดับ', 'เปลี่ยน control points เพื่อปรับรูปเส้น และตรวจรอยต่อเมื่อรวม segments'],
    example: {
      title: 'จุดกึ่งกลาง linear กับ quadratic ไม่เหมือนกัน',
      lines: [
        'Linear P₀=(0,0), P₁=(8,4), t=0.25 → 0.75(0,0)+0.25(8,4)=(2,1)',
        'Quadratic P₀=(0,0), P₁=(2,4), P₂=(4,0), t=0.5 มีน้ำหนัก 0.25,0.5,0.25',
        'P(0.5)=0.25(0,0)+0.5(2,4)+0.25(4,0)=(2,2) จึงไม่ผ่าน control point P₁=(2,4)',
        'ตัวอย่างตัวเลขนี้สร้างเพื่ออธิบายสูตรในสไลด์ ไม่ใช่โจทย์หรือแบบทดสอบ'
      ]
    },
    pitfalls: ['คำ 1-D ในหน้า 29 ควรอ่านตามบริบทว่า degree 1 ไม่ใช่ว่าเส้นนี้อยู่ได้เพียงหนึ่งมิติ', 'พจน์ P₂ ของ cubic ในภาพหน้า 29 พิมพ์คลาดเคลื่อน: สูตรที่ถูกใช้ 3(1−t)t²P₂ และช่วง t รวม endpoints เป็น 0≤t≤1', 'จุดควบคุม 4 จุดของ cubic ไม่ได้แปลว่า curve ผ่านทั้ง 4 จุด', 'P′ เป็น velocity จริงเมื่อ parameter เป็นเวลา; ถ้าเป็นเพียง curve parameter ให้เรียกอนุพันธ์/tangent ก่อน', 'เพิ่ม t เท่ากันไม่รับประกันระยะตามเส้นเท่ากัน ซึ่งเชื่อมกับ arc-length lookup ในบท 7'],
    sources: ['สไลด์บท 6 หน้า PDF 26–36; สูตรตรวจจากภาพหน้า 29 โดยแก้พจน์ cubic P₂ ที่พิมพ์ผิด; factor 3 ของ tangent เป็นการหาอนุพันธ์สูตร cubic ที่ถูกต้อง']
  },
  {
    id: 'vector-manipulation',
    title: '3. Stroke, fill, transforms และ Boolean operations',
    summary: 'Properties เปลี่ยนรูปลักษณ์; transforms เปลี่ยน geometry; Boolean operations สร้าง shape จากพื้นที่ของวัตถุเดิม',
    paragraphs: [
      'Stroke/border มีสี ความกว้าง รูปแบบเส้น และลักษณะปลาย/รอยต่อ ส่วน fill/face มีสี ความโปร่งใส gradient หรือ texture จึงควรแยกการเปลี่ยนเส้นขอบกับการเปลี่ยนพื้นที่ภายใน',
      'Affine transforms ได้แก่ translation, rotation, scale, reflection และ shear ในกรณีปกติที่ไม่ยุบมิติจะรักษาเส้นตรง เส้นขนาน และอัตราส่วนบนเส้นเดียวกัน แต่ไม่จำเป็นต้องรักษาความยาว มุม หรืออัตราส่วนระยะคนละทิศ เช่น scale x กับ y ไม่เท่ากันทำวงกลมเป็นวงรีได้',
      'Projective transform จำลอง perspective ได้ โดยเส้นที่เดิมขนานอาจปรากฏลู่เข้าหากัน ส่วน non-linear transform เปลี่ยนรูปได้กว้างกว่า ลำดับการทำ transforms สำคัญ: หมุนแล้วเลื่อนมักได้ตำแหน่งต่างจากเลื่อนแล้วหมุนรอบ origin',
      'Union/OR เอาพื้นที่ A หรือ B รวมส่วนซ้อน; intersection/AND เอาเฉพาะส่วนร่วม; difference A−B เอา A ที่ไม่อยู่ใน B; XOR เอาพื้นที่ที่อยู่ในเพียงรูปใดรูปหนึ่ง จึงตัดส่วนซ้อนออก ต่างจาก union'
    ],
    steps: ['เลือก stroke/fill ให้ตรงผลด้านรูปลักษณ์', 'เลือก transform และจุดอ้างอิงให้ตรงการเลื่อน/หมุน/ปรับขนาด', 'ตรวจลำดับเมื่อใช้หลาย transforms', 'เลือก Boolean operator จากพื้นที่ผลลัพธ์ที่ต้องการ'],
    example: {
      title: 'ลำดับ transform: ตัวอย่างเสริม',
      lines: [
        'ใช้แกนคณิตศาสตร์ x ไปขวา y ขึ้นบน จุด A=(1,0)',
        'หมุนทวนเข็ม 90° รอบ origin → (0,1) แล้วเลื่อน (+2,0) → (2,1)',
        'ถ้าเลื่อนก่อน → (3,0) แล้วหมุนทวนเข็ม 90° → (0,3)',
        'จึงไม่ควรสลับลำดับเพียงเพราะใช้ rotation และ translation ชุดเดียวกัน'
      ]
    },
    pitfalls: ['คำว่า affine รักษาอัตราส่วนในหน้า 40/47 ไม่ได้หมายถึงอัตราส่วนระยะทุกคู่ทุกทิศ; ให้นึกถึงจุดร่วมเส้นและ midpoint', 'A−B มักไม่เท่ากับ B−A', 'เปลี่ยน fill เป็นโปร่งใสไม่เหมือนทำ difference ตัด geometry ออก'],
    sources: ['สไลด์บท 6 หน้า PDF 38–47 โดยเฉพาะภาพลำดับ transform หน้า 43 และ Boolean หน้า 46', 'ตรวจนิยาม collinear ratios เพิ่มเติม: https://www.maths.gla.ac.uk/wws/cabripages/klein/affine4.html']
  },
  {
    id: 'vector-modeling',
    title: '4. 3D modeling: จาก primitives และเส้น 2D สู่ผิววัตถุ',
    summary: 'Modeling กำหนดรูปทรงและคุณสมบัติ ไม่ใช่การสร้างภาพสุดท้ายจากกล้อง',
    paragraphs: [
      '3D ใช้พิกัด (x,y,z) วัตถุอาจมี volume และผิวไม่จำเป็นอยู่ในระนาบเดียว วิธีหนึ่งเริ่มจาก primitives เช่น box, cylinder, sphere, torus และ cone แล้วแปลงขนาด/หมุน/ประกอบ/ใช้ Boolean ให้เป็นรูปซับซ้อน',
      'อีกวิธีเริ่มจากรูป 2D: extrusion ยืดหน้าหรือเส้นขอบไปตามทิศให้เกิดความลึก ส่วน lathe/lathing หมุน profile รอบแกนเพื่อสร้างผิว เช่นแจกันที่เกิดจากเส้นด้านข้างหมุนรอบแกนกลาง',
      'Polygon mesh คือผิวที่ประกอบจาก polygons เชื่อมกัน Vertex คือจุดยอด; edge คือเส้นเชื่อม; face คือหน้า polygon นิยม triangles และ quads แต่ไม่ควรจำว่ามีได้เพียง 3 หรือ 4 ด้าน เพราะภาพหน้า 62 แสดง polygon 5 ด้านด้วย',
      'เพิ่ม polygons ช่วยแทนรายละเอียดทาง geometry ได้มากขึ้นแต่เพิ่มภาระคำนวณ อีกแนวทางใช้ parametric surfaces เช่น NURBS เพื่อควบคุมผิวเรียบ งาน rendering แบบ polygon มักแปลงผิวเป็น mesh ก่อน; ไม่ใช่ว่าวัตถุ 3D ทุกระบบเก็บเป็น mesh เท่านั้น',
      'หลังได้รูปทรง กำหนด material เช่นสี/ความมัน/roughness และ texture mapping เพื่อบอกรูปลักษณ์และการตอบสนองต่อแสง การเปลี่ยน texture ไม่ได้เปลี่ยน silhouette ของ mesh โดยอัตโนมัติ'
    ],
    steps: ['สร้างรูปจาก primitives หรือ extrusion/lathe ของรูป 2D', 'แก้ geometry ระดับ object หรือ vertices/edges/faces', 'เลือก representation ที่เหมาะและเตรียม mesh เมื่อต้องใช้ใน pipeline นั้น', 'กำหนด material, texture และคุณสมบัติผิว'],
    example: {
      title: 'สร้างถ้วยหรือแจกันหนึ่งใบ',
      lines: ['วาด profile ด้านข้างแล้ว lathe รอบแกนกลางเพื่อได้รูปทรงหมุน', 'ถ้าต้องใช้ polygon renderer ให้แปลงเป็น mesh และจัดจำนวน faces ตามรายละเอียดที่ต้องการ', 'กำหนด material เซรามิก สี และ roughness ก่อนจัดแสง/กล้องเพื่อ render']
    },
    pitfalls: ['Extrusion คือยืดให้เกิดความลึก ส่วน lathe คือหมุนรอบแกน', 'Mesh ละเอียดขึ้นไม่รับประกันภาพสมจริง หากแสง/material/camera ยังไม่เหมาะ', 'Shading เรียบไม่ใช่หลักฐานว่า geometry มี polygons เพิ่ม', 'NURBS กับ polygon mesh เป็นวิธีแทนผิว ไม่ใช่ชื่อคุณภาพภาพสองระดับที่ตายตัว'],
    sources: ['สไลด์บท 6 หน้า PDF 49–73 โดยเฉพาะภาพ extrusion/lathe หน้า 57–58, vertices/edges/faces หน้า 62–63 และ NURBS/mesh หน้า 69–70']
  },
  {
    id: 'vector-light',
    title: '5. Light, material, camera และเงา',
    summary: 'สีที่เห็นขึ้นกับทั้งแสง ผิว กล้อง การบัง และแสงสะท้อนจากวัตถุอื่น',
    paragraphs: [
      '3D rendering สร้างภาพจาก model และ scene settings ที่มองผ่าน virtual camera โดยจำลองหรือประมาณปฏิสัมพันธ์ของแสงกับพื้นผิว Surface normal คือทิศตั้งฉากกับผิว ใช้อ้างอิงมุมแสงและการคำนวณ shading',
      'Specular reflection ให้การสะท้อนที่ขึ้นกับทิศและเห็น highlight เด่นบนผิวมัน ส่วน diffuse reflection กระจายจากผิวด้าน ผิวจริงอาจมีทั้งสององค์ประกอบ สไลด์หน้า 77 แสดงมุมตกกระทบ/สะท้อนวัดจาก normal',
      'ปริมาณและสีที่กล้องเห็นขึ้นกับชนิด/สี/ความเข้มแสง material ทิศกล้อง และสิ่งบังแสง เกิด shadow เมื่อวัตถุบังทางแสง การสะท้อนจากผิวใกล้เคียงเป็น indirect light ที่ภาพหน้า 80–82 เปรียบเทียบกับ direct light'
    ],
    steps: ['กำหนดแหล่งกำเนิดแสงและ material', 'ดูทิศแสงเทียบ surface normal และมุมมองกล้อง', 'พิจารณาทางแสงที่ถูกบังและแสงสะท้อนจากผิวอื่น'],
    example: {
      title: 'ทรงกลมเดิม แต่ภาพต่างกัน',
      lines: ['ใช้ mesh เดิมกับ material ผิวด้าน จะเห็น diffuse เด่น', 'ลด roughness/เพิ่มองค์ประกอบผิวมัน จะเห็น highlight ต่างไปตามแสงและกล้อง', 'เพิ่มวัตถุบังแหล่งแสง เกิดเงาได้โดยไม่ได้เปลี่ยน mesh ของทรงกลม']
    },
    pitfalls: ['Surface normal ไม่ใช่ทิศที่กล้องมองเสมอ', 'เงาและผิวมืดไม่เหมือนกันทุกกรณี ผิวอาจมืดเพราะ material หรือมุมแสง', 'Diffuse/specular เป็นลักษณะปฏิสัมพันธ์แสง ส่วน flat/Gouraud/Phong เป็นวิธี shading คนละการแบ่ง'],
    sources: ['สไลด์บท 6 หน้า PDF 75–82']
  },
  {
    id: 'vector-rendering',
    title: '6. Rendering: projection → visibility → shading',
    summary: 'จำหน้าที่แต่ละขั้น และแยกผิวที่ดูเรียบจากจำนวน polygons จริง',
    paragraphs: [
      'ภาพรวมคือ specify scene → render → store/display สไลด์สรุป pipeline แบบย่อสำหรับ real-time rendering ว่า perspective projection, visibility check และ shading ขั้นตอนจริงอาจแบ่งย่อยหรือเรียงรายละเอียดต่างกันตามวิธี render',
      'Perspective projection ฉายตำแหน่ง 3D ไปบน image/camera plane วัตถุขนาดเท่ากันที่ไกลกว่าจะดูเล็กลง ภาพหน้า 87 ใช้กล้องที่ origin มองตาม +z และระนาบภาพระยะ d จึงอธิบายด้วยสามเหลี่ยมคล้ายว่า x′=dx/z และ y′=dy/z ได้ ภาพนี้เป็น convention หนึ่ง ไม่ใช่สัญญาณของแกนที่ทุกโปรแกรมต้องใช้เหมือนกัน',
      'Visibility check พิจารณาว่าผิวใดถูกบังจากกล้อง เพื่อไม่ให้ด้านหลังปรากฏทับด้านหน้า ภาพ wireframe หน้า 88–90 ทำให้เห็นความต่างของการแสดงเส้นทั้งหมดกับการตัดส่วนที่ถูกบัง Wireframe เป็นรูปแบบการแสดง ไม่ได้แปลว่าทุก renderer ต้องสร้างภาพ wireframe เป็นไฟล์กลาง',
      'Flat shading ใช้สี/ค่าการส่องสว่างคงที่ต่อ face จึงเห็นเหลี่ยมชัด; Gouraud คำนวณแสงที่ vertices แล้ว interpolate สี/ความสว่างภายในหน้า; Phong interpolate normals แล้วคำนวณแสงตามจุดภายในหน้า ทำให้ highlight และความเรียบทางสายตาดีขึ้นในหลายกรณี แต่มีต้นทุนเพิ่มและไม่ได้เพิ่ม geometry'
    ],
    steps: ['กำหนด models, materials, lights และ virtual camera', 'Project จุดหรือ polygons ไปยัง image plane', 'ตรวจ visibility เพื่อเลือกผิวที่มองเห็น', 'คำนวณ shading และสร้างภาพ pixels สำหรับเก็บหรือแสดง'],
    example: {
      title: 'Perspective จากรูปหน้า 87: ตัวอย่างเสริม',
      lines: ['ใช้ d=2, P=(4,2,8) ตาม convention มอง +z → x′=2×4/8=1, y′=2×2/8=0.5', 'ถ้า P ถอยเป็น (4,2,16) → x′=0.5, y′=0.25 ระยะจากศูนย์ภาพลดครึ่งหนึ่ง', 'ตัวเลขสร้างเพื่ออธิบายสามเหลี่ยมคล้ายจากภาพ ไม่ใช่สูตร matrix projection เต็มของทุก graphics API']
    },
    pitfalls: ['หน้า 91 เรียก flat shading ว่า no shading เป็นคำย่อที่ชวนสับสน: ยังมีการคำนวณ/กำหนดสีแสง แต่ไม่ smooth ภายใน face แบบ Gouraud/Phong', 'Phong ไม่ใช่ดีที่สุดสำหรับทุกงาน ต้องดูเป้าหมายภาพและทรัพยากร', 'Phong shading ที่ interpolate normals กับ Phong reflection model ที่คำนวณแสงเป็นคนละแนวคิด แม้ใช้ร่วมกันได้', 'การทำให้แสงบนผิวเรียบไม่ได้ทำให้เส้นขอบ silhouette ที่มีเหลี่ยมกลมขึ้นเอง'],
    sources: ['สไลด์บท 6 หน้า PDF 83–94 โดยเฉพาะภาพ projection หน้า 84–87 และ shading หน้า 91–92', 'รายละเอียด Gouraud/Phong ตรวจเทียบแหล่งทางการ Microsoft: https://learn.microsoft.com/en-us/archive/msdn-magazine/2014/october/directx-factor-pixel-shaders-and-the-reflection-of-light']
  }
];
