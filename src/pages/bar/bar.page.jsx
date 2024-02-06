import { Box } from "@mui/material";

import Header from "../../components/header/header.component";
import BarChart from "../../components/bar-chart/bar-chart.component";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subTitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
