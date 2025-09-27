const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kishanpatel486630@gmail.com", // <-- Replace with your Gmail address
      pass: "qhdfqmgjjcwbsgbt", // <-- Replace with your Gmail App Password
    },
  });
  try {
    // Send email to your account only
    await transporter.sendMail({
      from: email,
      to: "kishanpatel486630@gmail.com",
      subject: `Contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
