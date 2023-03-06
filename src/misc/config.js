const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(querytring) {
    const response = await fetch(`${API_BASE_URL}'${querytring}`).then(r => r.json())
    return response;

}