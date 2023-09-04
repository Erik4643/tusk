
import { SelectInput } from 'common'
import { routes } from 'router/routes'
import { ICategories } from 'types/RequestTypes'
import { v1 as uuid } from 'uuid'

import * as S from './styled'

interface ICategoriesProps {
    handleClearAllData: () => void,
    categories: ICategories[]
    selectId: number | null,
    limit: string
}

export const Categories = ({
  categories,
  selectId,
  limit,
  handleClearAllData
}: ICategoriesProps) => (
  <S.CategoriesContainer>
    <S.CategoriesTitle>
      Categories
    </S.CategoriesTitle>

    <S.CategoriesContent>
      {categories.map(({ name, id }) => {
        const isActive = selectId === id

        return (
          <S.Link
            active={isActive}
            key={uuid()}
            to={`${routes.category}/${id}`}
          >
            {name}
          </S.Link>

        )
      })}

      <S.SelectInputContainer>
        <S.SelectInputTitle>
          Limit
        </S.SelectInputTitle>
        <SelectInput limit={limit} />
      </S.SelectInputContainer>

      <S.ClearLink
        key={uuid()}
        to={routes.home}
        onClick={handleClearAllData}
      >
        Clear
      </S.ClearLink>
    </S.CategoriesContent>
  </S.CategoriesContainer>
)
