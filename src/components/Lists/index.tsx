
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'hooks'
import { setInfinityLists } from 'store/app'
import { getCategoriesList } from 'store/app/actions'
import {
  infinityListsSelector,
  limitSelector,
  listsSelector,
  loadingSelector
} from 'store/app/selectors'

import { Lists } from './Lists'

export const ListsPageContainer = () => {
  const lists = useAppSelector(listsSelector)
  const infinityLists = useAppSelector(infinityListsSelector)
  const isLoading = useAppSelector(loadingSelector)
  const limit = useAppSelector(limitSelector)

  const { id } = useParams()
  const [page, setPage] = useState(1)
  const dispatch = useAppDispatch()

  // TODO: I don't like this code either, but time is short
  const getNewDataHandler = () => {
    if (id) {
      const body = {
        limit: +limit,
        id: +id,
        page
      }
      setPage((prev) => prev + 1)
      dispatch(getCategoriesList(body))
    }
  }

  // TODO: I don't like this code either, but time is short
  useEffect(() => {
    setPage(1)
    if (id) {
      const body = {
        limit: +limit,
        id: +id,
        page: 1
      }
      setPage((prev) => prev + 1)
      dispatch(getCategoriesList(body))
      dispatch(setInfinityLists([]))
    }
  }, [id])

  useEffect(() => {
    dispatch(setInfinityLists([...infinityLists, ...lists]))
  }, [lists])

  return (
    <Lists
      isLoading={isLoading}
      getNewDataHandler={getNewDataHandler}
      lists={infinityLists}
    />
  )
}
