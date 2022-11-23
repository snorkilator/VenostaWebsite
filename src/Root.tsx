import { Outlet } from "react-router-dom";

import TopNav from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function Root() {
  return (
    <>
      <TopNav />
      <Outlet />
      <SiteFooter />
    </>
  );
}
