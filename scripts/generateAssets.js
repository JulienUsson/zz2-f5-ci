import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import snakeCase from 'lodash/snakeCase'

function getPresentations() {
  return new Promise((resolve, reject) => {
    fs.readdir(
      path.join(__dirname, '..', 'content'),
      (errors, files) => {
        if (errors) {
          reject(errors)
        } else {
          resolve(files.filter(n => !n.includes('.md')).map(snakeCase))
        }
      }
    )
  })
}

async function generatePresentationPdf(browser, name) {
  const page = await browser.newPage()
  const gotoUrl = `http://localhost:3000/${name}/cours/?print-pdf#/`
  try {
    await page.goto(gotoUrl)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`${gotoUrl} unreachable`)
    process.exit(1)
  }
  await page.pdf({
    path: `${__dirname}/../static/pdf/cours/${name}.pdf`,
    printBackground: true,
    landscape: true,
    format: 'Letter',
  })
}

async function generateExercicePdf (browser, name) {
  const page = await browser.newPage()
  const gotoUrl = `http://localhost:3000/${name}/tp/`
  try {
    await page.goto(gotoUrl)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`${gotoUrl} unreachable`)
    process.exit(1)
  }

  const content = await page.content()
  if (content.includes('404 - Not Found')) {
    // eslint-disable-next-line no-console
    console.warn(`${name} has no exercices`)
    return
  }
  await page.pdf({
    path: `${__dirname}/../static/pdf/tp/${name}.pdf`,
    printBackground: false,
    landscape: false,
    format: 'A4',
  })
}

const main = async () => {
  const presentations = await getPresentations()
  const browser = await puppeteer.launch()
  for (const name of presentations) {
    await generatePresentationPdf(browser, name)
    await generateExercicePdf(browser, name)
  }
  await browser.close()
}

main()