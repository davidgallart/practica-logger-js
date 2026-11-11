export function info(msj) {
  console.log('[INFO] ' + getDate() + ' ' + msj)
}
export function warn(msj) {
  console.log('[WARN] ' + getDate() + ' ' + msj)
}
export function error(msj) {
  console.log('[ERROR] ' + getDate() + ' ' + msj)
}
export function debug(msj) {
  console.log('[DEBUG] ' + getDate() + ' ' + msj)
}
function getDate(locale) {
  return new Date().toLocaleString('es-ES')
}
