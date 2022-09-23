export function match(str) {
  /* XXXXXXXX-YYYY-ZZZZ-WWWW-UUUUUUUUUUUU */
  return /^[0-9A-F]{8}(?:-[0-9A-F]{4}){3}-[0-9A-F]{12}$/i.test(str)
}
