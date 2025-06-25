# Projeto: Fundamentos de JavaScript com Integração Contínua para Automação de Testes

Este repositório contém a implementação de funções JavaScript e os testes automatizados desenvolvidos por **Rodrigo Barbosa da Silva**, como parte da disciplina **Integração Contínua para Automação de Testes** (PGATS-2025-02).

## 📚 Descrição

O projeto simula comportamentos típicos de um sistema de gerenciamento de adoção e cuidados com animais, incluindo geração de tags, critérios de adoção, cálculo de ração e atividades por porte. Os testes automatizados garantem que essas funções se comportem corretamente.

A automação dos testes é executada localmente com **Mocha** e também integrada à **pipeline do GitHub Actions**, com execução manual via botão (nível 1 de CI).

## 🧪 Funcionalidades Implementadas

### `testes-descricao.js`

- `geradorDeTagsDeIdentificacao(nomeDog)`: Retorna o nome do pet em letras maiúsculas.
- `verificarSePodeSerAdotado(idade, porte)`: Retorna `true` se idade for 1 e porte for 'M'.
- `calcularConsumoDeRacao(nomeDog, idadeDog, pesoDog)`: Retorna o consumo diário de ração baseado no peso.
- `decidirTipoDeAtividadePorPorte(porte)`: Sugere atividades conforme o porte do pet.
- `buscarDadoAsync()`: Função assíncrona simulada que retorna uma string.

### `testes-exec.js`

Testes escritos com `Mocha` e `assert` validam o comportamento de cada função:

- Testes síncronos e assíncronos;
- Cobertura de diferentes cenários;
- Mensagens claras e validações precisas.

## ▶️ Como Executar os Testes Localmente

1. Instale as dependências:
   ```bash
   yarn install
   ```
2. Execute os testes:
   ```bash
   yarn run e2e
   ```

## 🔁 Integração Contínua com GitHub Actions

O pipeline definido em `.github/workflows/01-manual-exec.yaml` permite executar os testes de forma automatizada e manual:

- Instala dependências;
- Roda os testes com Mocha;
- Pode ser acionado diretamente via aba **Actions** do GitHub.

## 📌 Requisitos

- Node.js versão 16 ou superior
- Yarn
- GitHub Actions (para CI)

## 👨‍💻 Autor

Desenvolvido por **Rodrigo Barbosa da Silva**  
Disciplina: **Integração Contínua para Automação de Testes**  
Pós-graduação PGATS - 2025-02