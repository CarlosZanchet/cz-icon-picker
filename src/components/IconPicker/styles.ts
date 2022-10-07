import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ContentFilter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FindIcon = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid gray;
  padding: 0.5rem;
  font-size: 0.8rem;
  margin: 0.5rem 0rem;
  max-width: 70%;
  border-radius: 0;
  outline: none;
  color: #767676;
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
  grid-auto-columns: auto;
  grid-row: auto;
  gap: 4px;
  overflow-y: scroll;
  height: 31rem;
  overflow: auto;
  position: relative;
`;

export const Item = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 150px;
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

export const Icon = styled.span``;

export const LabelItem = styled.span`
  font-size: 0.8rem;
`;

export const ContentIconSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconSelect = styled.span`
  font-size: 4rem;
  margin-top: 1rem;
`;

export const BtnSelecionar = styled.button`
  background: #d5d5d5;
  color: #343434;
  border: 0;
  cursor: pointer;
  font-weight: bold;
  transition: filter 200ms;
  border-radius: 4px;
  padding: 0.2rem 0.5rem;

  :hover {
    filter: contrast(0.8);
  }
`;

