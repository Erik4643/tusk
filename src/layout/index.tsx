import { Outlet } from 'react-router-dom'

import { CategoriesContainer } from 'components'

import * as S from './styled'

export const Layout = () => (
  <>
    <CategoriesContainer />
    <S.LayoutContent>
      <Outlet />
    </S.LayoutContent>
  </>
)
