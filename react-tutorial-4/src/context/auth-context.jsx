import React, { useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: () => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    useEffect(() => {
        const isAuth = localStorage.getItem('isLoggedIn');

        if (isAuth === '1') {
            setIsLoggedIn(true);
        }

    }, [])

    const logoutHandler = () => {
        localStorage.clear('isLoggedIn')
        setIsLoggedIn(false)
    }
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true)
    }
    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
            {props.children}
        </AuthContext.Provider>
    )

}
export default AuthContext