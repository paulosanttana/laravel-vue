
<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<br>

**Projeto Laravel + VueJs**

Consumindo API Laravel com VueJs. Esse projeto utiliza Laravel 5.7 e Mysql.




**Contents**

- [Install](#Install)
- [Ativar VueJs](#Ativar-VueJs)
- [Criando component](#Criando-component)
- [Configurando view routers](#Configurando-view-routers)
- [Configurando Vuex](#Configurando-Vuex)
- [BrowserSync](#BrowserSync)
- [Administrando Categorias](#Administrando-Categorias)




**Install**

1. Instalação das dependencias do `package.json`. Para isso o NodeJs tem que esta instalado!
```bash
npm install
```

2. Instalação dos pacotes `vue-router` (gerencia rotas) e `Vuex` (gerencia os estados da aplicação).
```bash
npm install --save-dev vue-router vuex
```

3. Configuração Laravel Mix para fazer a compilação dos códigos
```php
// webpack.mix.js
```

**Comandos Dev/Prod**

Comando para criar arquivo .js e .scc não minificado quando for ambiente desenvolvimento
```bash
npm run dev
```

Comando para criar arquivo .js e .scc  minificado quando for ambiente produção
```bash
npm run prod
```

Estrutura do VueJs fica dentro de `resource\assets\js`


## Ativar VueJs

4. Adicione no arquivo `welcome.blade.php` o seletor id `app` e link ao `/js/app.js` usando o helper do Laravel Mix, pode usar o helper `url()` ou `assets()` também se quiser.
```php
// resources\views\welcome.blade.php

<body>
        <div id="app" class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    ...
```

```php
// resources\views\welcome.blade.php

    ...

    <script src="{{ mix('/js/app.js') }}"></script> // Adicionado
    </body>
</html>
```

Adicione ao `heard` a tag `<meta>` passando o `csrf_token` para não aparecer mensam de erro csrf.
```php
// resources\views\welcome.blade.php

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

<meta name="csrf-token" content="{{ csrf_token() }}">  // Adicionado

<!-- Styles -->
<style>
    ...
```

## Criando component

**Trabalhado Vue com Laravel**

Uma das formar e criar componente e incluir na view do laravel.

5. Crie component `TestComponent.vue` e adicione o código
```php
// resources\js\component

<template>
    <div>
        <h1>Sou um component vue JS =D</h1>
    </div>
</template>


<script>
export default {
    // scripts javascript
}
</script>


<style scoped>
    /* CSS */
</style>
``` 

5.1 Declare o component
```php
// resources\js\app.js

require('./bootstrap');
window.Vue = require('vue');


import router from './routes/routers'   // importado component


/***
 * Components globais
 */
Vue.component('test-component', require('./components/TestComponent').default)  // Declara component

const app = new Vue({
```


*sempre após editar, compilar `npm run dev`*


## Configurando view routers 

6. Cria pasta `routes` dentro do diretório `resources\assets\js` e dentro do novo diretório adicione arquivo `routers.js` com o código abaixo:
```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    // Todas Rotas

]

const router = new VueRouter({
    routes
})


export default router
``` 

## Configurando Vuex

7. Crie diretório `vuex` e dentro adicione arquivo `store.js`.

> resource\js\vuex\store.js

7.1 Adicione o código no `store.js`
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

import Categories from './modules/categories/categories'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        categories: Categories
    }
})

export default store
```

## BrowserSync

>Rodar o browserSync é opcional, pois ele irá atualizar o browser automaticamente o que facilita o desenvolvimento da aplicação. Porém se não quiser pode continuar usando o `npm run dev` para compilar a aplicação toda vez que realizar atualização e atualizar o browser manualmente `F5`.

>No procedimento abaixo iremos rodar o `npm run watch`, através dele será executado a compilação da aplicação e atualizar o browser automaticamente .

8. Configurar browser mix no arquivo `webpack.mix.js`.
```javascript
// webpack.mix.js
mix.browserSync('http://127.0.0.1:8000/')   
```

8.1 Execute o comando para que o `watch` compile automaticamente a cada mudança. E o `browserSync` atualiza o browser.
```bash
npm run watch
``` 

## Administrando Categorias

**Organização estrutura Vue**

9. Crie três pastas `admin` `frontend` e `layouts` dentro do diretório `components`.

`resources\js\components\admin`      (todos components referente administração)

`resources\js\components\frontend`   (todos components referente ao frontend)

`resources\js\components\layouts`    (todos compoents compativel ao frontend e backend)

9.1 Cria component `AdminComponent.vue` dentro da pasta `Admin`.
```javascript
<template>
    <div>
        Sou o template de admin
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
```

9.2 Crie duas pastas `layouts` e `pages` dentro do diretório `admin`.

`resources\js\components\admin\layouts`  (Todos components reutilizaveis dentro do compomente admin)

`resources\js\components\admin\pages`    (gestão de paginas de administração)

9.3 Criar pasta `categories` dentro de `pages`. E adicione component. `CategoriesComponent.vue`

```javascript
// resources\js\components\admin\pages\CategoriesComponent.vue

<template>
    <div>
        Listagem das categories
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
```

9.4 Importar component `CategoriesComponent` em `routers.js`
```javascript
import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'
```


9.5 Define a rota
```javascript
const routes = [
    {path: '/categories', component: CategoriesComponent, name: 'categories'}
]
```

9.6 Cria webComponent `App.vue` dentro `resources\js\components` 
```vue
<template>
    <div>
        <router-view></router-view> //faz roteamento dos components
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
```

9.7 Declarar component `App.vue` dentro de `app.js`
```javascript
/***
 * Components globais
 */
Vue.component('app-component', require('./components/App'))
```

9.8 Declara o component `app-component` dentro de `welcome.blade.php`
```php
// resoureces\welcome.blade.php
    
    ...

  <body>
        <div id="app">

            <app-component></app-component> //Adicionado tag do component

        </div>


    <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
```

## Organizando rotas Admin Categorias

10. Criar pasta `dashboard` dentro de `reources\js\components\admin\pages`, em seguida adicione crie component `DashboardComponent.vue`.
```vue 
// reources\js\components\admin\pages\DashboardComponent

<template>
    <div>
        pagina dashboard
    </div>
</template>
```

10.1 Define url no arquivo de rotas.

```javascript
// resources\js\routes\routers.js

import Vue from 'vue'
import VueRouter from 'vue-router'

import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'
import DashboardComponent from '../components/admin/pages/dashboard/DashboardComponent' // Adicionado import

Vue.use(VueRouter)

const routes = [
    {path: '/categories', component: CategoriesComponent, name: 'admin.categories'},
    {path: '/', component: DashboardComponent, name: 'admin.dashboard'} // Adcionado rota com prefixo admin.
]

...

```







## Listagem Categorias

11. Adicionar menu em `AdminComponent.vue`.
```vue
<template>
    <div>
        <ul>
            <li>
                <router-link :to="{name: 'admin.dashboard'}">Dashboard</router-link>
            </li>
            <li>
                <router-link :to="{name: 'admin.categories'}">Categorias</router-link>
            </li>
        </ul>
    </div>
</template>
```

11.1 Alterar tag de component


## Listar Categorias com Vuex

12. 

## Criar Component de Preloader

13. 