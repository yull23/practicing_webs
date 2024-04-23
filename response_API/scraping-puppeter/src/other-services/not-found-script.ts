import { Page } from 'puppeteer'

export const notFoundScript = (nameLaunch: string, page: Page) => {
  const input = document.getElementById(
    'searchInput',
  ) as HTMLInputElement | null

  const button = document.querySelector(
    '.cdx-search-input__end-button',
  ) as HTMLButtonElement | null
  if (input && button) {
    input.value = nameLaunch
    button.click()
  }
}
