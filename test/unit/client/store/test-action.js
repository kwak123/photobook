/**
 * Modeled off of the Vue docs available here https://vuex.vuejs.org/en/testing.html
 */

import photobookApi from '@/api/photobook';

// Hold original functions for restoring

const oldFetchUser = photobookApi.fetchUser;
const oldFetchPhotoList = photobookApi.fetchPhotoList;
const oldPostPhotoUpdate = photobookApi.postPhotoUpdate;

// Mock out API functions

/**
 * Initiates Promise to replace api calls, simulating success based on resolves prop.
 * VSCode does not yet support this style of documentation.
 * @param {Object}  options - options object.
 * @param {boolean} options.resolves - whether the Promise resolves or not.
 * @param {*} options.success - Payload for resolved Promise.
 * @param {*} options.error - Payload for rejected Promise.
 */
const mock = ({ resolves, success, error }) => new Promise((resolve, reject) => {
  if (resolves) {
    setTimeout(() => resolve(success), 100);
  } else {
    setTimeout(() => reject(error), 100);
  }
});

/**
 * Stub out API functions with Promises that resolve with mock data.
 * Will resolve by default
 * @param {boolean} pass true if you want to pass, false if you want to catch
 */
const mockOutApi = (resolves = true) => {
  const error = { message: 'Mock error message' };
  photobookApi.fetchUser = () => mock({
    resolves,
    error,
    success: { /* Mock user data */ },
  });

  photobookApi.fetchPhotoList = () => mock({
    resolves,
    error,
    success: [/* Mock photo list */],
  });

  photobookApi.postPhotoUpdate = payload => mock({
    resolves,
    error,
    success: payload,
  });
};

// Restore API functions
const restoreApi = () => {
  photobookApi.fetchUser = oldFetchUser;
  photobookApi.fetchPhotoList = oldFetchPhotoList;
  photobookApi.postPhotoUpdate = oldPostPhotoUpdate;
};

/**
 * Helper method for mocking out photobook API and running an action, will return the promise that
 * resolves/rejects from action
 * @param {function} action promise action for testing
 * @param {*} actionPayload associated payload for action
 * @param {object} state state for action, will use {} as default
 * @param {array} expectedMutations list of desired mutations
 * @param {boolean} resolves whether the promise should resolve or reject
 */
export default (action, actionPayload, state = {}, expectedMutations, resolves = true) => {
  let count = 0;

  const commit = (type, payload) => {
    const mutation = expectedMutations[count];

    expect(mutation.type).toEqual(type);

    if (payload) {
      expect(mutation.payload).toEqual(payload);
    }

    count += 1;
  };

  mockOutApi(resolves);
  return action({ commit, state }, actionPayload)
    .then(() => restoreApi());
};
