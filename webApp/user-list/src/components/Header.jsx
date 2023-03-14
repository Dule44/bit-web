
import React from 'react'

 const Header = (props) => {
    return (
      <header className="container-fluid bg-danger py-2 fixed-top">
        <div className="container d-flex justify-content-between px-3">
          <h3 className="text-white">React Users</h3>
          <button
            onClick={props.buttonHandler}
            type="button"
            className="btn text-primary bg-light"
          >
            {props.islistView ? "User List" : "List Extra"}
          </button>
        </div>
      </header>
    );
  };

  export default Header;