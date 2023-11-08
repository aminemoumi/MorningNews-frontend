import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hiddenArticlesSlice = createSlice({
	name: 'hiddenArticles',
	initialState,
	reducers: {
        hideArticle: (state, action) => {
            // TODO: check whether article is not already hidden
            // console.log(action.payload);
            state.value.push(action.payload);
        },
        unhideArticle: (state, action) => {
            state.value = state.value.filter(hidden => hidden.title !== action.payload.title);
            console.log(action.payload);
        },
        unhideAllArticles: (state) => {
            state.value = [];
            console.log("unhidden all articles")
        }
	},
});

export const { hideArticle, unhideArticle, unhideAllArticles } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;
