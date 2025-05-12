#day01  
ref -> ไว้ใช้สร้างค่าที่มีการเปลี่ยนแปลงอยู่ตลอด  
reactive -> เหมือน ref แต่พิเศษขึ้นโดยสามารถเก็บค่าเป็น array ได้  
computed -> คำนวณ ซึ่งต่างจาก method โดยจะคำนวณทุกครั้งที่ reactive data เปลี่ยน ไม่ใช่ตามที่รันฟังก์ชัน  
watch -> ใช้ดูค่าที่เปลี่ยน ดูที่ inspect-console  

#day02  
install Vue Router  
create Home, About, Login  
use <router-link>  
ใช้ route params ใช้เพื่อใส่ค่าตรง url เพิ่มไปว่าอยู่ที่ role ไหน  
- path: "/login/:role?" --> ? ใส่ไว้เพื่อเวลาที่ไม่มี params จะได้ไม่ error  
- name: 'Login' --> ใส่ชื่อไว้ เวลาไปเรียกที่ App.py จะง่ายขึ้น  
ทำ Navigation Guard ใช้เพื่อควบคุมการเข้าถึงหน้า (route) โดยสามารถตั้งค่าให้เกิดการตรวจสอบก่อนที่การเปลี่ยนเส้นทางจะเกิดขึ้น