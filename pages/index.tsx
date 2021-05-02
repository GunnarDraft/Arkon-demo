import { Chart } from "../components/Tasker/Chart";
import { Base } from "../styles/Components";
import { CssBaseline } from "@material-ui/core";
import { Tasker } from "../components/Tasker/Tasker";

export default function Home() {
  return (
    <Base>
      <CssBaseline />
      <Tasker />
      <Chart />
    </Base>
  );
}
