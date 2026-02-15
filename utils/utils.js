const axios = require("axios");
const fs = require("fs");

async function download(uri, filename, callback) {
  try {
    const response = await axios({
      url: uri,
      method: "GET",
      responseType: "stream",
    });

    const writer = fs.createWriteStream(filename);
    response.data.pipe(writer);

    writer.on("finish", callback);
    writer.on("error", callback);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
}

module.exports.download = download;