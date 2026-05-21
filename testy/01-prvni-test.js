import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {
    vus: 10,
    duration: '30s',
}

export default function () {
    const response = http.get('https://jsonplaceholder.typicode.com/posts')
    check(response, {
        'status is 200': (r) => r.status === 200,
        'obsahuje v response data': (r) => r.body.length > 0,
    })
    sleep(1)
}