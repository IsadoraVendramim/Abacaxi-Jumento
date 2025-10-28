import { pageTitle } from 'ember-page-title';

<template>
  {{pageTitle "Users"}}
  {{outlet}}
</template>
<h1>Cadastro de Usuários</h1>

<ul>
  {{#each @model as |user|}}
    <li>
      {{user.nome}} - {{user.email}}
      <button type="button" {{on "click" (fn this.deleteUser user)}}>Excluir</button>
    </li>
  {{/each}}
</ul>

<form {{on "submit" this.addUser}}>
  <input type="text" placeholder="Nome" value={{this.nome}} {{on "input" this.updateNome}}>
  <input type="email" placeholder="Email" value={{this.email}} {{on "input" this.updateEmail}}>
  <input type="password" placeholder="Senha" value={{this.senha}} {{on "input" this.updateSenha}}>
  <button type="submit">Adicionar</button>
</form>
