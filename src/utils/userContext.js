import { createContext } from "react";

const userContext = createContext({
  loggedUser: "default user",
});

export default userContext;
