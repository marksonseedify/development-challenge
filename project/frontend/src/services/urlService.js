import axios from 'axios';
import { backendApi } from './url';

const instance = axios.create({
    baseURL: backendApi,
});

export const getAllElements = async (page = 0) => {
    try {
        const { data } = await instance.get(`/getAllElements?page=${page}`);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const shortenUrl = async (url) => {
    try {
        const { data } = await instance.post('/shorten', { originalUrl: url });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getOriginalUrl = async (id) => {
    try {
        const { data } = await instance.get(`/${id}`);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};