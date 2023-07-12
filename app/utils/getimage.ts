import axios from "axios";
import fs from "fs";

export default async function getImage(url: string, filename: string) {
  try {
    const { data } = await axios.get(url, { responseType: "arraybuffer" });

    fs.writeFile(filename, data, (err) => {
      if (err) throw err;
      console.log("Image Telah Tersimpan!");
    });
  } catch (error) {
    return error;
  }
}
