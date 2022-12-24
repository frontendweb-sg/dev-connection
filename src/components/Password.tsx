import { FC, useState } from "react";
import Box from "./Box";
import Icon from "./Icon";
import Input, { IInputProps } from "./Input";

/**
 * Password
 * @returns
 */
interface IPasswordProps extends IInputProps {}
const Password: FC<IPasswordProps> = ({ name, value, className, ...rest }) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Input
      type={visible ? "text" : "password"}
      name={name}
      value={value}
      className={className}
      {...rest}
    >
      <Box className="input-eye">
        <Icon
          icon={visible ? "eye" : "eye-slash"}
          onClick={() => setVisible((prev: boolean) => !prev)}
        />
      </Box>
    </Input>
  );
};

export default Password;
