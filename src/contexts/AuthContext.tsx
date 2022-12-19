import { User } from "@firebase/auth";
import { createContext, useContext, useState } from "react"

export const LoginAuthContext = createContext('');

export const LoginAuthContextProvider = ({children, value}) => {
    // const [user, setUser] = useState<User>({} as User);
    return(    
        <LoginAuthContext.Provider value={value}>
            {children}
        </LoginAuthContext.Provider>
    )
}

export function useAuthValue(){
    return useContext(LoginAuthContext);
}