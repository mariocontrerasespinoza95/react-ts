import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
    count: number;
    next?: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0126ad4c7b1b4973a710d24790416522',
    },
});

class APIClient<T> {
    constructor(private endpoint: string) {}

    getAll = async (config: AxiosRequestConfig) => {
        const res = await axiosInstance.get<FetchResponse<T>>(
            this.endpoint,
            config
        );

        return res.data;
    };
}

export default APIClient;
