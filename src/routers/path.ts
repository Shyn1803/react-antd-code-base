// interface Params {
//   [key: string]: string;
// }

export default class PATH {
  // static replaceParams(route: string, params: Params = {}) {
  //   let finalRoute = route;
  //   Object.keys(params).forEach((key) => {
  //     finalRoute = finalRoute.replace(`:${key}`, params[key]);
  //   });
  //   return finalRoute;
  // }

  static ROOT = '/';

  static LOGIN = '/login';

  static ABOUT = '/users/about';

  static PROFILE = '/users/profile';

  static PAGE_NOT_FOUND = '/:pageName';
}
