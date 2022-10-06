import { ChangeEventHandler, createElement, useState } from "react";
import { IconType } from "../../types/IconType";
import { iconFaList } from "../../utils/FaIconsList";
import {
  ContainerIcons,
  ContentFilter,
  ContentIconSelect,
  FindIcon,
  Icon,
  IconSelect,
  Item,
  LabelItem,
} from "./styles";

const IconPicker = () => {
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
      <ContentFilter>
        <ContentIconSelect>
          {iconSelected && (
            <IconSelect>{createElement(iconSelected.icon)}</IconSelect>
          )}
        </ContentIconSelect>
        <FindIcon
          placeholder="Buscar Ícones"
          onChange={(event) => handleFindIcon(event.target.value)}
        />
      </ContentFilter>
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
};

export default IconPicker;
