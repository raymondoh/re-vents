import React from "react";
import EventListItem from "./EventListItem";

const EventList = ({ events, selectEvent, deleteEvent }) => {
  const renderList =
    events &&
    events.map((event) => {
      return (
        <EventListItem
          key={event.id}
          event={event}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      );
    });
  return <React.Fragment>{renderList}</React.Fragment>;
};

export default EventList;
