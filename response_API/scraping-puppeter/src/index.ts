// import puppeteer from 'puppeteer'
import puppeteer from 'puppeteer'
import { readJson } from './read-file'
import { ReadFileData } from './types'
import { foundLaunch } from './found-launch'
import { notFoundLaunch } from './not-found_launch'

async function openWebPage() {
  const jsonData: ReadFileData = await readJson()
  const browser = await puppeteer.launch({ headless: true })
  const newArray = jsonData.slice(0, 2)

  const data = await Promise.all(
    newArray.map(async (LaunchData) => {
      const page = await browser.newPage()
      try {
        await page.goto(LaunchData.linkWikipedia)
        return await foundLaunch(page)
      } catch (error) {
        return await notFoundLaunch(LaunchData)
      }
    }),
  )
  console.log(23)
  console.log(data)

  // await page.goto(jsonData[0].linkWikipedia)
}

openWebPage()
