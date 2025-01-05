# Gopportunities - API de Vagas de Emprego

Este projeto é uma API para gerenciamento de oportunidades de emprego, desenvolvida em Golang. A API utiliza o framework Go-Gin como router, GoORM para comunicação com o banco de dados, SQLite como banco de dados, e Swagger para documentação e testes da API. O projeto segue uma estrutura de pacotes organizada e moderna, visando facilitar a manutenção e o desenvolvimento.

## Funcionalidades
- Introdução ao desenvolvimento de APIs modernas com Golang.
- Configuração de ambiente de desenvolvimento para a criação da API.
- Uso do Go-Gin como roteador para gerenciamento de rotas.
- Implementação do SQLite como banco de dados da API.
- Integração do GoORM para comunicação com o banco de dados.
- Uso do Swagger para documentação e testes da API.
- Estruturação moderna de pacotes para organização do projeto.
- Implementação de endpoints completos para busca, criação, edição e exclusão de oportunidades de emprego.

## Instalação
Siga os passos abaixo para usar este projeto:

1. Clone o repositório:
   ```bash
   git clone https://github.com/hitalo-lima/gopportunities.git
   ```
2. Instale as dependências:
   ```bash
   go mod download
   ```
3. Compile a aplicação:
   ```bash
   go build
   ```
4. Execute a aplicação:
   ```bash
   ./main
   ```

## Comandos do Makefile
O projeto inclui um Makefile para facilitar o gerenciamento de tarefas comuns. Aqui está a lista de comandos disponíveis:

- `make run`: Executa a aplicação sem gerar a documentação da API.
- `make run-with-docs`: Gera a documentação da API usando o Swag e, em seguida, executa a aplicação.
- `make build`: Compila a aplicação e cria um arquivo executável chamado `gopportunities`.
- `make docs`: Gera a documentação da API usando o Swag.
- `make clean`: Remove o executável `gopportunities` e exclui o diretório `./docs`.

## Ferramentas Utilizadas
- **Golang**: Desenvolvimento backend.
- **Go-Gin**: Gerenciamento de rotas.
- **GoORM**: Comunicação com o banco de dados.
- **SQLite**: Banco de dados.
- **Swagger**: Documentação e testes da API.

## Uso
Após iniciar a API, você pode usar a interface do Swagger para interagir com os endpoints de busca, criação, edição e exclusão de oportunidades de emprego. A API estará acessível em:

```
http://localhost:8080/swagger/index.html
```
