import fetch from 'cross-fetch';
const camelize = require('camelize');
const sc = require('soundcloud');

interface SCResponse {
  result: {[key: string]: any};
  error: string;
}

export function callApi(url: string, options?: RequestInit): Promise<SCResponse> {
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

export function loginToSoundCloud(clientId: string): Promise<SCResponse> {
  sc.initialize({
    client_id: clientId,
    redirect_uri: `${window.location.protocol}//${window.location.host}/api/callback`
  })

  return sc.connect()
    .then(
      (result: JSON) => ({ result: camelize(result), error: '' }),
      (error: string) => ({ result: {}, error })
    )
    .catch((error: string) => ({ result: {}, error }))
}