import { Page } from 'puppeteer'
import { LaunchData } from '../types/types'

export const foundLaunch = async (page: Page, launchData: LaunchData) => {
  await page.goto(launchData.linkWikipedia)
  const elements = await page.evaluate(() => {
    const title = document.querySelector('h1')?.textContent
    const paragraph = document.querySelector('p')?.textContent
    const imgLink = document
      .querySelector('a.mw-file-description img')
      ?.getAttribute('src')
    return {
      title,
      paragraph,
      imgLink,
    }
  })
  return elements
}
