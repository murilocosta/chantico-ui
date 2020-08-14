import searchEngine from '../../services/searchEngine';

export const EXECUTE_OMNI_SEARCH = 'EXECUTE_OMNI_SEARCH';

export const executeOmniSearch = (searchItem) => (dispatch) =>
  searchEngine.where({ page: searchItem }, {}, function (result) {
    dispatch({ type: EXECUTE_OMNI_SEARCH, payload: result });
  });
