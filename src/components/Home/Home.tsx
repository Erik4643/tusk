import { Loading } from 'common'
import { ILists } from 'types/RequestTypes'
import { v1 as uuid } from 'uuid'

import * as S from './styled'

interface IHomeContainer {
    lists: ILists[],
    isLoading: boolean
}

export const Home = ({ lists, isLoading }: IHomeContainer) => (
  <S.HomePageContainer>
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
  </S.HomePageContainer>
)
