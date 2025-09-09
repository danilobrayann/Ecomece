# E-Commerce com Next.js 15, React, Prisma, TailwindCSS e Stripe

Este projeto é um **E-Commerce completo** construído com tecnologias modernas como Next.js 15, React, TypeScript, Prisma, TailwindCSS, Vercel Postgres, Clerk, Stripe, Zustand e outras.

O desenvolvimento é dividido em duas partes:

- **Parte 1**: 70% do projeto (conteúdo deste vídeo).
- **Parte 2**: Escolhida pelos usuários (comentários no vídeo) entre:

  - **Opção 1**: Paginação de produtos e animações com Framer Motion.
  - **Opção 2**: Migrar para Turborepo (monorepo) e organizar componentes com shadcn.

---

## Tecnologias utilizadas

- **Next.js 15**: Framework React para SSR/SSG.
- **React**: Biblioteca de UI moderna.
- **TypeScript**: Tipagem estática para JS.
- **TailwindCSS**: Framework CSS utilitário.
- **Prisma**: ORM para banco de dados.
- **Vercel Postgres**: Banco de dados PostgreSQL hospedado na Vercel.
- **Clerk**: Autenticação de usuários.
- **Stripe**: Pagamentos online.
- **Zustand**: Gerenciamento de estado global.
- **Framer Motion**: Animações (opção 1 da parte 2).

---

## Estrutura do Projeto

O projeto segue uma estrutura organizada de pastas, incluindo:

```
/app
  /components
  /pages
  /lib
  /styles
/prisma
```

- `components/` → Componentes reutilizáveis (NavBar, Produto, Carrinho, Checkout, etc.)
- `pages/` → Páginas da aplicação
- `lib/` → Configurações de Stripe, Clerk e Prisma
- `styles/` → Arquivos TailwindCSS e customizações

---

## Passo a Passo do Desenvolvimento

### Parte 1

1. Introdução
2. Criando o Projeto
3. Estrutura de Pastas
4. Configurando repositório no GitHub
5. Criando a NavBar
6. Listagem de Produtos
7. Consumindo API Fake (`https://fakestoreapi.com/`)
8. Criando Componente de Produto
9. Criando Componente de Imagem
10. Setup Clerk
11. Criando Projeto no Clerk
12. Traduzindo Menu do Usuário
13. Setup Prisma
14. Setup Vercel Postgres
15. Criando Tabela de Usuários
16. Adicionando Prisma Client
17. Integração via Webhook com Clerk
18. Setup Stripe
19. Instalando Stripe
20. Buscando Produtos no Stripe
21. Formatando Preço
22. Loading para Página Inicial
23. Setup Zustand
24. Configurando Zustand
25. Adicionando Carrinho de Compras
26. Área de Produtos no Carrinho de Compras
27. Adicionando Produto ao Carrinho de Compras
28. Reidratação de Componentes
29. Página de Detalhamento do Produto
30. Formatando Carrinho de Compras
31. Removendo Itens do Carrinho de Compras
32. Adicionando Usuário no Stripe
33. Botão de Checkout
34. Regra para Finalizar Compra
35. Criando Componente Checkout

---

## Funcionalidades

- Cadastro e login de usuários via **Clerk**
- Listagem de produtos consumindo API fake
- Componente de Produto com imagem e preço formatado
- Carrinho de Compras persistente usando **Zustand**
- Integração de pagamentos com **Stripe**
- Setup completo com **Prisma** e **Vercel Postgres**

---

## Referências

- [Fake Store API](https://fakestoreapi.com/)
- [Clerk Docs](https://clerk.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Stripe Docs](https://stripe.com/docs)
- [Zustand](https://github.com/pmndrs/zustand)
