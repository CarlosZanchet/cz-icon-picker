import { ChangeEventHandler, createElement, useState } from "react";
import { IconType } from "../../types/IconType";
import { iconFaList } from "../../utils/FaIconsList";
import Icon from "../Icon";
import {
  Blank,
  BtnSelecionar,
  ContainerIcons,
  Content,
  ContentFilter,
  ContentIconSelect,
  ContentLoading,
  Description,
  FindIcon,
  IconSelect,
  Item,
  LabelItem,
  Ops,
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
              <IconSelect>
                {createElement(iconSelected.icon)}{" "}
                <strong>{iconSelected.label}</strong>
              </IconSelect>
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
        {iconsFa.length <= 0 && (
          <Blank>
            <Icon icon="FaGhost" size={4} />
            <Ops>Ops, nada encontrado por aqui!</Ops>
            <Description>
              Verifique os filtro utilizados, ou utilize outras palavras chave.
            </Description>
          </Blank>
        )}
      </ContainerIcons>
    </Content>
  );
};

export default IconPicker;
