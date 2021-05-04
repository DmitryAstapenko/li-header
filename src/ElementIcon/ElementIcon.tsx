import * as React from "react";
import "./ElementIcon.scss";

interface IElementIconProps {
  url: string;
}

const ElementIcon: React.FunctionComponent<IElementIconProps> = ({
  url,
}: IElementIconProps) => {
  return (
    <div className="element-icon">
      <img src={url} alt="icon" />
    </div>
  );
};

export default ElementIcon;
