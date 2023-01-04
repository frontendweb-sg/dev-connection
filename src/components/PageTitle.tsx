import { useMatch } from "react-router-dom";
import Box from "./Box";
import Typography from "./Typegraphy";

/**
 * Page title
 * @returns
 */
type PageProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};
const PageTitle = ({ children, ...rest }: PageProps) => {
  const route = useMatch();
  console.log("r", route);
  return (
    <Box {...rest}>
      <Typography variant="h5">{children}</Typography>
    </Box>
  );
};

export default PageTitle;
