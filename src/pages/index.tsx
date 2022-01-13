import { Route, Routes } from "react-router-dom";
import {
  HOME,
} from "./pagesPath";
import HomePage from "./UnAthPages/HomePage/HomePage";
import NotFound from "./UnAthPages/NotFound/NotFound";

const Pages = (): any => {
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Pages;
