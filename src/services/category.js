import http from './connection';

class CategoryService {
  constructor(http) {
    this.http = http;
  }

  save(category) {
    return this.http.post('/kategorien', category);
  }

  update(category) {
    return this.http.put(`/kategorien/${category.id}`, category);
  }

  delete(categoryId) {
    return this.http.delete(`/kategorien/${categoryId}`);
  }

  fetchById(categoryId) {
    return this.http.get(`/kategorien/${categoryId}`);
  }

  fetchAll() {
    return this.http.get('/kategorien');
  }
};

export default new CategoryService(http);
