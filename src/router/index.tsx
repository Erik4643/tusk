import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'layout'
import { HomePage, ListsPage, NotFoundPage } from 'pages'
import { v1 as uuid } from 'uuid'

import { routes } from './routes'

export const Router = () => {
  const pages = [
    {
      path: routes.home,
      component: <HomePage />
    },
    {
      path: `${routes.category}/:id`,
      component: <ListsPage />
    }
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {pages.map(({ path, component }) => (
            <Route path={path} element={component} key={uuid()} />
          ))}
        </Route>
        <Route path={routes.notFound} element={<NotFoundPage />} key={uuid()} />
        <Route path="*" element={<NotFoundPage />} key={uuid()} />
      </Routes>
    </BrowserRouter>
  )
}
