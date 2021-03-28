import { Page1 } from "../page1";
import { Page1DetaileA } from "../Page1DetaileA";
import { Page1DetaileB } from "../Page1DetaileB";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    chiledren: <Page1 />
  },
  {
    path: "/detaileA",
    exact: false,
    chiledren: <Page1DetaileA />
  },
  {
    path: "/detaileB",
    exact: false,
    chiledren: <Page1DetaileB />
  }
];
