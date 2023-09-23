import { Header } from "./Header";
import { Outlet } from "react-router";
const SharedLayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default SharedLayOut;
