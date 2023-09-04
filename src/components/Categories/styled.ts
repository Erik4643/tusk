import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export const CategoriesContainer = styled.div`
  width: 200px;
  height: 100vh;
  background: silver;
  position: absolute;
  overflow-y: auto;
`

export const CategoriesTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  padding: 10px 5px;
  text-transform: capitalize;
`

export const CategoriesContent = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Link = styled(NavLink)<{ active: boolean }>`
  text-decoration: none;
  position: relative;
  text-transform: capitalize;
  color: ${({ active }) => (active ? 'black' : 'white')};
  font-weight: ${({ active }) => (active ? 500 : 400)};
  font-size: ${({ active }) => (active ? '18px' : '16px')};

  &:hover{
    color: black;
    font-weight: 500;
  }
`

export const ClearLink = styled(NavLink)<{ active?: boolean }>`
  font-size: 18px;
  white-space: nowrap;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  text-transform: capitalize;
  color: black;
  cursor: pointer;
  
  &:hover{
    text-decoration: underline;
  }
`

export const SelectInputContainer = styled.div`
  margin-top: 20px;
`

export const SelectInputTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`
