import { Chart } from "../components/Tasker/Chart";
import { Timer } from "../components/Tasker/Timer";
import { Base } from "../styles/Components";
import { CssBaseline } from "@material-ui/core";
import { Tasker } from "../components/Tasker/Tasker";

export default function Home() {
  return (
    <Base>
      <CssBaseline />
      <Timer />
      <Tasker />
      <Chart />
    </Base>
  );
}
