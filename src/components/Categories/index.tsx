import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'hooks'
import { clearAllData } from 'store/app'
import { getCategories } from 'store/app/actions'
import { categoriesSelector, limitSelector } from 'store/app/selectors'

import { Categories } from './Categories'

export const CategoriesContainer = () => {
  const categories = useAppSelector(categoriesSelector)
  const limit = useAppSelector(limitSelector)

  const dispatch = useAppDispatch()
  const { id } = useParams()

  const handleClearAllData = () => {
    dispatch(clearAllData())
  }

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <Categories
      handleClearAllData={handleClearAllData}
      limit={limit}
      categories={categories}
      selectId={id ? +id : null}
    />
  )
}
