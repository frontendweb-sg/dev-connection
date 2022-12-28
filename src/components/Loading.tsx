import Box from "./Box";

/**
 * Login component
 * @returns
 */
const Loading = () => {
  return (
    <Box className="loading">
      {/* <Logo to="/" /> */}
      <span className="loader"></span>
    </Box>
  );
};

export default Loading;
