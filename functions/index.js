const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const { setGlobalOptions } = require("firebase-functions/v2");
const nodemailer = require("nodemailer");
const cors = require("cors");

setGlobalOptions({ maxInstances: 10 });

// SECRETS
const EMAIL_ADDRESS = defineSecret("EMAIL_ADDRESS");
const EMAIL_PASSWORD = defineSecret("EMAIL_PASSWORD");

// CORS
const corsHandler = cors({
  origin: [
    "http://localhost:5173",
    "https://michmorales2912.github.io",
    "https://michmorales2912.github.io/powerpuff-pixel",
  ],
});

// Function
exports.sendWelcomeEmail = onRequest(
  { secrets: [EMAIL_ADDRESS, EMAIL_PASSWORD] },
  (req, res) => {
    corsHandler(req, res, async () => {
      const { email } = req.body;

      if (!email) return res.status(400).send("Falta el correo 🤦‍♀️");

      // CREA EL TRANSPORT DENTRO DE LA FUNCIÓN
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: EMAIL_ADDRESS.value(),
          pass: EMAIL_PASSWORD.value(),
        },
      });

      try {
        await transporter.sendMail({
          from: EMAIL_ADDRESS.value(),
          to: email,
          subject: "¡Gracias por registrarte! 🎮💖",
          text: "Hola! Gracias por registrarte. Te avisaremos cuando el demo esté listo 💫",
        });

        res.send("Correo enviado con éxito ✨");
      } catch (error) {
        console.error("Error enviando correo:", error);
        res.status(500).send("No se pudo enviar el correo 😢");
      }
    });
  }
);
