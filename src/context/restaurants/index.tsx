import React, {createContext, useState} from "react"
import { noop } from "lodash";


type categoryType = {
    category:string;
}

type PropsCategoryContext = {
    state: categoryType,
    setState: React.Dispatch<React.SetStateAction<categoryType>>
}

const DEFAULT_VALUE = {
    state: {
        category:"Todos"
    },
    setState: noop
}


const RestaurantContext = createContext<PropsCategoryContext>(DEFAULT_VALUE)

const RestaurantContextProvider: React.FC = ({children}:any) => {
    const [state, setState] = useState(DEFAULT_VALUE.state)
    return (
        <RestaurantContext.Provider
            value={{
                state,
                setState
            }}
        >
            {children}

        </RestaurantContext.Provider>
    )
}
export {RestaurantContextProvider}
export default RestaurantContext
