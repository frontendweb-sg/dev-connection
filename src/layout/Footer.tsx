import { FC } from "react";
import Container from "../components/Container";
import classNames from "classnames";
import PropTypes from "prop-types";

export type FooterVariant = "fixed" | "absolute" | "global";
interface IProps extends React.HtmlHTMLAttributes<HTMLElement> {
  variant?: FooterVariant;
}

/**
 * Footer component
 * @returns
 */
const Footer: FC<IProps> = ({ className, variant, ...rest }) => {
  const classes = classNames("footer", variant, className);
  return (
    <footer className={classes} {...rest}>
      <Container className="text-center">
        &copy; {new Date().getFullYear()}, All rights reserved. Powered by{" "}
        <a href="https://frontendweb.in/">Frontendweb</a>
      </Container>
    </footer>
  );
};

Footer.defaultProps = {
  variant: "global",
};

Footer.propTypes = {
  variant: PropTypes.oneOf(["fixed", "absolute", "global"]),
};

export default Footer;
