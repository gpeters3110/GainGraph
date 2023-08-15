import { useState } from "react";

const storage = localStorage;
export default function useToken() {
    const [token, setToken] = useState<string | null>(loadToken());

    function storeToken(token: string | null) {
        setToken(token);
        if (token)
            storage.setItem('token', token);
        else
            storage.removeItem('token');
    }
    function loadToken(): string | null {
        return storage.getItem('token');
    }
    return {
        token,
        setToken: storeToken
    }
}