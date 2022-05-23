import styled from "styled-components";

const Button = styled.button`
	all: unset;
	color: red;

	cursor: pointer;
`
const BoardCharacter = styled.div`
	position: relative;
	left: -20px;
  background-color: rgba(0,0,0,0,8);
  padding: 0 20px;
  width: 465%;
`

const Text = styled.h1`
	font-size: 25px;
	font-weight: 300;
	text-align: center;
`

const Box = styled.div``

export { Text, Button, BoardCharacter, Box }