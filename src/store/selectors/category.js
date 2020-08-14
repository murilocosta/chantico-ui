const { createSelector } = require("reselect");

const selectCategoryState = (state) => state.category;

export const selectCategoryList = createSelector(
  selectCategoryState,
  ({ categories }) => ({ categories: Object.values(categories) })
);

export const selectCategory = createSelector(
  selectCategoryState,
  ({ selectedCategory }) => ({ category: selectedCategory })
);
