import { createSelector } from 'reselect'

/* Private */

const me = (state, props) => state.me

/* Exports */

export const getMe = createSelector(
  [ me ],
  ( user ) => user
)
