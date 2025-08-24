import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <>
      <h1>404 Mailbox Not Found</h1>
      <h3>You will be redirected to home shortly...</h3>
    </>
  );
};

export default PageNotFound;
