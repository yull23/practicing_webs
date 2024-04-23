// import { initReadFile } from './init-read-file'
import path from 'path'
import { initReadFile } from './init-read-file'
import { openWebPage } from './open-web-page'
import fs from 'fs'

async function app() {
  try {
    // Get Data from to API
    const data = await initReadFile()
    const dataWebPage = await openWebPage()
    console.log(dataWebPage)
    const fileName = 'data.json'
    const filePath = path.resolve(__dirname, './../', fileName)
    await fs.promises.writeFile(filePath, JSON.stringify(dataWebPage))
    console.log('end')
    return data
  } catch (error) {
    console.error(error)
  }
}

app()
