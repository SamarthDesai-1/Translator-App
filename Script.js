async function translateText(text, targetLang = "en") {

  try {
    const response = await fetch("http://localhost:5000/api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        targetLang: targetLang,
      }),
    });

    if (!response.ok) {
      throw new Error("Translation request failed");
    }

    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

function call() {


  let text = document.getElementById("user").value;
  console.log(text);

  let toTranslate = document.getElementById("select-id").value;
  console.log(toTranslate);


  translateText(text, toTranslate)
  .then((result) => {
    console.log("Translated text:", document.getElementById("translateText").innerHTML = result.translatedText);
    console.log("Detected language:", result.detectedLanguage);
  })
  .catch((error) => {
    console.error("Translation failed:", error);
  });

}
