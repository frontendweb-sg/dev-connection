import { FC } from "react";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Icon component
 * @param param0
 * @returns
 */

export interface IProps extends FontAwesomeIconProps {}
const Icon: FC<IProps> = ({ icon, ...rest }) => {
  return <FontAwesomeIcon icon={icon} {...rest} />;
};

Icon.defaultProps = {
  icon: "home",
};

export default Icon;
