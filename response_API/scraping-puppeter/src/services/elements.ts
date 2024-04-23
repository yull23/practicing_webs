import { Page } from 'puppeteer'

export async function elementsPage(page: Page) {
  try {
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

    return elements
  } catch (error) {
    console.log('ERROR 0')
    console.error(error)
  }
}
