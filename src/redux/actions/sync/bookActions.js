import {
  UPDATE_RECENTLY_ADDED_BOOKS,
  UPDATE_FEATURED_BOOKS
} from '../../types/bookTypes'

export const updateRecentlyAddedBooks = recent => ({
  type: UPDATE_RECENTLY_ADDED_BOOKS,
  recent
})

export const updateFeaturedBooks = featured => ({
  type: UPDATE_FEATURED_BOOKS,
  featured
})
