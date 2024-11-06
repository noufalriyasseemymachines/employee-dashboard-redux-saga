import createSagaMiddleware from 'redux-saga'
import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../Reducers/RootReducer';
import rootSaga from '../Saga/RootSaga';

const sagaMiddleWare=createSagaMiddleware()

const store=createStore(
    rootReducer,
    applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga)
export default store;