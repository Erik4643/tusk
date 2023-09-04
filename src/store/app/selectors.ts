import { createSelector } from '@reduxjs/toolkit'
import { AppState } from 'types/RequestTypes'

export const appStateSelector = (state:AppState) => state.app

export const categoriesSelector = createSelector(
  appStateSelector,
  (state) => state.categories
)

export const listsSelector = createSelector(
  appStateSelector,
  (state) => state.lists
)

export const infinityListsSelector = createSelector(
  appStateSelector,
  (state) => state.infinityLists
)

export const limitSelector = createSelector(
  appStateSelector,
  (state) => state.limit
)

export const loadingSelector = createSelector(
  appStateSelector,
  (state) => state.loading
)

export const errorSelector = createSelector(
  appStateSelector,
  (state) => state.error
)
