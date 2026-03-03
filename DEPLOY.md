# 🚀 Deploy Guide — Vetta Hub no ar

## Pré-requisitos
- Node.js 18+ instalado (`node -v` para checar)
- Conta no GitHub: github.com
- Conta na Vercel: vercel.com (login com GitHub)

---

## Passo 1 — Criar repositório no GitHub

1. Acesse **github.com/new**
2. Nome do repositório: `vetta-hub`
3. Visibilidade: **Private** (recomendado)
4. **Não** marque "Initialize with README"
5. Clique em **Create repository**

---

## Passo 2 — Subir o código

No terminal, dentro da pasta `vetta-hub/`:

```bash
# Inicializar git
git init
git add .
git commit -m "feat: initial Vetta Hub Next.js project"

# Conectar ao repositório GitHub (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/vetta-hub.git
git branch -M main
git push -u origin main
```

---

## Passo 3 — Deploy na Vercel

1. Acesse **vercel.com/new**
2. Clique em **"Import Git Repository"**
3. Conecte sua conta GitHub se ainda não conectou
4. Selecione o repositório `vetta-hub`
5. Configurações (Vercel já detecta Next.js automaticamente):
   - **Framework Preset:** Next.js ✅
   - **Build Command:** `npm run build` ✅
   - **Output Directory:** `out` ✅
   - **Install Command:** `npm install` ✅
6. Clique em **Deploy**

⏱ O deploy leva ~2 minutos. Você receberá uma URL `.vercel.app`.

---

## Passo 4 — Apontar o domínio vettahub.com.br

### Na Vercel:
1. Acesse o projeto → aba **Settings** → **Domains**
2. Digite `vettahub.com.br` e clique **Add**
3. Adicione também `www.vettahub.com.br`
4. A Vercel vai mostrar os registros DNS necessários

### No painel do seu registrador (Registro.br / Hostinger / etc.):

A Vercel vai pedir para você criar registros DNS. Geralmente são:

**Opção A — usando nameservers da Vercel (mais simples):**
Aponte os nameservers do domínio para os da Vercel:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Opção B — mantendo seu registrador, só alterando DNS:**
Crie os seguintes registros na zona DNS:

| Tipo  | Nome | Valor                  |
|-------|------|------------------------|
| A     | @    | 76.76.21.21            |
| CNAME | www  | cname.vercel-dns.com   |

> ⚠️ No Registro.br, o tipo "A" é chamado de "Endereço IPv4"

### Propagação:
- Leva de **5 minutos a 48 horas** (geralmente menos de 1h)
- Verifique em: https://dnschecker.org/#A/vettahub.com.br

---

## Passo 5 — SSL automático

A Vercel provisiona HTTPS automaticamente via Let's Encrypt.
Após o DNS propagar, `https://vettahub.com.br` estará no ar. ✅

---

## Deploy contínuo (bonus)

A partir de agora, **todo `git push` na branch `main` faz deploy automático**.

```bash
# Fluxo de atualização do site
git add .
git commit -m "update: descrição da mudança"
git push
# Vercel detecta e faz deploy em ~60 segundos ✅
```

---

## Estrutura do projeto

```
vetta-hub/
├── app/
│   ├── layout.tsx          ← metadata, fontes, globals
│   ├── globals.css         ← todo o CSS do site
│   ├── page.tsx            ← landing page (/)
│   └── sobre/
│       └── page.tsx        ← página /sobre
├── components/
│   ├── Loader.tsx          ← tela de carregamento
│   ├── Nav.tsx             ← navegação
│   ├── Footer.tsx          ← rodapé
│   ├── LogoEmblem.tsx      ← SVG do logo reutilizável
│   └── sections/
│       ├── Hero.tsx
│       ├── Ecossistema.tsx
│       ├── Servicos.tsx
│       ├── ComoFunciona.tsx
│       ├── SobreTeaser.tsx
│       ├── ParaQuem.tsx
│       ├── InfraVisual.tsx
│       ├── OrbitalTimeline.tsx
│       ├── Dashboard.tsx
│       ├── Stack.tsx
│       ├── FAQ.tsx
│       ├── CTA.tsx
│       └── EcossistemaOrbital.tsx
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── vercel.json
```

---

## Próximos passos após o deploy

- [ ] Adicionar favicon (coloque `favicon.ico` em `/public`)
- [ ] Adicionar og:image para compartilhamento social (coloque em `/public/og.png`)
- [ ] Configurar Google Analytics ou Plausible
- [ ] Criar página `/politica-de-privacidade`
- [ ] Quando tiver foto: atualizar `/sobre` com imagem real
