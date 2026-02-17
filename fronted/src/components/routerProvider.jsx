import { Route, Routes } from "react-router-dom";
import TodoItems from "./TodoItems";
import Home from "./Home";
import PageNotFound from "./pageNotFound";

const RouterProvider = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoItems />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default RouterProvider;
