import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <h1>404 page not found</h1>
      <button onClick={handleNavigate}>return to home</button>
    </>
  );
};

export default PageNotFound;
