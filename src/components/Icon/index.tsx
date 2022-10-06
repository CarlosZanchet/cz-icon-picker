import { createElement } from "react";
import { IconType } from "../../types/IconType";
import { iconFaList } from "../../utils/FaIconsList";
import { Content } from "./style";

interface IconProps {
  icon: string;
  size?: number;
  color?: string;
}

export default function Icon({ icon, size, color }: IconProps) {

  function findIcon(): IconType {
    const iconSelected = iconFaList.find(i => i.label === icon)
    return iconSelected ? iconSelected : iconFaList[0]; 
  };

  return (
    <Content size={size} color={color}>
      {createElement(findIcon().icon)}
    </Content>
  )
}