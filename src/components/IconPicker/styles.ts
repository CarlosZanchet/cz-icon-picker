import styled from "styled-components";

export const Content = styled.input`
  display: flex;
`

export const FindIcon = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid gray;
  padding: 0.5rem;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`

export const ContainerIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row: auto;
  gap: 4px;
`;

export const Item = styled.div`
  padding: 1rem;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transition: color 200ms;
  color: #767676;
  cursor: pointer;

  :hover {
    border: 1px solid #d5d5d5;
    color: #2a2a2a;
  }
`;

export const Icon = styled.span`
`;

export const LabelItem = styled.span`
  font-size: 0.8rem;
`;

export const ContentIconSelect = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconSelect = styled.span`
  font-size: 4rem;
`