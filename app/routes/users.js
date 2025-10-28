import Route from '@ember/routing/route';

export default class UsersRoute extends Route {}
 import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  model() {
    return [
      { id: 1, nome: 'Amanda', email: 'amanda@email.com', senha: '1234' },
      { id: 2, nome: 'Lucas', email: 'lucas@email.com', senha: 'abcd' }
    ];
  }
}
