const { translate } = require("@vitalets/google-translate-api");



async function translateToFrench() {
  try {
    const response = await translate("Immigration and citizenship of Canada", { to: "fr" });

    console.log(`Translated text : ${response.text}`);
  }
  catch (error) {
    console.error(error);
  }
}

translateToFrench();