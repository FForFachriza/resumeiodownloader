import { input } from "@inquirer/prompts";
import resumeDownloader from "./utils/downloader.js";

const link: string = await input({
  message: "Masukkan Link",
  validate: (input: string) => {
    if (input.length === 0) {
      return "Link tidak boleh kosong";
    } else if (!input.startsWith("https://resume.io/r/")) {
      return "Link harus diawali dengan https://resume.io/r/";
    }
    return true;
  },
  default: "https://resume.io/r/xxxxx",
});

const filename: string = await input({
  message: "Masukkan Nama Untuk File Yang Akan disimpan",
  validate: (input: string) => {
    if (input.length === 0) {
      return "Nama Tidak Boleh KOsong";
    }
    return true;
  },
  default: "My CV",
});

(async () => {
  await resumeDownloader(link, filename);
})();
