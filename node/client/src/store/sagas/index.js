import { put, call, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions/action-types';
import { todoAppAPI } from '../../utils';

export default function * root() {
  yield takeLatest(actions.GET_TODO_LIST, fetchTodoList);
};

function * fetchTodoList(action) {
  try {
    const { searchData } = action.payload;

    yield put({ type: actions.LOADING_TODO_LIST });

    const response = yield call(promiseWrapper, searchData);

    yield put({ type: actions.LOADED_TODO_LIST, payload: { ...response.data } });

  } catch (e) {
    yield put({type: actions.ERROR_GET_TODO_LIST });
  }
}

function * promiseWrapper(searchData) {
  const promise = yield new Promise((resolve, reject) => {
    todoAppAPI({}, searchData, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

  return promise;
}