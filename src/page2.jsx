import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>page2ページです</h1>
      <Link to="/page2/99">UrlParameter</Link>
      <br />
      <Link to="/page2/99?name=higehige">UrlParameter</Link>
    </div>
  );
};
