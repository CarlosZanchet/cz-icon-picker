import { ChangeEventHandler, createElement, useState } from "react";
import { IconType } from "../../types/IconType";
import { iconFaList } from "../../utils/FaIconsList";
import {
  BtnSelecionar,
  ContainerIcons,
  Content,
  ContentFilter,
  ContentIconSelect,
  FindIcon,
  Icon,
  IconSelect,
  Item,
  LabelItem,
} from "./styles";

interface IconPickerProps {
    onChange: (icon: string) => void;
}

const IconPicker = ({ onChange }: IconPickerProps) => {
  const [iconsFa, setIconsFa] = useState(iconFaList);
  const [iconSelected, setIconSelected] = useState<IconType>();

  function handleFindIcon(value: string) {
    const listFilterIcons = iconFaList.filter(
      (icon) => icon.label.toUpperCase().indexOf(value.toUpperCase()) > -1
    );
    setIconsFa(listFilterIcons);
  }

  function handleChangeIcon() {
    if(iconSelected) {
      onChange(iconSelected?.label)
    }
  }

  return (
    <Content>
      <ContentFilter>
        <ContentIconSelect>
          {iconSelected && (
            <>
              <IconSelect>{createElement(iconSelected.icon)}</IconSelect>
              <BtnSelecionar onClick={handleChangeIcon}>Selecionar</BtnSelecionar>
            </>
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
    </Content>
  );
};

export default IconPicker;
