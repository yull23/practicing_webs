import { getAllLinksWikipedia } from "./services";
import fs from "fs";

async function main() {
  try {
    const links = await getAllLinksWikipedia();
    const jsonData = JSON.stringify(links, null, 2);
    await fs.promises.writeFile("links-launches-wikipedia.json", jsonData);
    console.log(jsonData);
  } catch (error) {
    console.error(error);
  }
}

main();
