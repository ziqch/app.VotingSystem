import http from './service'
import store from 'store'
export default () => new Promise((resolve, reject) => {
  http.get('auth').then(r => {
    store.set('user', r.data);
    resolve();
  }).catch(e => {
    reject();
  });
});