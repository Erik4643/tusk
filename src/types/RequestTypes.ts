
export interface ICategories {
    id: number,
    name: string
}

export interface ILists {
    id: string,
    url: string,
    width: number,
    height: number,
}

export interface IGetCategoriesList {
    limit: number,
    id?: number,
    page: number
}

export interface IAppSliceInitialState {
    categories: ICategories[],
    lists: ILists[],
    infinityLists: ILists[],
    loading: boolean,
    error: string | null,
    limit: string
}

export interface AppState {
    app: IAppSliceInitialState
}
