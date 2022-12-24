import classNames from "classnames";
import { FC } from "react";
import Moment, { MomentProps } from "react-moment";

interface IDateProps extends MomentProps {
  format?: string;
}
const DateTime: FC<IDateProps> = ({ date, className, ...rest }) => {
  const classes = classNames("date", className);
  return <Moment className={classes} date={date} {...rest} />;
};

DateTime.defaultProps = {
  format: "YYYY/MM/DD",
};
export default DateTime;
