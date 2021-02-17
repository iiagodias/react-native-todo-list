import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';
import { AuthUserSetData } from '../ducks/auth/actions';
import types from '../ducks/auth/types';

function* sendAuthRequest(action) {
  const response = yield call(
    api.post,
    '/user/login',
    JSON.stringify(action.payload),
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
  console.log(response);
  yield put(AuthUserSetData(response.data));
}

function* watchsendAuthRequest() {
  yield takeLatest(types.AUTH_USER_REQUEST, sendAuthRequest);
}

export default function* rootSaga() {
  yield all([watchsendAuthRequest()]);
}