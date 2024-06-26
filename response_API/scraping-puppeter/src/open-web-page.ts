import puppeteer, { Page } from 'puppeteer'
import { readJson } from './services/read-json'
import { ReadFileData, Links } from './types/types'
import { elementsPage } from './services/elements'

export async function openWebPage() {
  const browser = await puppeteer.launch({
    headless: true,
  })

  const jsonData: ReadFileData = await readJson()
  // const newArray = jsonData.slice(96, 105)

  try {
    const data = await Promise.all(
      jsonData.map(async (launchData) => {
        const page = await browser.newPage()
        await page.setViewport({ width: 1600, height: 800 })
        try {
          const link =
            launchData.linkWikipedia ||
            'https://en.wikipedia.org/wiki/' + launchData.name
          await page.goto(link)
          const elements = await elementsPage(page)
          await page.close()

          return {
            ...launchData,
            elements,
          }
        } catch (error) {
          console.log(error)
        }
      }),
    )
    return data
  } catch (error) {
    console.error(error)
  }
}

openWebPage()
