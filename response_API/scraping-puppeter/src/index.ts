// import puppeteer from 'puppeteer'
import puppeteer from 'puppeteer'
import { readJson } from './read-file'
import { ReadFileData } from './types'

async function openWebPage() {
  const jsonData: ReadFileData = await readJson()
  const browser = await puppeteer.launch({ headless: true })
  const newArray = jsonData.slice(0, 2)

  const data = await Promise.all(
    jsonData.map(async (LaunchData) => {
      const page = await browser.newPage()
      try {
        await page.goto(LaunchData.linkWikipedia)
        const element = await page.evaluate(() => {
          return document.querySelector('h1')?.textContent
        })
        return element
      } catch (error) {
        return ' '
      }
    }),
  )
  console.log(23)
  console.log(data)

  // await page.goto(jsonData[0].linkWikipedia)
}

openWebPage()
