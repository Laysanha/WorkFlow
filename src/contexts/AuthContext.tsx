import React, {createContext} from "react";
import { PropsWithChildren } from "react";
import { ReactNode } from "react";

export const AuthContext = createContext({});
export interface AuthRoutesProps extends PropsWithChildren {}

export const AuthProvider: React.FunctionComponent<AuthRoutesProps> = ({ children }) => {
    return(
        <AuthContext.Provider value={{ signed: true }}>
            {children}
        </AuthContext.Provider>
    )
}