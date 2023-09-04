import { createAsyncThunk } from '@reduxjs/toolkit'
import { ICategories, IGetCategoriesList, ILists } from 'types/RequestTypes'

import { getCategoriesApi, getCategoriesListApi } from './api'

export const getCategories = createAsyncThunk<ICategories[], void, { rejectValue: string }>(
  'app/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(getCategoriesApi())

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await res.json()
      return data
    } catch (err) {
      return rejectWithValue('Error fetching categories')
    }
  }
)

export const getCategoriesList = createAsyncThunk<ILists[], IGetCategoriesList, { rejectValue: string }>(
  'app/getCategoriesList',
  async (props, { rejectWithValue }) => {
    try {
      const res = await fetch(getCategoriesListApi(props))

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await res.json()
      return data
    } catch (err) {
      return rejectWithValue('Error fetching category lists')
    }
  }
)
