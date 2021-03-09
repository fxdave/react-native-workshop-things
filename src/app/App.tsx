import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { countSelector, increment } from "./slice";

interface ButtonProps {
    onClick: () => void;
}

export const Button = ({ onClick }: ButtonProps) => (
  <button onClick={() => onClick()}> +1 </button>
);

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector<RootState>(countSelector);

  return (
    <div>
      <div>count: {count}</div>
      <Button onClick={() => dispatch(increment())} />
    </div>
  );
}
