import React from "react";
import EventListItem from "./EventListItem";

const EventList = ({ events, selectEvent }) => {
  const renderList =
    events &&
    events.map((event) => {
      return (
        <EventListItem key={event.id} event={event} selectEvent={selectEvent} />
      );
    });
  return <React.Fragment>{renderList}</React.Fragment>;
};

export default EventList;
