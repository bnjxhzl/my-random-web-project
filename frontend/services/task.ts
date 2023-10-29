import type { TaskAPI } from '@api/task'
import axios from 'restyped-axios'
import { getAuthHeader } from '@/services/helper/authorization.js'

const client = axios.create<TaskAPI>({ baseURL: 'http://localhost:3000/' })

export async function getTasks() {
    return (
        await client.request({
            method: 'GET',
            url: '/api/tasks',
            headers: getAuthHeader()
        })
    ).data
}

export async function postTask(name: string, done: boolean) {
    return (
        await client.request({
            method: 'POST',
            url: '/api/tasks',
            data: {
                name,
                done
            },
            headers: getAuthHeader()
        })
    ).data
}
