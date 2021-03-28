import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();

  const onClickDetailA = () => history.push("/page1/detaileA");

  return (
    <div>
      <h1>page1ページです</h1>
      <Link to={{ pathname: "/page1/detaileA", state: arr }}>
        Page1DetaileA
      </Link>
      <br />
      <Link to="page1/detaileB">Page1DetaileB</Link>
      <br />
      <button onClick={onClickDetailA}>detaileA</button>
    </div>
  );
};
