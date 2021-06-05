import Login from "../../components/header/acount/Login";
import Resgister from "../../components/header/acount/Registration";
import TitlePage from "../../components/header/acount/TitlePage";

const viewLogin = () => {
  console.log("llegue");
  return (
    <div>
      <TitlePage />
      <div className="container padding-bottom-3x mb-2">
        <div className="row">
          <Login />
          <Resgister />
        </div>
      </div>
    </div>
  );
};

export default viewLogin;
