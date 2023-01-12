import React, {createContext} from "react";
import { PropsWithChildren } from "react";

export interface AuthRoutesProps extends PropsWithChildren {}

export const AuthContext = createContext({});

export const AuthProvider: React.FunctionComponent<AuthRoutesProps> = ({ children }) => {
    return(
        <AuthContext.Provider value={{ signed: true }}>
            {children}
        </AuthContext.Provider>
    )
}