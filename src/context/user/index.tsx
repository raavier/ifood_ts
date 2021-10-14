import React, {createContext, useState} from "react"
import { noop } from "lodash";

type UserType = {
    email:string;
    password: string
}

type PropsUserContext = {
    state: UserType,
    setState: React.Dispatch<React.SetStateAction<UserType>>
}

const DEFAULT_VALUE = {
    state: {
        email:"",
        password:""
    },
    setState: noop
}

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE)

const UserContextProvider: React.FC = ({children}:any) => {
    const [state, setState] = useState(DEFAULT_VALUE.state)
    return (
        <UserContext.Provider
            value={{
                state,
                setState
            }}
        >
            {children}

        </UserContext.Provider>
    )
}
export {UserContextProvider}
export default UserContext
