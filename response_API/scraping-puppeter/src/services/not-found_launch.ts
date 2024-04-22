import { Page } from 'puppeteer'
import { LaunchData } from '../types/types'

export const notFoundLaunch = async (page: Page, launchData: LaunchData) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page')

  await page.evaluate(() => {
    const form = document.getElementById('searchForm')
    const input = document.getElementById(
      'searchInput',
    ) as HTMLInputElement | null
    input?.value = '23'

    const button = document.querySelector('.cdx-search-input__end-button')
    console.log(button)
  })
}
