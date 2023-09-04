import { IGetCategoriesList } from 'types/RequestTypes'

export const getCategoriesApi = () => 'https://api.thecatapi.com/v1/categories'

export const getCategoriesListApi = ({ limit, id, page }: IGetCategoriesList) => `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}${id ? `&category_ids=${id}` : null}`
