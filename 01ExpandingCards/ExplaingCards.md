# Expading Card

จะเป็นการสร้างโปรเจคที่จะต้องมีการ Click ที่รูปภาพแล้วให้รูปภาพ มีการขยายออกไปในเวลาที่คลิก

## HMTL

- เริ่มจากที่เราสร้าง class container ขึ้นมาเพื่อที่จะเก็บ Element ต่างๆ ไว้ในนี้
- สร้าง class panel เพื่อที่เราจะให้เก็บรูปภาพและข้อความ

```html
<div class="container">
  <div
    class="panel active"
    style="background-image: url('https://images.unsplash.com/photo-1610813835315-9a93c5035c81?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');"
  >
    <h3>Explore the world</h3>
  </div>
  <div
    class="panel"
    style="background-image: url('https://images.unsplash.com/photo-1609495851918-453db9f9daed?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');"
  >
    <h3>Explore the world</h3>
  </div>
  <div
    class="panel"
    style="background-image: url('https://images.unsplash.com/photo-1610906877971-02cde3f61e4f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');"
  >
    <h3>Explore the world</h3>
  </div>
  <div
    class="panel"
    style="background-image: url('https://images.unsplash.com/photo-1610730297006-ed0e847c34f9?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');"
  >
    <h3>Explore the world</h3>
  </div>
  <div
    class="panel"
    style="background-image: url('https://images.unsplash.com/photo-1610963294574-91b5ad1ffe02?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');"
  >
    <h3>Explore the world</h3>
  </div>
</div>
```

## CSS

- import google font จาก google มาใช้งาน

```css
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;1,300&display=swap');
```

- กำหนด css ให้สามารถจัดการกับ Layout ให้มีประสิทธิภาพมากยิ่งขึ้น

```css
* {
  box-sizing: border-box;
}
```

- `font-family: 'Lato', sans-serif;` เป็นการกำหนด font ที่เรา Import มาจาก google font
- `display: flex;` กำหนดให้การแสดงผลเป็นแบบ Flex
- `justify-content: center;` กำหนดตำแหน่ง Horizontal ให้อยู่ตรงกลาง
- `align-items: center;` กำหนดตำแหน่ง Vartical ให้อยู่ตรงกลาง
- `height: 100vh;` กำหนดความสูง ของ Element body ให้มีความสูงเต็มขนาดของหน้าจอ
- `overflow: hidden;` อะไรก็ตามที่เกินหน้าจอการแสดงผลให้ ซ้อนไว้
- `margin: 0;` ระยะห่างด้านนอกเท่ากับ 0

```css
body {
  font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  margin: 0;
}
```

```css
.container {
  display: flex;
  width: 90vw;
}
```

```css
.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  cursor: pointer;
  color: #ffffff;
  border-radius: 50px;
  flex: 0.5;
  margin: 10px;
  position: relative;
  transition: flex 0.7s ease-in;
}

.panel h3 {
  font-size: 24px;
  font-weight: 300;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.panel.active {
  flex: 2;
}

.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}

@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}
```

- `:nth-of-type(4)` เป็นการเลือกว่า Element ลำดับที่เราเลือกเราจะไม่ต้องการ
