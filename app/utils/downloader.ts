import axios, { AxiosError } from "axios";
import { getId } from "./getid.js";
import { template } from "./template.js";
import getImage from "./getimage.js";

export default async function resumeDownloader(url: string, filename: string) {
  try {
    await axios.get(url);

    const getFilename = `${filename}.png`;
    const getIdLink = getId(url);
    const getLink = template(getIdLink);
    await getImage(getLink, getFilename);
  } catch (error: any) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
}
