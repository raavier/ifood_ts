import React from "react";
import { RestaurantContextProvider } from "./restaurants";
import { UserContextProvider } from "./user";

const GlobalContext: React.FC = ({children}:any) => {
      return (
        <UserContextProvider><RestaurantContextProvider>{children}</RestaurantContextProvider></UserContextProvider>
    )
}
export default GlobalContext
