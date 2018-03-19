export const isNotEmpty = value => !!value
export const isValidEmail = email => !email
export const hasMinimumSizeOf = (size) => (value) => value && value.length >= size
export const isANumber = value => !isNaN(value)
export const isValidPhoneNumber = isNotEmpty
