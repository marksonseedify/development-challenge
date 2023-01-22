import axios from 'axios';
import { backendApi } from './url';

const instance = axios.create({
    baseURL: backendApi,
});

export const shortenUrl = async (url) => {
    try {
        const { data } = await instance.post('/links/shorten', { originalUrl: url });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getOriginalUrl = async (id) => {
    try {
        const { data } = await instance.get(`/links/${id}`);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};