import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Reducers/UserSlice';
import ArticleSlice from './Reducers/ArticleSlice';
import AdminSlice from './Reducers/AdminSlice'

export default configureStore({
  reducer: {
    UserSlice,
    ArticleSlice,
    AdminSlice,
  },
});
