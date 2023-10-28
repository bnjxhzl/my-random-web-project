import type { AuthAPI } from '@api/auth.js'
import axios from 'restyped-axios'

const client = axios.create<AuthAPI>({ baseURL: 'http://localhost:3000/' })
export async function login(email: string, password: string) {
    return (
        await client.request({
            method: 'POST',
            url: '/api/auth/login',
            data: {
                email,
                password
            }
        })
    ).data
}

export async function register(email: string, username: string, password: string) {
    return (
        await client.request({
            method: 'POST',
            url: '/api/auth/register',
            data: {
                email,
                username,
                password
            }
        })
    ).data
}
