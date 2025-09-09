# projeto_endpoint_final

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



Descrição

Esta aplicação exibe um gráfico de dados diários de arrecadação utilizando Vue 3 (Options API) e ApexCharts.
O usuário pode selecionar um intervalo de datas e o gráfico é atualizado dinamicamente com os dados retornados pela API.

Funcionalidades

1. Requisição a API para obter dados diários de arrecadação.

2. Gráfico de linhas exibindo Valor Arrecadado e Quantidade de Pagamentos.

3. Filtro de intervalo de datas para atualizar o gráfico.

4. Renderização reativa utilizando Vue 3 Options API.

Tecnologias

1. Vue 3 (Options API)

2. ApexCharts  via vue3-apexcharts

3. Fetch API para requisições HTTP


Uso

1. Selecione Data Inicial e Data Final.

2. Clique no botão Atualizar.

3. O gráfico será atualizado com os dados retornados pela API.

Observações

1. As datas devem estar no formato YYYY-MM-DD.

2. O gráfico exibe os dados de acordo com as categorias retornadas pela API.

3. As configurações de formatação (toLocaleString) exibem os valores no formato brasileiro.