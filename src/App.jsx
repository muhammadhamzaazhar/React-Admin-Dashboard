import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, Outlet } from "react-router-dom";

import { ColorModeContext, useMode } from "./theme";
import TopBar from "./components/topbar/topbar.component";
import SideBar from "./components/sidebar/sidebar.component";
import Dashboard from "./pages/dashboard/dashboard.page";
import Team from "./pages/team/team.page";
import Contacts from "./pages/contacts/contacts.page";
import Invoices from "./pages/invoices/invoices.page";
import ProfileForm from "./pages/form/form.page";
import Calendar from "./pages/calendar/calendar.page";
import FAQ from "./pages/faq/faq.page";
import Bar from "./pages/bar/bar.page";
import Pie from "./pages/pie/pie.page";
import Line from "./pages/line/line.page";
import Geography from "./pages/geography/geography.page";
import ErrorPage from "./pages/error/error.page";

const MainLayout = () => {
  return (
    <div className="app">
      <SideBar />
      <main className="content">
        <TopBar />
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<ProfileForm />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/calendar" element={<Calendar />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
