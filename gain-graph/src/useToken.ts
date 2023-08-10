import { useState } from "react";

const storage = localStorage;

export default function useToken() {
    const [token, setToken] = useState<string | undefined>(loadToken());

    function storeToken(token: string) {
        setToken(token);
        storage.setItem('token', JSON.stringify(token));
    }
    function loadToken(): string | undefined {
        const tokenString = storage.getItem('token');
        if (tokenString) {
            return JSON.parse(tokenString).token;
        }
        return undefined;
    }
    return {
        token,
        setToken: storeToken
    }
}