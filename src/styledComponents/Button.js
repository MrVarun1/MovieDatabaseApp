import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.backgroundColor || '#0275d8'};
  color: '#fff';
  padding: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`
export default Button
