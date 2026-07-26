# Portfólio de Gabriel Corrêa

Portfólio pessoal de **Gabriel Corrêa**, desenvolvedor full stack com foco em
infraestrutura. Página única, estática, sem build e sem dependências de runtime.

🔗 **[gabrielc-neto.github.io/portfolio](https://gabrielc-neto.github.io/portfolio/)**

---

## Seções

| Seção | Conteúdo |
| --- | --- |
| [Início](https://gabrielc-neto.github.io/portfolio/#home) | Apresentação, resumo do perfil e download do currículo |
| [Sobre](https://gabrielc-neto.github.io/portfolio/#about) | Trajetória e forma de trabalho |
| [Projetos](https://gabrielc-neto.github.io/portfolio/#projects) | Sistemas em produção e projetos próprios, com filtro por categoria |
| [Stack](https://gabrielc-neto.github.io/portfolio/#skills) | Tecnologias agrupadas por camada (front, back, dados, infra) |
| [Contato](https://gabrielc-neto.github.io/portfolio/#contact) | Formulário e canais diretos |

---

## Stack do site

- **HTML5** semântico, com meta tags de SEO, Open Graph e JSON-LD (`schema.org/Person`).
- **CSS3 puro** com custom properties, sem framework, sem etapa de build.
- **JavaScript vanilla**: menu, scroll spy, filtro de projetos e animações de entrada.
- **particles.js** (CDN) apenas como plano de fundo decorativo.
- **GitHub Pages** para hospedagem, **FormSubmit** para o formulário de contato.

### Identidade visual

Três cores de marca, definidas como custom properties no topo de `styles.css`.
Todos os demais tons (superfícies, bordas, texto secundário) são degraus derivados delas.

| Cor | Hex | Uso |
| --- | --- | --- |
| Base | `#030712` | Fundo, texto sobre o acento |
| Claro | `#f4f6fc` | Texto principal |
| Acento | `#4ade80` | Destaques, links, botões primários |

### Decisões de projeto

- Respeita `prefers-reduced-motion`: animações e partículas são desligadas.
- Partículas também não carregam em telas pequenas, porque não vale o custo de render.
- Sem imagens pesadas: ícones e favicon são SVG inline.

---

## Estrutura

```
.
├── index.html      # página principal
├── thanks.html     # confirmação de envio do formulário
├── styles.css      # design tokens + estilos
├── script.js       # interações
└── favicon.svg
```

---

## Rodando localmente

Não há dependências para instalar. Clone e sirva a pasta:

```bash
git clone https://github.com/gabrielc-neto/portfolio.git
cd portfolio

# qualquer servidor estático serve; por exemplo:
python -m http.server 5500
```

Acesse `http://localhost:5500`.

> Abrir o `index.html` direto pelo navegador (`file://`) também funciona,
> mas usar um servidor evita diferenças de comportamento em caminhos relativos.

---

## Licença

MIT. Sinta-se livre para usar como referência.

---

## Contato

- 🌐 [linkedin.com/in/gabrielc-neto](https://linkedin.com/in/gabrielc-neto)
- 💻 [github.com/gabrielc-neto](https://github.com/gabrielc-neto)
- 📧 gabrielneto327@gmail.com
