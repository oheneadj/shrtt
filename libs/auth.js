import Cookie from "js-cookie";

const API_URL = "http://localhost:3000";

export const register = async (name, email, password) => {
     try {
        let response = await fetch(`${API_URL}/api/users/register`, {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        response = await response.json();
        if (response) {
            Cookie.set("jwt", response.jwt);
        }
        return response 

    } catch (e) {
        return { error: 'An error occured' }
    }


};

export const login = async (identifier, password) => {
   try {
        let response = await fetch(`${API_URL}/api/users/register`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        response = await response.json();
        if (response) {
            Cookie.set("jwt", response.jwt);
        }
        return response
    } catch (e) {
        return { error: 'An error occured' }
    }


};

export const logout = () => {
    Cookie.remove("jwt");
};