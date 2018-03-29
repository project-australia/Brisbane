export const throwResponseBody = err => {
  if (err.response) {
    const { status, data } = err.response
    throw new Error(data.userMessage, status)
  }

  throw err
}
