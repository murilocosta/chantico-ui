import categoryService from '../../services/category';

export const LIST_CATEGORIES = 'LIST_CATEGORIES';
export const SAVE_CATEGORY = 'SAVE_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';

export const listCategories = () => (dispatch) =>
  categoryService.fetchAll()
    .then((result) => dispatch({
      type: LIST_CATEGORIES,
      payload: result
    }));

export const saveCategory = (category) => (dispatch) =>
  categoryService.save(category)
    .then((result) => dispatch({
      type: SAVE_CATEGORY,
      payload: result
    }));

export const deleteCategory = (categoryId) => (dispatch) =>
  categoryService.delete(categoryId)
    .then(() => dispatch({
      type: DELETE_CATEGORY,
      payload: categoryId
    }));

export const fetchCategory = (categoryId) => (dispatch) =>
  categoryService.fetchById(categoryId)
    .then((result) => dispatch({
      type: FETCH_CATEGORY,
      payload: result
    }));

export const updateCategory = (category) => (dispatch) =>
  categoryService.update(category)
    .then((result) => dispatch({
      type: UPDATE_CATEGORY,
      payload: result
    }));

export const editCategory = (category) => ({
  type: EDIT_CATEGORY,
  payload: category
});
