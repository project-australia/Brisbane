
export const capitalizeText = (text = '') => text.split(' ').map((text) => text.charAt(0).toUpperCase() + text.slice(1)).join(' ')
