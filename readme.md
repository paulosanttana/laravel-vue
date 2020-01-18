
<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<br>

**Projeto Laravel VUE**

Consumindo API Laravel com VueJs.


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


**Ativar VueJs**

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

## Browser Mix

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

