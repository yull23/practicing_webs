import { getLaunchesData } from './services/read-file'

async function app() {
  // Get Api
  // Tratamiento
  try {
    const data = await getLaunchesData()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

app()
