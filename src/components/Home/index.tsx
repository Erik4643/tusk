import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks'
import { getCategoriesList } from 'store/app/actions'
import { limitSelector, listsSelector, loadingSelector } from 'store/app/selectors'

import { Home } from './Home'

export const HomeContainer = () => {
  const lists = useAppSelector(listsSelector)
  const isLoading = useAppSelector(loadingSelector)
  const limit = useAppSelector(limitSelector)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const body = {
      limit: +limit,
      page: 1
    }
    dispatch(getCategoriesList(body))
  }, [])

  return (
    <Home
      isLoading={isLoading}
      lists={lists}
    />
  )
}
