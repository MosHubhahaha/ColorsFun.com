let grid = document.querySelector(".grid");
let box_color=document.querySelector(".box-color");
const colors = [];

for (let i = 0; i < 1000; i++) {
    // สุ่มค่ารหัสสีในรูปแบบ Hex
    const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    colors.push(color);
}

console.log(colors);




function updateLayout() {
    const leftSidebar = document.querySelector(".left");
    const page = document.querySelector(".page");
    let boxColors=document.querySelectorAll(".box-color")

    boxColors.forEach(box => {
        if (window.matchMedia("(max-width: 600px)").matches) {
            box.style.width = '100px'; // กำหนดขนาดกล่อง
            box.style.height = '100px'; // กำหนดขนาดกล่อง
            box.style.margin = '5px'; // เพิ่มระยะห่างระหว่างกล่อง
        }else if(window.matchMedia("(max-width: 1024px)").matches){
            box.style.width = '150px'; // กำหนดขนาดกล่อง
            box.style.height = '150px'; // กำหนดขนาดกล่อง
            box.style.margin = '5px'; // เพิ่มระยะห่างระหว่างกล่อง
        } else {
            box.style.width = '170px'; // กำหนดขนาดกล่อง
            box.style.height = '170px'; // กำหนดขนาดกล่อง
            box.style.margin = '10px'; // เพิ่มระยะห่างระหว่างกล่อง
        }       
    })

}

// เรียกใช้ฟังก์ชันเมื่อโหลดหน้าและเมื่อขนาดหน้าต่างเปลี่ยน
window.addEventListener("load", updateLayout);
window.addEventListener("resize", updateLayout);


colors.forEach(color => {
    let div = document.createElement("div");
    div.classList.add("box-color");
    div.style.backgroundColor = color;
    div.style.width = '150px'; // กำหนดขนาดกล่อง
    div.style.height = '150px'; // กำหนดขนาดกล่อง
    div.style.margin = '10px'; // เพิ่มระยะห่างระหว่างกล่อง



    let colorName = document.createElement("p");
    colorName.classList.add("name");
    colorName.textContent = color; // เพิ่มรหัสสีเป็นข้อความในพารากราฟ
    
    div.append(colorName)
    div.addEventListener("click", () => {
        navigator.clipboard.writeText(color).then(() => {
            colorName.innerText="Copied!"
            setTimeout(()=>{
                colorName.textContent = color;
            },1000)
        }).catch(err => {
            console.error('ไม่สามารถคัดลอกได้:', err);
        });
    });

    grid.append(div); // เพิ่มกล่องสีลงใน grid
});
