import React from "react";
import { useUser } from "../context/UserContext";

export default function HomeRoute() {
  const { user } = useUser();

  if (user) {
    return <div>User Logged In</div>;
  } else {
    return <div>No User</div>;
  }
}
