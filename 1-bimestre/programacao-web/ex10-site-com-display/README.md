# 📘 DISPLAY: NONE, INLINE, BLOCK E INLINE-BLOCK

# 📚 O que é DISPLAY?

A propriedade `display` define **como um elemento aparece na página**.

Cada elemento HTML possui um comportamento padrão.

Exemplos:

| Elemento | Display padrão |
| --- | --- |
| `<div>` | block |
| `<p>` | block |
| `<span>` | inline |
| `<a>` | inline |

# 📦 DISPLAY: BLOCK

Elementos `block` ocupam **toda a largura disponível**.

Características:

- Quebra linha automaticamente
- Permite largura e altura

Exemplo:

```css
div {
  display: block;
}
```

# 📏 DISPLAY: INLINE

Elementos `inline` ficam **na mesma linha**.

Características:

- Não quebra linha
- Não aceita width/height

Exemplo:

```css
span {
  display: inline;
}
```

# 📐 DISPLAY: INLINE-BLOCK

Mistura os dois comportamentos.

- Fica na mesma linha
- Permite largura e altura

```css
div {
  display: inline-block;
}
```

# 🚫 DISPLAY: NONE

Remove o elemento da página visualmente.

```css
p {
  display: none;
}
```

O elemento **não aparece**.

# 📝 Atividade Rápida

## Site com Display

Crie o projeto com a seguinte estrutura:

```
index.html
/src/css/style.css
```

## 📄 index.html deve conter

- Estrutura HTML completa
- Link para `style.css`
- Um `<div>`
- Dois `<span>`
- Um `<p>`

Exemplo de conteúdo:

```html
<div>Elemento DIV</div>
<span>Elemento SPAN 1</span>
<span>Elemento SPAN 2</span>
<p>Este parágrafo será ocultado</p>
```

---

## 📄 style.css deve conter

- `div` com `display: block`
- `span` com `display: inline-block`
- `p` com `display: none`