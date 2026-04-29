import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>sidebar</div>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Layout;
