import { toast } from 'react-toastify'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAppSliceInitialState, ILists } from 'types/RequestTypes'
import { isError } from 'utils/helpers'

import { getCategories, getCategoriesList } from './actions'

const initialState: IAppSliceInitialState = {
  categories: [],
  lists: [],
  infinityLists: [],
  loading: false,
  error: null,
  limit: '10'
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<string>) => {
      state.limit = action.payload
    },
    setInfinityLists: (state, action: PayloadAction<ILists[]>) => {
      state.infinityLists = action.payload
    },
    clearAllData: (state) => {
      state.lists = []
      state.infinityLists = []
      state.loading = false
      state.error = null
      state.limit = '10'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload
        state.loading = false
      })
      .addCase(getCategoriesList.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getCategoriesList.fulfilled, (state, action) => {
        state.lists = action.payload
        state.loading = false
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload
        state.loading = false
        toast.error(action.payload)
      })
  }
})

export const { setLimit, setInfinityLists, clearAllData } = appSlice.actions

export const appReducer = appSlice.reducer
