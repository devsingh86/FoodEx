import { createContext } from "react";

const userContext = createContext({
  user: { username: "Dev", email: "test@test.com" },
});

userContext.displayName = "UserContext";

export default userContext;
