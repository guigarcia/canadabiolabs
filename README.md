# CanadaBioLabs Brasil

Site institucional da CanadaBioLabs em português brasileiro, replicando fielmente o site original com tradução completa.

## Stack Tecnológica

- **Framework**: Next.js 15.1.0
- **React**: 19.0.0
- **TypeScript**: 5.6.3
- **Estilização**: CSS Modules + Variáveis CSS
- **Build**: Estático (SSG)

## Estrutura do Projeto

```
canadabiolabs/
├── app/                          # App Router do Next.js
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Homepage com carousel
│   ├── globals.css              # Estilos globais e design system
│   ├── produtos/                # Páginas de produtos
│   │   ├── peptideos-proteinas/
│   │   └── reagentes-laboratorio/
│   ├── contato/                 # Formulário de contato
│   └── autenticacao-produto/    # Autenticação de produtos
├── components/                   # Componentes React
│   ├── Header/                  # Cabeçalho com navegação
│   ├── Footer/                  # Rodapé expandível
│   ├── DisclaimerModal/         # Modal de termos
│   ├── Carousel/                # Carousel da homepage
│   └── ProductCard/             # Card de produto
├── lib/                         # Utilitários
│   ├── translations.ts          # Traduções PT-BR
│   └── productData.ts           # Dados mockados dos produtos
├── types/                       # TypeScript types
│   └── index.ts
└── public/                      # Assets estáticos
    └── images/
```

## Design System

O projeto utiliza um design system completo com:

- **Variáveis CSS**: Cores, tipografia, espaçamento, transições
- **Tema Científico**: Cores adaptadas para o tema laboratorial
- **Responsividade**: Mobile-first design
- **Animações**: Transições suaves e animações CSS
- **Componentes Modulares**: CSS Modules para isolamento

### Cores Principais

- **Primary**: #0066CC (Azul científico)
- **Secondary**: #10b981 (Verde)
- **Accent**: #059669 (Verde escuro)

## Desenvolvimento

### Instalar Dependências

```bash
npm install
```

### Rodar em Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
```

Gera build estático na pasta `out/` pronto para hospedagem tradicional.

## Funcionalidades Implementadas

### ✅ Completo

- [x] Estrutura base do Next.js
- [x] Design system completo
- [x] Header com navegação responsiva
- [x] Footer expandível com termos
- [x] Modal de disclaimer (localStorage)
- [x] Homepage com carousel
- [x] Páginas de categorias de produtos
- [x] Página de peptídeos personalizados
- [x] Formulário de contato funcional
- [x] Página de autenticação de produtos
- [x] Traduções completas PT-BR
- [x] Responsividade mobile/tablet/desktop
- [x] Metadados SEO

### 🚧 A Implementar (Fase 2)

- [ ] Busca funcional de produtos
- [ ] Páginas individuais de produtos
- [ ] Listagem completa de produtos (92 peptídeos, 11 proteínas, 56 sólidos, etc)
- [ ] Download de imagens do site original
- [ ] Integração com backend para formulário
- [ ] Sistema de cache de imagens

## Páginas do Site

### Principais
- `/` - Homepage com carousel
- `/produtos/peptideos-proteinas` - Peptídeos e Proteínas
- `/produtos/reagentes-laboratorio` - Reagentes de Laboratório
- `/contato` - Formulário de contato
- `/autenticacao-produto` - Verificação de autenticidade

### Categorias de Produtos
- `/produtos/peptideos-proteinas/peptideos` - Peptídeos
- `/produtos/peptideos-proteinas/peptideos/personalizados` - Síntese personalizada
- `/produtos/peptideos-proteinas/peptideos/catalogo` - Catálogo (92 produtos)
- `/produtos/peptideos-proteinas/proteinas` - Proteínas (11 produtos)
- `/produtos/reagentes-laboratorio/formulacoes-liquidas/ampolas` - Ampolas (25 produtos)
- `/produtos/reagentes-laboratorio/formulacoes-liquidas/frascos` - Frascos (37 produtos)
- `/produtos/reagentes-laboratorio/formulacoes-solidas` - Sólidos (56 produtos)

## Próximos Passos

1. **Completar Dados de Produtos**: Adicionar todos os 220+ produtos do catálogo
2. **Download de Imagens**: Script para baixar todas as imagens do site original
3. **Busca**: Implementar busca funcional em todos os produtos
4. **Backend**: Integrar formulário de contato com envio de email
5. **Otimizações**: Melhorar performance e SEO
6. **Testes**: Testar em diferentes navegadores e dispositivos

## Deploy

Para hospedagem tradicional (cPanel/FTP):

1. Executar `npm run build`
2. Upload da pasta `out/` para o servidor
3. Configurar domínio brasileiro
4. Configurar redirects/rewrite rules se necessário

## Licença

Projeto desenvolvido para CanadaBioLabs Brasil.

## Contato

Para dúvidas ou suporte, entre em contato através do formulário no site.

