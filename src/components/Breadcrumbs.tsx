import { useLocation } from "react-router-dom";

/**
 * Breadcrumbs component
 * @returns
 */
const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const routes = pathname.split("/").filter((item) => item);

  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      <ol>
        {routes.map((route) => (
          <li className="breadcrumb-item">
            <a href="Link">{route}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
