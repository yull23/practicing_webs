import { Page } from 'puppeteer'
import { LaunchData } from '../types/types'

export const foundLaunch = async (page: Page, launchData: LaunchData) => {
  try {
    await page.goto(launchData.linkWikipedia)
    const elements = await page.evaluate(() => {
      const title = document.querySelector('h1')?.textContent
      const paragraphArray = Array.from(document.querySelectorAll('p'))
      const paragraphTexts = paragraphArray.map(
        (paragraph) => paragraph.textContent,
      )
      const content = paragraphTexts.filter(
        (paragraph) => paragraph !== '\n\n' && paragraph !== '\n',
      )[0]

      const imgLink = document
        .querySelector('a.mw-file-description img')
        ?.getAttribute('src')

      return {
        title,
        imgLink,
        content,
      }
    })
    return {
      ...launchData,
      elements,
    }
  } catch (error) {
    console.error(error)
  }
}
