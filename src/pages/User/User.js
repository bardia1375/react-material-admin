import React from "react";
import NewTransaction from "./newTransaction/newTransaction";

import NewUser from "./newUser/newUser";

function User() {
  return (
    <>
      <div className="User" style={{ display: "flex", flexDirection: "row" }}>
        <NewTransaction />
        <NewUser />
      </div>
    </>
  );
}

export default User;
