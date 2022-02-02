import Aboutfund from "./pages/aboutfund/aboutfund";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/index/index";
import Application from "./pages/application/application";
import Donate from "./pages/donate/donate";
import Historyfund from "./pages/historyfund/historyfund";
import NotFound from "./pages/NotFound/NotFound";
import LegalEntities from "./pages/legal-entities/legal-entities";
import NeedHelp from "./pages/need-help/need-help";
import OfficalDoc from "./pages/official-doc/official-doc";
import OurTeam from "./pages/our-teams/our-teams";
import WantHelp from "./pages/wanthelp/wanthelp";
import Reports from "./pages/reports/reports";
import Team from "./pages/teams/teams";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutfund" element={<Aboutfund />} />
          <Route path="application" element={<Application />} />
          <Route path="donate" element={<Donate />} />
          <Route path="historyfund" element={<Historyfund />} />
          <Route path="legal-entities" element={<LegalEntities />} />
          <Route path="need-help" element={<NeedHelp />} />
          <Route path="offical-doc" element={<OfficalDoc />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="wanthelp" element={<WantHelp />} />
          <Route path="team" element={<Team />} />
          <Route path="reports" element={<Reports />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
