# 📘 AULA 34: TIPOS DE ARQUITETURA DE SOFTWARE: MONOLITICA, CLIENTE-SERVIDOR E MICROSERVIÇOS

## 🎯 Objetivos da aula

- Entender o que é **arquitetura de software**.
- Conhecer os modelos **Monolítica**, **Cliente-Servidor** e **Microsserviços**.
- Comparar características básicas.
- Identificar onde cada arquitetura pode ser utilizada.

# 🧠 O que é Arquitetura de Software?

Arquitetura de software é a **estrutura organizacional de um sistema**.

Ela define:

- Como as partes do sistema se conectam
- Onde cada função fica
- Como o sistema cresce
- Como será mantido no futuro

👉 É como a **planta de uma casa**, só que aplicada ao software.

# 🖊️ Quadro

```
IDEIA
 ↓
ARQUITETURA
 ↓
SISTEMA FUNCIONANDO
```

# 🧱 1. Arquitetura Monolítica

Todo o sistema fica em **um único projeto**.

Exemplo:

- Login
- Cadastro
- Estoque
- Relatórios

Tudo junto.

## 🖊️ Quadro

```
+----------------------+
|   SISTEMA ÚNICO      |
|----------------------|
| Login                |
| Cadastro             |
| Estoque              |
| Relatórios           |
+----------------------+
```

## ✅ Vantagens

- Fácil começar
- Simples para sistemas pequenos

## ❌ Desvantagens

- Cresce com dificuldade
- Manutenção complexa no futuro

# 🖥️ 2. Cliente-Servidor

Existe separação entre:

- Cliente = quem usa
- Servidor = onde roda o sistema

## 🖊️ Quadro

```
[ Cliente ]
 Navegador/App
      ↓
[ Servidor ]
 Sistema + Banco
```

## Exemplo

- Site acessado no navegador
- App conectado a servidor

# 🧩 3. Microsserviços

Sistema dividido em vários pequenos sistemas.

Cada parte cuida de uma função.

## 🖊️ Quadro

```
[ Login ]
[ Pagamento ]
[ Estoque ]
[ Entrega ]
```

Todos conversando entre si.

## Exemplo

Loja virtual grande.

# 📊 Comparação rápida

```
Monolítico → simples
Cliente-Servidor → organizado
Microsserviços → escalável
```

Fim da aula!

_

# 📝 Atividade Rápida

## Identificando arquitetura do sistema

Associe:

1. Sistema pequeno de biblioteca
2. Loja online nacional
3. Site escolar com vários usuários

Crie sua resposta abaixo: