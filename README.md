# TodoList React App

Uma aplicação simples de lista de tarefas construída com React e TypeScript, criada via Create React App.

Os recursos principais incluem:

- **Adicionar tarefas** com nome e prazo em dias
- **Remover tarefas** ao clicar no botão "X"
- Layout responsivo e estilizado rapidamente com CSS

## 📁 Estrutura 🧱

- `src/App.tsx` – componente principal que mantém o estado e exibe a lista
- `src/Components/TodoTask.tsx` – componente que renderiza cada item da lista
- `src/Interfaces.ts` – definições de tipos TypeScript
- `src/App.css` – estilos globais da aplicação

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone <URL-do-repo>
   cd todolist
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
   ou, se usar Yarn:
   ```bash
   yarn install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
   Abra [http://localhost:3000](http://localhost:3000) no browser. A página recarrega automaticamente ao salvar alterações.

## 🧪 Scripts úteis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Executa em modo de desenvolvimento |
| `npm run build` | Gerar versão de produção na pasta `build` |
| `npm test` | Rodar testes (se implementados) |
| `npm run eject` | Expor configurações do CRA (irreversível) |

> Dica: substitua `npm` por `yarn` se preferir.

## 📝 Extensões sugeridas

- Adicione validação de entradas
- Persista dados no `localStorage` ou em uma API
- Implemente filtros (pendentes, concluídas)
- Adapte estilo para mobile

## 🎨 Estilo

O CSS atual aplica um cabeçalho vermelho e tarefas com fundo também vermelho, seguindo o layout neon do exemplo. Basta editar `src/App.css` para ajustar cores ou tamanhos.

## 📚 Aprendizado

Este projeto é ideal para iniciantes que querem praticar:

- React com hooks (`useState`)
- Componentização e props
- Tipos em TypeScript
- Estilização com CSS simples

Para saber mais:

- [Documentação React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)

---

Boa codagem! 🚧
