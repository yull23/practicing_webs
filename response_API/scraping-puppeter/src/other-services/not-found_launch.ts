import { Page } from 'puppeteer'
import { LaunchData } from '../types/types'
import { elementsPage } from '../services/elements'

export const notFoundLaunch = async (page: Page, launchData: LaunchData) => {
  try {
    await page.goto('https://en.wikipedia.org/wiki/' + launchData.name)

    // await page.evaluate((launchData) => {
    //   const input = document.getElementById(
    //     'searchInput',
    //   ) as HTMLInputElement | null

    //   const button = document.querySelector(
    //     '.cdx-search-input__end-button',
    //   ) as HTMLButtonElement | null
    //   if (input && button) {
    //     input.value = launchData.name
    //     button.click()
    //   }
    //   return document.URL
    // }, launchData)
    // const urlPage = page.url()
    // await page.goto(urlPage)

    const elements = await elementsPage(page)
    return {
      ...launchData,
      elements,
    }
  } catch (error) {
    console.log('Error 1')
    console.error(error)
  }
}
