import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDetailedPage from "./components/events/event_detailed/EventDetailedPage";
import EventDashboard from "./components/events/event_dashboard/EventDashboard";
import EventForm from "./components/events/event_form/EventForm";
import HomePage from "./components/home/HomePage";
import Navbar from "./components/nav/Navbar";

// REMOVE
// function handleSelectEvent(event) {
//   setSelectedEvent(event);
//   setFormOpen(true);
// }

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <React.Fragment>
            <Navbar />
            <Container className="main">
              <Switch>
                <Route path="/events" exact component={EventDashboard} />
                <Route path="/events/:id" exact component={EventDetailedPage} />
                <Route
                  path={["/create_event", "/manage/:id"]}
                  exact
                  component={EventForm}
                />
              </Switch>
            </Container>
          </React.Fragment>
        )}
      />
    </BrowserRouter>
  );
};

export default Routes;
