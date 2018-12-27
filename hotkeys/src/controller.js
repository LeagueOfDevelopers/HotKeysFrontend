const url = 'http://localhost:3000'

export const logUser = (value) => {

    return fetch(url + "/login", {
        method: "POST",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }),
        body: JSON.stringify({
            "login": value
        }),
    })
        .then(res => res.json())
}

export const getTasks = () => {
    return fetch(url + "/tasks", {
        method: 'GET',
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    })
        .then(res => res.json())
        .catch(() => [])
}

export const checkAnswer = (key) => {
    return fetch(url + "/check", {
        method: "POST",
        credentials: "include",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }),
        body: JSON.stringify({
            value: key
        })
    })
        .then(res => res.json())
        .catch(() => [])
}