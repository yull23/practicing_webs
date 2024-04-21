import { initReadFile } from './init-read-file'
import { openWebPage } from './open-web-page'

async function app() {
  try {
    // Get Data from to API
    // const data = await initReadFile()
    const dataWebPage = await openWebPage()
    console.log(dataWebPage)
  } catch (error) {
    console.error(error)
  }
}

app()
