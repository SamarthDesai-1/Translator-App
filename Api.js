const express = require("express");
const cors = require("cors");
const { translate } = require("@vitalets/google-translate-api");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/test-api", (request, response) => {
  response.json({ message: "This is API testing." });
})


app.post("/api/translate", async (request, response) => {

    const { text, targetLang } = request.body;

    console.log(text);
    console.log(targetLang);

    if (!text) {
      return response.status(400).json({ error: "Text is required" });
    }

    const to = targetLang || 'en';

    const result = await translate(text, { to });

    console.log(result);

    response.json({
      originalText: text,
      translatedText: result.text,
      targetLanguage: to
    });

})


app.listen(PORT, () => {
  console.log("Server is listennig on port", PORT);
})