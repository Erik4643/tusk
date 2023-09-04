import { routes } from 'router/routes'

import * as S from './styled'

export const NotFoundPage = () => (
  <S.NotFoundPageContainer>
    <S.NotFoundPageContent>
      <S.NotFoundPageText>404</S.NotFoundPageText>
      <S.NotFoundPageText>page not found</S.NotFoundPageText>
      <S.GoHomeButton to={routes.home}>Go home</S.GoHomeButton>
    </S.NotFoundPageContent>
  </S.NotFoundPageContainer>
)
