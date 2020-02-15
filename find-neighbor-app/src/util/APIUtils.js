import { API_BASE_URL, POLL_LIST_SIZE, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    })

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)

        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};


export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function additionalInfo(additionalInfoRequest, username) {
    // const username = {value: additionalInfoRequest.userId};

    return request({

        url: API_BASE_URL + "/auth/signup/"+
            Object.values(username)
            +"/additionalInfo",
        method: 'POST',
        body: JSON.stringify(additionalInfoRequest)

    });
}

export function filterRequest(filterRequest, username) {
    // const username = {value: additionalInfoRequest.userId};

    return request({

        url: API_BASE_URL + "/auth/signup/"+
            Object.values(username)
            +"/filters",
        method: 'POST',
        body: JSON.stringify(filterRequest)

    });
}

export function addressRequest(addressRequest, username) {
    // const username = {value: additionalInfoRequest.userId};

    return request({

        url: API_BASE_URL + "/auth/signup/"+
            Object.values(username)
            +"/address",
        method: 'POST',
        body: JSON.stringify(addressRequest)

    });
}



export function checkUsernameAvailability(username) {
    return request({
        url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
        method: 'GET'
    });
}

export function checkEmailAvailability(email) {
    return request({
        url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
        method: 'GET'
    });
}


 export function filterUserListByAddress(username)

{
    console.log('xxxx', username)
     return request({
         url: API_BASE_URL + "/filters/byAddress?username=" + username,
         method: 'GET'
     });
 }


export function checkIfUserFilterExist(username) {
    return request({
        url: API_BASE_URL + "/user/checkFilters?username=" + username,
        method: 'GET'
    });
}



export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getUserProfile(username) {
    return request({
        url: API_BASE_URL + "/users/" + username,
        method: 'GET'
    });
}
