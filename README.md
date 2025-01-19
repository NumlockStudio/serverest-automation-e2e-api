<h1 align="center">Automação ServeRest Cypress E2E/API</h1>
<br />

## Pré-requisitos

Baixe os seguintes requisitos:

Certifique-se de ter os seguintes itens instalados:

- **Editor de texto:** VSCode
- **Node.js:** v18.16.1 lts
- **Git**
- **Java para rodar o allure-report**
- **Bibliotecas:** `faker`, `cypress-allure-plugin`, `allure-commandline`, `cypress`

<br>

## Configuração
``` Bash
# Clone o repositório
git clone https://github.com/NumlockStudio/serverest-automation-e2e-api.git

# Instale as dependências
npm install
```

<br>

## Como executar:

```bash
# Abrir cypress
npm run cy:open

# Rodar testes de ui
npm run test:ui

# Rodar testes de api
npm run test:api

# Rodar todos os testes
npm run test:all
```
<br>

## Testes

### API
- Obter lista de usuários
- Cadastrar usuário
- Deletar usuário

### UI
- Login com sucesso
- Login inválido
- Realizar cadastro de usuário

<br>

## ServeRest:

- UI [Serverest](https://front.serverest.dev)
- API [Serverest](https://serverest.dev)
- [Repositório ServeRest](https://github.com/ServeRest/ServeRest)
