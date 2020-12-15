import * as types from "./constants"
export const registration_post_restauth_registration_create = data => ({
  type: types.REGISTRATION_POST_RESTAUTH_REGISTRATION_CREATE,
  data
})

export const registration_post_restauth_registration_createSucceeded = (
  response,
  starter
) => ({
  type: types.REGISTRATION_POST_RESTAUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})

export const registration_post_restauth_registration_createFailed = (
  error,
  starter
) => ({
  type: types.REGISTRATION_POST_RESTAUTH_REGISTRATION_CREATE_FAILED,
  error,
  starter
})
