import { Loading } from 'common'
import { ILists } from 'types/RequestTypes'
import { v1 as uuid } from 'uuid'

import * as S from './styled'

interface IListsProps {
    lists: ILists[],
    getNewDataHandler: () => void;
    isLoading: boolean
}

export const Lists = ({ lists, getNewDataHandler, isLoading }: IListsProps) => (
  <S.ListsContainer>
    <S.ListsContent>
      {lists.map(({ id, url }) => (
        <S.ImageContainer key={uuid()}>
          <S.Image src={url} alt={id} width="200px" height="200px" />
        </S.ImageContainer>
      ))}
    </S.ListsContent>

    {isLoading
      ? (
        <S.LoadingContainer>
          <Loading />
        </S.LoadingContainer>
      )
      : null}

    {/* I wanted to create a pagination but your API does not work correctly ( limit, page ) */}
    <S.GetNewDataButton onClick={getNewDataHandler}>
      Get new data
    </S.GetNewDataButton>
  </S.ListsContainer>
)
