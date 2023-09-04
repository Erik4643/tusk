import styled from 'styled-components/macro'

export const ListsContainer = styled.div`
  height: 100%;
  overflow-y: auto;
`

export const ListsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-block: 10px;
  gap: 10px;
`

export const LoadingContainer = styled.div`
  width: max-content;
  margin: 30px auto;
`

export const ImageContainer = styled.div``

export const Image = styled.img``

export const GetNewDataButton = styled.div`
  position: fixed;
  color: black;
  font-weight: 500;
  background-color: silver;
  bottom: 20px;
  left: 200px;
  z-index: 333;
  display: flex;
  align-items: center;
  transform-origin: bottom right;
  padding-inline: 12px;
  font-size: 14px;
  height: 32px;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  
  &:hover {
    font-size: 16px;
  }
`
