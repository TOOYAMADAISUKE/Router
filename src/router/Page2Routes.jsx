import { Page2 } from "../page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    chiledren: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    chiledren: <UrlParameter />
  }
];
