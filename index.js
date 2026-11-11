import chalk from 'chalk'
import fs from 'node:fs'

export function info(msj) {
  let text = '[INFO] ' + getDate() + ' ' + msj
  console.log(chalk.blue(text))
  createFile(text)
}
export function warn(msj) {
  let text = '[WARN] ' + getDate() + ' ' + msj
  console.log(chalk.yellow(text))
  createFile(text)
}
export function error(msj) {
  let text = '[ERROR] ' + getDate() + ' ' + msj
  console.log(chalk.red(text))
  createFile(text)
}
export function debug(msj) {
  let text = '[DEBUG] ' + getDate() + ' ' + msj
  console.log(chalk.gray(text))
  createFile(text)
}
function getDate(locale) {
  return new Date().toLocaleString('es-ES')
}

function createFile(text) {
  const document = 'informe.txt'
  try {
    if (fs.openSync(document)) {
      fs.appendFileSync(document, text + '\n')
      return text
    }
  } catch (error) {
    fs.writeFileSync(document, 'Informe del Sistema')
  }
}
