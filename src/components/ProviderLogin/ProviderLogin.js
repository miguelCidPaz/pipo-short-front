import { createContext, useState } from 'react';

export const UserContext = createContext(false)

export const ProviderLogin = ({ children }) => {
    const [username, setUsername] = useState(undefined)
    const value = {
        username,
        connectSession: (username) => {
            setUsername(username)
        }
    }
    
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}