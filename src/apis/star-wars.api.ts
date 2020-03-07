import axios from "axios";

const baseURL = "https://star-wars-api-22303.herokuapp.com/";

export const getFilms = async () => {
    return axios.request(
        {
            baseURL,
            url: 'films'
        }
    )
}

export const getFilmsById = async (id: number) => {
    return axios.request({
        baseURL,
        url: `films/${id}`
    })
}