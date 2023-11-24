import { createSlice } from '@reduxjs/toolkit';
import { AdminJobData } from '../../Components/AdminPanal/AdminJobs/AdminJobData';
import { AdminUserData } from '../../Components/AdminPanal/AdminUsers/AdminUserData';
import { DummyArticlesData } from '../../Components/Home/DummyArticlesData'
import { AdminCoursesData } from '../../Components/AdminPanal/AdminCourses/AdminCoursesData';
// import {AdminCoursesData} from '../../com'


export const AdminSlice = createSlice({

  name: 'admin',
  initialState: {
    jobs: AdminJobData,
    titleSideBar: 'Users',
    selectedContent: '',
    //  ------------
    users: AdminUserData,
    // ---------------
    articles: DummyArticlesData,
    // ----------------
    courses: AdminCoursesData,
  },
  reducers: {
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter((_, index) => index !== action.payload);
    },
    toggleJobStatus(state, action) {
      const { index } = action.payload;
      state.jobs[index].status = state.jobs[index].status === 'Open' ? 'Close' : 'Open';
    },
    settitleSideBar: (state, action) => {
      state.titleSideBar = action.payload;
    },
    setselectedContent: (state, action) => {
      state.selectedContent = action.payload
    },
    // --------------------------------------
    deleteUser: (state, action) => {
      state.users = state.users.filter((_, index) => index !== action.payload);
    },
    toggleUserStatus(state, action) {
      const { index } = action.payload;
      state.users[index].status = state.users[index].status === 'Active' ? 'Inactive' : 'Active';
    },
    // ---------------------------------------
    deletearticle: (state, action) => {
      state.articles = state.users.filter((_, index) => index !== action.payload);
    },
    toggleArticleStatus(state, action) {
      const { index } = action.payload;
      // state.articles[index].status = state.articles[index].status === 'Published' ? 'Draft' : 'Published';
      const articles = state.articles[index].status;
      switch (articles) {
        case 'Published':
          state.articles[index].status = 'Draft';
          break;
        case 'Draft':
          state.articles[index].status = 'Scheduled';
          break;
        case 'Scheduled':
          state.articles[index].status = 'Published';
          break;
        default:
          break;
      }
    },

    // -----------------------------
    deletecourse: (state, action) => {
      state.courses = state.users.filter((_, index) => index !== action.payload);
    },
    toggleCourseStatus(state, action) {
      const { index } = action.payload;
      const currentStatus = state.courses[index].status;

      switch (currentStatus) {
        case 'On Going':
          state.courses[index].status = 'Upcoming';
          break;
        case 'Upcoming':
          state.courses[index].status = 'Ended';
          break;
        case 'Ended':
          state.courses[index].status = 'On Going';
          break;
        default:
          break;
      }
    }
    ,
  }
});

export const { deleteJob, toggleJobStatus,
  settitleSideBar, setselectedContent,
  deleteUser, toggleUserStatus,
  deletearticle, toggleArticleStatus,
  deletecourse, toggleCourseStatus } = AdminSlice.actions;
export default AdminSlice.reducer;
