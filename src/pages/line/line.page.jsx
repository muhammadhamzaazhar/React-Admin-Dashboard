import { Box } from "@mui/material";

import Header from "../../components/header/header.component";
import LineChart from "../../components/line-chart/line-chart.component";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
