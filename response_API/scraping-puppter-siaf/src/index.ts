import puppeteer from 'puppeteer'

async function openWebPage({
  expSiaf,
  codeEjec,
}: {
  expSiaf: string
  codeEjec: string
}) {
  const link =
    'https://apps2.mef.gob.pe/consulta-vfp-webapp/consultaExpediente.jspx'
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto(link)

  const result = await page.evaluate(
    (expSiafValue: string, codeEjecValue: string) => {
      const inputCode = document.querySelector('#secEjec') as HTMLInputElement
      const expSiafInput = document.querySelector(
        '#expediente',
      ) as HTMLInputElement
      console.log(1)
      inputCode.value = codeEjecValue
      expSiafInput.value = expSiafValue
      return [inputCode?.innerHTML, expSiafInput?.innerHTML]
    },
    expSiaf,
    codeEjec,
  )

  console.log(result)
  console.log(23)
}
const data = {
  codeEjec: '301354',
  expSiaf: '736',
}
openWebPage(data)
