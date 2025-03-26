const { translate } = require("@vitalets/google-translate-api");



async function translateToFrench() {
  try {
    const response = await translate("John D. Rockefeller was an American business magnate, philanthropist, and founder of Standard Oil, dominating the oil industry, and if you aim for great business success like John D. Rockefeller, focus on innovation, strategic investments, and long-term vision. ", { to: "fr" });

    console.log(`Translated text : ${response.text}`);
  }
  catch (error) {
    console.error(error);
  }
}

translateToFrench();