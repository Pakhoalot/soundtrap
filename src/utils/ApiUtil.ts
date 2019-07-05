import { API_HOSTNAME } from './../constants/ApiConstants';
import fetch from 'cross-fetch';
import axios from 'axios';
const camelize = require('camelize');

export const $axios = axios.create({
  baseURL: API_HOSTNAME,
  timeout: 10000,
});

export function callApi(url: string, options?: RequestInit): Promise<any> {
  return fetch(url, options)
    .then(
      response => (
        response.ok ? response.json() : Promise.reject(response.text())
      ),
      (error: string) => Promise.reject(error)
    )
    .then(
      result => ({ result: camelize(result), error: '' }),
      (error: string) => ({ result: {}, error })
    )
    .catch((error: string) => ({ result: {}, error }));
}

export function constructUrlWithId(url: string, id: string) {
  return url.replace(':id', id);
}
