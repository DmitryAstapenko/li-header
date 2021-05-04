import * as React from "react";

interface IElementIconProps {
  url: string;
}

const ElementIcon: React.FunctionComponent<IElementIconProps> = ({ url }) => {
  return <img src={url} alt="icon" />;
};

export default ElementIcon;
