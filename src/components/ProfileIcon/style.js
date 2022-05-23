import styled from "styled-components";

const Icon = styled.img`
  opacity: ${({ selected }) => selected ? `1` : `0.6`};

  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:checked, &:focus {
    opacity: 1;
  }
`

const Floating = styled.button`
    animation-name: floating;
    animation-duration: ${({ time }) => time ? time : '5s'};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`

export { Icon, Floating }