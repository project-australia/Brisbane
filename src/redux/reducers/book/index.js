import { BOOK_INITIAL_STATE } from './constants'
import { updateFeatured, updateRecentlyAdded } from './handlers'
import {
  UPDATE_FEATURED_BOOKS,
  UPDATE_RECENTLY_ADDED_BOOKS
} from '../../types/bookTypes'

export const actionHandlers = {
  [UPDATE_FEATURED_BOOKS]: updateFeatured,
  [UPDATE_RECENTLY_ADDED_BOOKS]: updateRecentlyAdded
}

export const bookReducerConfig = {
  initialState: BOOK_INITIAL_STATE,
  actionHandlers: actionHandlers
}
