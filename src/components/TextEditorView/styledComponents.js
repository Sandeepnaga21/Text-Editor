import styled from 'styled-components'

export const TxContainer = styled.div`
  background-color: #25262c;
  height: 120vh;
  background-size: cover;
  font-family: 'Roboto';
`

export const TContainer = styled.div`
  display: flex;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #1b1c22;
  margin: 40px;
  border-radius: 20px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  text-align: center;
`

export const TxImg = styled.img`
  height: auto;
  width: auto;
  margin: 20px;
`

export const IContainer = styled.div`
  background-color: #334155;
  margin: 40px;
  border-radius: 20px;
  height: auto;
  width: 30vw;
`

export const Icons = styled.ul`
  display: flex;
  margin: 10px;
  list-style-type: none;
`

export const BButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isBoldClicked ? '#faff00' : '#f1f5f9')};
  font-size: 15px;
  border: 0px;
`
export const IButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isItalicClicked ? '#faff00' : '#f1f5f9')};
  font-size: 15px;
  border: 0px;
`

export const UButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isUnderlineClicked ? '#faff00' : '#f1f5f9')};
  font-size: 15px;
  border: 0px;
`

export const Editor = styled.textarea`
  margin: 20px;
  height: 500px;
  width: 370px;
  background-color: #334155;
  color: #ffffff;
  font-size: 20px;
  font-weight: ${props => (props.isBoldClicked ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalicClicked ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isUnderlineClicked ? 'underline' : 'normal'};
`
