import { combineReducers } from 'redux';

import surveyReducer from './surveyReducer/reducer';
import resuableListReducer from './resuableListReducer/reducer';

const rootReducer = combineReducers({
  surveyReducer: surveyReducer,
  resuableListReducer: resuableListReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
