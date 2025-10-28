import Controller from '@ember/controller';

export default class UsersController extends Controller {}
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UsersController extends Controller {
  @tracked nome = '';
  @tracked email = '';
  @tracked senha = '';

  @action
  updateNome(e) { this.nome = e.target.value; }
  @action
  updateEmail(e) { this.email = e.target.value; }
  @action
  updateSenha(e) { this.senha = e.target.value; }

  @action
  addUser(e) {
    e.preventDefault();
    const novo = {
      id: Date.now(),
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };
    this.model.pushObject(novo);
    this.nome = '';
    this.email = '';
    this.senha = '';
  }

  @action
  deleteUser(user) {
    this.model.removeObject(user);
  }
}
