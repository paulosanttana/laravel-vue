
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
