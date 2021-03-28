import { useLocation, useHistory } from "react-router-dom";

export const Page1DetaileA = () => {
  const { state } = useLocation();
  console.log(state);

  const History = useHistory();

  const onClickBack = () => {
    History.goBack();
  };

  return (
    <div>
      <h1>Page1DetaileAです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
