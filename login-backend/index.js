const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// เชื่อมต่อฐานข้อมูล (เปลี่ยนค่าตาม Beekeeper ของคุณ)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // ชื่อผู้ใช้ของคุณ
  password: "",       // รหัสผ่านของคุณ
  database: "your_db" // ชื่อฐานข้อมูลของคุณ
});

db.connect(err => {
  if (err) {
    console.error("Connection failed:", err);
  } else {
    console.log("✅ Connected to database");
  }
});

// รับข้อมูล login จาก frontend
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Server error" });
      }

      if (result.length > 0) {
        res.json({ success: true, message: "Login successful" });
      } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    }
  );
});

// รัน server
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
