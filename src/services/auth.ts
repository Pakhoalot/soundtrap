const camelize = require('camelize');
const sc = require('soundcloud');
interface SCResponse {
  result: {[key: string]: any};
  error: string;
}

export function loginToSoundCloud(clientId: string){
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