import { Page } from 'puppeteer'

export const foundLaunch = async (page: Page) => {
  const elements = await page.evaluate(() => {
    const title = document.querySelector('h1')?.textContent
    const paragraph = document.querySelector('p')?.textContent
    const imgLink = document
      .querySelector('a.mw-file-description img')
      ?.getAttribute('src')
    console.log(imgLink)
    return {
      title,
      paragraph,
      imgLink,
    }
  })
  console.log(elements)
  return elements
}
