import React from "react";
import "./_index.scss";
import cn from "classnames";
const SideBar = (props) => {
  const { handleLogout } = props;
  const { toggleMenu } = props;

  const classes = cn(
    "ui",
    "sidebar",
    "push",
    "left",
    "inverted",
    "menu",
    "animating",
    {
      visible: toggleMenu,
    }
  );

  return (
    <div className={classes}>
      <ul>
        <li
          className="item active link "
          style={{
            width: "260px",
            justifyContent: "center",
            marginTop: "10rem",
          }}
        >
          Home
        </li>
        <li
          className="item link"
          style={{
            width: "260px",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          Item 2
        </li>

        <li
          className="item link"
          style={{
            width: "260px",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          Item 3
        </li>
        <li
          className="item link"
          style={{
            width: "260px",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          Item 4
        </li>
        <li
          className="item link footer"
          onClick={handleLogout}
          style={{
            marginTop: "31.65rem",
            justifyContent: "center",
            fontSize: "large",
            borderTop: "0.1px solid grey",
          }}
        >
          <i
            class="fa fa-sign-out"
            style={{ marginRight: "12px" }}
            aria-hidden="true"
          />
          logout
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
