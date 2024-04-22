import puppeteer, { Page } from 'puppeteer'
import { readJson } from './services/read-json'
import { foundLaunch } from './services/found-launch'
import { notFoundLaunch } from './services/not-found_launch'
import { ReadFileData } from './types/types'

export async function openWebPage() {
  const browser = await puppeteer.launch({
    headless: false,
  })

  const jsonData: ReadFileData = await readJson()
  const newArray = jsonData.slice(96, 98)
  console.log(newArray)

  try {
    const data = await Promise.all(
      newArray.map(async (launchData) => {
        const page = await browser.newPage()
        await page.setViewport({ width: 1600, height: 800 })
        if (launchData.linkWikipedia) {
          return await foundLaunch(page, launchData)
        } else {
          return await notFoundLaunch(page, launchData)
        }
      }),
    )
    return data
  } catch (error) {
    console.error(error)
  }
}

openWebPage()
