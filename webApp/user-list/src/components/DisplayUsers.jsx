import React from "react";

import ListItem from "./ListItem";
import ListCard from "./ListCard";

const DisplayUsers = (props) => {
  return (
    <div className="container my-5 py-3">
      <div className={props.islistView ? "row g-4" : "row"}>
        {props.users.map((user) =>
          props.islistView ? (
            <ListCard user={user} key={user.login.uuid} />
          ) : (
            <ListItem user={user} key={user.login.uuid} />
          )
        )}
      </div>
    </div>
  );
};

export default DisplayUsers;
