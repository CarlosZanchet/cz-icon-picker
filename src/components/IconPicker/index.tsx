import { ChangeEventHandler, createElement, useState } from "react";
import { IconType } from "../../types/IconType";
import { iconFaList } from "../../utils/FaIconsList";
import {
  ContainerIcons,
  ContentIconSelect,
  FindIcon,
  Icon,
  IconSelect,
  Item,
  LabelItem,
} from "./styles";

export function IconPicker() {
  const [iconsFa, setIconsFa] = useState(iconFaList);
  const [iconSelected, setIconSelected] = useState<IconType>();

  function handleFindIcon(value: string) {
    const listFilterIcons = iconFaList.filter(
      (icon) => icon.label.toUpperCase().indexOf(value.toUpperCase()) > -1
    );
    setIconsFa(listFilterIcons);
  }

  return (
    <>
      <ContentIconSelect>
        {iconSelected && <IconSelect>{createElement(iconSelected.icon)}</IconSelect>}
      </ContentIconSelect>
      <FindIcon
        placeholder="Buscar Ícones"
        onChange={(event) => handleFindIcon(event.target.value)}
      />
      <ContainerIcons>
        {iconsFa.map((icon) => (
          <Item key={icon.label} onClick={() => setIconSelected(icon)}>
            <Icon>{createElement(icon.icon)}</Icon>
            <LabelItem>{icon.label}</LabelItem>
          </Item>
        ))}
      </ContainerIcons>
    </>
  );
}
