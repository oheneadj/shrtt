import {createContext, useState} from "react";

const UserContext = createContext();

export function UserProvider({children}){
    //User details 
    const [user, setUser] = useState([]);
    const [authorized, setAuthorized] = useState("");

    const isLoggedIn = ({id, name, email}) =>{
        setUser({id, name, email});
        setAuthorized("true")
    }

    return(
    <UserContext.Provider value = {{user, authorized, isLoggedIn}}>{children}</UserContext.Provider>
    )
    
}

export default UserContext;