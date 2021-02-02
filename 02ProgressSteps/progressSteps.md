# Progress Stpes

## HTML

```html
<div class="container">
  <div class="progress-container">
    <div class="progress" id="progress"></div>
    <div class="circle active">1</div>
    <div class="circle">2</div>
    <div class="circle">3</div>
    <div class="circle">4</div>
  </div>

  <button class="btn" id="prev" disabled>Prev</button>
  <button class="btn" id="next">Next</button>
</div>
```

## css

การตั้งค่า root ของ color เพื่อที่จะได้แก้ไขค่าสีได้ทั้งโปรแกรม ถ้าหากเราต้องการแก้ไขสี ข้อดีคือ ถ้าหากเราต้องการเปลี่ยน เราจะไม่ต้องไปเปลี่ยน Value ของ css แต่เราจะสามรถแก้ไขที่ root เพียงที่เดียวได้เลย

```css
:root {
  --line-border-fill: #3498db;
  --line-border-emtry: #e0e0e0;
}
```

ตัวอย่างการเรียกใช้งาน

```css
.progress-container {
  background-color: var(--line-border-emtry);
}
```

## JavaScript

สร้างตัวแปรเพื่อเรียกใช้งาน

- สร้างตัวแปร xxx เพื่อทำการ document.getElementById('id จาก html');
- สร้างตัวแปร xxx เพื่อทำการ document.querySelectorAll('css จาก html'); จะถูก return เป็น Node lists

```js
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
```

```js
let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});
```

### อธิบาย Code ตัวแปร next

- ตัวแปร let currentActive แล้วกำหนดค่าเริ่มต้นให้เป็น 1 และถูกเปลี่ยนแปลงค่าไปได้เรื่อยๆ
- นำตัวแปร next มา addEventListener แล้วทำการกำหนด event ให้ในที่นี่คือ 'click' แล้วเรียกใช้งานทันที่ด้วย Arrow function
- เมื่อไหร่ก็ตามที่เรา Click ให้ currentActive บวกค่าเพิ่มขึ้นที่ละ 1
- กำหนดเงื่อนไขคือ ถ้า currentActive มากกว่า circles.length ให้ currentActive มีค่าเท่ากับ circles.length
- เรียกใช้งาน callback function เพื่อให้โปรแกรม update ข้อมูล

```js
prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});
```

### อธิบาย Code ตัวแปร prev

- ตัวแปร let currentActive แล้วกำหนดค่าเริ่มต้นให้เป็น 1 และถูกเปลี่ยนแปลงค่าไปได้เรื่อยๆ
- นำตัวแปร next มา addEventListener แล้วทำการกำหนด event ให้ในที่นี่คือ 'click' แล้วเรียกใช้งานทันที่ด้วย Arrow function
- เมื่อไหร่ก็ตามที่เรา Click ให้ currentActive ลบค่าลงที่ละ 1
- กำหนดเงื่อนไขคือ ถ้า currentActive น้อยกว่า circles.length ให้ currentActive มีค่าเท่ากับ 1
- เรียกใช้งาน callback function เพื่อให้โปรแกรม update ข้อมูล

```js
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
```

### อธิบาย Code function update

- นำตัวแปร circles มาทำการ forEach(เป็นการวน loop ภายใน Array) จากนั้นใส่ parameter ให้เป็น circle, index เพื่อที่แยก Index ของ Array ออกมา
- กำหนดเงื่อน ถ้า idx < currentActive ให้ circle.classList.add('active'); แต่ถ้าไม่ใช้ ให้ circle.classList.remove('active');
