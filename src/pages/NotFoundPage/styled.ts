import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export const NotFoundPageContainer = styled.div`
  width: 100%;
  height: 100vh;
`

export const NotFoundPageContent = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`

export const NotFoundPageText = styled.div`
  font-size: 36px;
  font-weight: 600;
  text-transform: capitalize;
`

export const GoHomeButton = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  position: relative;
  text-transform: capitalize;
  background: white;
  padding: 6px 14px;
  border-radius: 5px;
  border: 1px solid black;
  font-weight: 600;

  &:hover {
    background: black;
    color: white;
    border: 1px solid white;
  }
`
