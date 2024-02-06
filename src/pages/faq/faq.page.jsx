import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ExpandMore } from "@mui/icons-material";

import Header from "../../components/header/header.component";
import { tokens } from "../../theme";

const faqs = [
  {
    id: 1,
    title: "Why cannot I see the dashboard in my workspace?",
    desc: "Dashboards are not available for the customers with fiscal calendars.",
  },
  {
    id: 2,
    title: "Whom are dashboards shared with?",
    desc: "Dashboards are always visible to all workspace users. Any change you save is immediately visible to all workspace users.",
  },
  {
    id: 3,
    title: "Can I export dashboards to PDF?",
    desc: "Yes. You can export dashboards to PDF and schedule regular emails with the PDF attached. For details, see Export Dashboards and Schedule Automatic Emailing of Dashboards",
  },
  {
    id: 4,
    title: "Can I change the default date filter for a dashboard?",
    desc: "Editors, explorers, and administrators can change the default date filter to a different period. The new value applies to the whole dashboard for all viewers. Viewers can temporarily change the date filter. The new value also applies to the whole dashboard but visible only to the current viewer.",
  },
  {
    id: 5,
    title: "Can I schedule a status update email?",
    desc: "Yes. Dashboards support sending regular emails with either the whole dashboard and/or individual insights from the dashboard (see Schedule Automatic Emailing of Dashboards). For each KPI on a dashboard, you can also set up email alerts to be notified when the KPI value reaches a certain threshold (see Add an Alert to a KPI).",
  },
];

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />
      {faqs.map((faq) => (
        <Accordion defaultExpanded={false} key={faq.id}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            {
              <Typography color={colors.greenAccent[500]} variant="h5">
                {faq.title}
              </Typography>
            }
          </AccordionSummary>
          <AccordionDetails>
            {<Typography>{faq.desc}</Typography>}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
