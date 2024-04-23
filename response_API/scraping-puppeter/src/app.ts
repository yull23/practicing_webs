// import { initReadFile } from './init-read-file'
import path from 'path'
import { initReadFile } from './init-read-file'
import { openWebPage } from './open-web-page'
import fs from 'fs'

async function app() {
  try {
    // Get Data from to API
    const jsonData = await initReadFile()
    const dataWebPage = await openWebPage()
    //Save
    const fileName = 'data.json'
    console.log('start')
    const filePath = path.resolve(__dirname, './../', fileName)
    await fs.promises.writeFile(filePath, JSON.stringify(dataWebPage))
    console.log('end')
    return dataWebPage
  } catch (error) {
    console.error(error)
  }
}

app()
