import { User } from './../../shared/types/soundCloud';
import { fetchUserProfilesSucessAction, FetchUserProfilesThunkAction } from './../../shared/types/actions';
import { FETCH_USER_PROFILES_SUCCESS } from './../../constants/ActionTypes';
import { getUserById } from "../../services/user";

export function fetchUserProfilesSucess(id: string, profile: User): fetchUserProfilesSucessAction {
  return {
    type: FETCH_USER_PROFILES_SUCCESS,
    id,
    profile,
  }
}

export function fetchUserProfiles(userId: string): FetchUserProfilesThunkAction {
  return async (dispatch) => {
    try {
      const result = await getUserById(userId);
      dispatch(fetchUserProfilesSucess(userId, result))
    } catch (error) {
      console.log(error);
    }
  }
}