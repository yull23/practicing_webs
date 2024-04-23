import { Page } from 'puppeteer'
import { LaunchData } from '../types/types'
import { elementsPage } from '../services/elements'

export const foundLaunch = async (page: Page, launchData: LaunchData) => {
  try {
    await page.goto(launchData.linkWikipedia)
    const elements = await elementsPage(page)
    return {
      ...launchData,
      elements,
    }
  } catch (error) {
    console.error(error)
  }
}
