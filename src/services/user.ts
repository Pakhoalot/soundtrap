import { User, SCError, UserFilters } from './../shared/types/soundCloud';
import {
  CLIENT_ID,
  USER_URL,
  userSubresources
} from './../constants/ApiConstants';
import { $axios, constructUrlWithId } from '../utils/ApiUtil';
const camelize = require('camelize');

export function getUserById(userId: string): Promise<User> {
  return $axios
    .get(constructUrlWithId(USER_URL, userId), {
      params: {
        client_id: CLIENT_ID
      }
    })
    .then(response => {
      return camelize(response.data);
    });
}

export function getUserSubresource(
  args: {
    userId: string;
    resName: keyof (typeof userSubresources);
    resId?: string;
    filters?: UserFilters;
  }
) {
  const { userId, resName, resId, filters } = args;
  let fullUrl = constructUrlWithId(USER_URL, userId);
  if (resId) fullUrl += constructUrlWithId(userSubresources[resName], resId);
  else fullUrl += userSubresources[resName];
  return $axios
    .get(fullUrl, {
      params: {
        client_id: CLIENT_ID,
        ...filters
      }
    })
    .then(res => camelize(res.data));
}
