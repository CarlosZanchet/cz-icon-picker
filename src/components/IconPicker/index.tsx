import { ChangeEventHandler, createElement, useState } from "react";
import { IconType } from "../../types/IconType";
import { iconFaList } from "../../utils/FaIconsList";
import Icon from "../Icon";
import {
  BtnSelecionar,
  ContainerIcons,
  Content,
  ContentFilter,
  ContentIconSelect,
  ContentLoading,
  FindIcon,
  IconSelect,
  Item,
  LabelItem,
} from "./styles";

interface IconPickerProps {
  onChange: (icon: string) => void;
}

const IconPicker = ({ onChange }: IconPickerProps) => {
  const [iconsFa, setIconsFa] = useState(iconFaList);
  const [loadingIcons, setLoadingIcons] = useState(false);
  const [iconSelected, setIconSelected] = useState<IconType>();
  
  let timer: NodeJS.Timeout;
  
  function handleChangeIcon() {
    if (iconSelected) {
      onChange(iconSelected?.label);
    }
  }

  function handleFindIcon(value: string) {
    setLoadingIcons(true);
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      const listFilterIcons = iconFaList.filter(
        (icon) => icon.label.toUpperCase().indexOf(value.toUpperCase()) > -1
      );
      setIconsFa(listFilterIcons);
      setLoadingIcons(false);
    }, 500);
    timer = newTimer;
  }



  return (
    <Content>
      <ContentFilter>
        <ContentIconSelect>
          {iconSelected && (
            <>
              <IconSelect>{createElement(iconSelected.icon)}</IconSelect>
              <BtnSelecionar onClick={handleChangeIcon}>
                Selecionar
              </BtnSelecionar>
            </>
          )}
        </ContentIconSelect>
        <FindIcon
          placeholder="Buscar Ícones"
          onChange={(event) => handleFindIcon(event.target.value)}
        />
      </ContentFilter>
      <ContainerIcons>
        {loadingIcons ? (
          <ContentLoading>
            <Icon icon="FaSyncAlt" size={2} />
          </ContentLoading>
        ) : (
          <>
            {iconsFa.map((icon) => (
              <Item key={icon.label} onClick={() => setIconSelected(icon)}>
                <span>{createElement(icon.icon)}</span>
                <LabelItem>{icon.label}</LabelItem>
              </Item>
            ))}
          </>
        )}
      </ContainerIcons>
    </Content>
  );
};

export default IconPicker;
