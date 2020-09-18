import React, { useState } from "react";
import { Container } from "semantic-ui-react";

import "./App.css";
import EventDashboard from "./components/events/event_dashboard/EventDashboard";
import Navbar from "./components/nav/Navbar";

const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <React.Fragment>
      <Navbar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </React.Fragment>
  );
};

export default App;
