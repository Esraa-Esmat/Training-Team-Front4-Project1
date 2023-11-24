
import { createSlice } from '@reduxjs/toolkit';
import { DummyArticlesData } from '../../Components/Home/DummyArticlesData';


const initialState = {
  all: [],
  filteredArticles:DummyArticlesData,
  selectedCategory: ''
};

const ArticleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setAllArticles: (state, action) => {
      state.all = action.payload;
      state.filteredArticles = action.payload;
    },
    setFilteredArticles: (state, action) => {
      // state.filteredArticles = action.payload;
      const category = action.payload;
      state.selectedCategory = category;
      state.filteredArticles = category
        ? state.all.filter(article => article.category === category)
        : state.all;
    },
  },
});


export const { setAllArticles, setFilteredArticles } = ArticleSlice.actions;
export default ArticleSlice.reducer;
