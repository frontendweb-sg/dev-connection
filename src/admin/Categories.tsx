import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { fetchCategory } from "../store/actions/category.action";
import { selectCategory } from "../store/reducers/category.reducer";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { categories, status } = useAppSelector(selectCategory);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategory());
    }
  }, [status, dispatch]);

  console.log("categories", categories);
  return <h1>Categories</h1>;
};

export default Categories;
