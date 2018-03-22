export const isNotEmpty = value => !!value
export const hasMinimumSizeOf = size => value => value && value.length >= size
export const isValidEmail = email => {
  const validEmailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return validEmailRegExp.test(String(email).toLowerCase())
}
