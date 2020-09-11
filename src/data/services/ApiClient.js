import React from 'react';
import axios from 'axios';
import config from '../utils/Config';

export const apiClient = () => {

    const remote = axios.create({
        baseURL: config.base_url,
        timeout: config.timeout,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    remote.interceptors.response.use(
        (response) => {
            if (__DEV__) {
                console.log('apiClient response is : ', response);
            }
            return new Promise(async (resolve, reject) => {
                resolve(response.data);
            });
        },
        (err) => {
            if (__DEV__) {
                console.log('apiClient error is : ', err.response);
            }
            return new Promise(async (resolve, reject) => {
                resolve({error: true, type: 'error', title: err.response.data.Error});
            });
        },
    );

    return remote;
};

