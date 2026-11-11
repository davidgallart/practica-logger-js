import chalk from 'chalk'

export function info(msj) {
  console.log(chalk.blue('[INFO] ' + getDate() + ' ' + msj))
}
export function warn(msj) {
  console.log(chalk.yellow('[WARN] ' + getDate() + ' ' + msj))
}
export function error(msj) {
  console.log(chalk.red('[ERROR] ' + getDate() + ' ' + msj))
}
export function debug(msj) {
  console.log(chalk.gray('[DEBUG] ' + getDate() + ' ' + msj))
}
function getDate(locale) {
  return new Date().toLocaleString('es-ES')
}
