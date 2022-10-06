import styled, { css } from "styled-components";

interface IconProps {
  size?: number;
  color?: string;
}

export const Content = styled.span<IconProps>`
  color: ${({ color }) => color && color};
  ${({ size }) => size ? css`
    font-size: ${size}rem;
  `
  : 
  css`
    font-size: 1rem;
  `};
`