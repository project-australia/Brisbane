const BASE_URL = 'https://project-australia.herokuapp.com/'

export const GET_BOOK_EVALUATION = isbn => `${BASE_URL}books/${isbn}/evaluation`
export const GET_BOOK_FEATURED = `${BASE_URL}books/featuredBooks`
export const GET_BOOK_RECENTLY_ADDED = `${BASE_URL}books/recentlyAddedBooks`
