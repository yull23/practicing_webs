import fs from "fs";
import path from "path";

async function readJson(fileName: string) {
  try {
    const rutaAbsoluta = path.resolve(__dirname, "..", fileName);
    const jsonData = await fs.promises.readFile(rutaAbsoluta, "utf-8");
    const data = JSON.parse(jsonData);
    console.log(data);
    // return data;
  } catch (error) {
    console.error(error);
  }
}
