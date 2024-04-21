import puppeteer from 'puppeteer'
import { readJson } from './services/read-json'
import { foundLaunch } from './services/found-launch'
import { notFoundLaunch } from './services/not-found_launch'
import { ReadFileData } from './types/types'

export async function openWebPage() {
  const jsonData: ReadFileData = await readJson()
  const browser = await puppeteer.launch({ headless: true })

  const data = await Promise.all(
    jsonData.slice(0, 3).map(async (launchData) => {
      const page = await browser.newPage()

      try {
        return await foundLaunch(page, launchData)
      } catch (error) {
        return await notFoundLaunch(page, launchData)
      }
    }),
  )
  return data
}

openWebPage()
