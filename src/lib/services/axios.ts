import axios from "axios";

const request = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

const get = async (url: string) => {
    try {
        const res = await request.get(url);
        
        if (res.status === 200)
            return res.data

        console.error(res);
        throw new Error();
    } catch (error) {
        console.error(error);
    }

}

export const { all } = axios

export {
    request,
    get
};