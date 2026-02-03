## 🧭 PASSO A PASSO – Corrigindo erro de sincronização no GitHub (branches divergentes)

### 🧩 Situação:

Ao tentar rodar o comando

```bash
git pull origin main

```

ou clicar em **"Sync Changes"** no Codespace, aparece a mensagem:

> ❌ fatal: Need to specify how to reconcile divergent branches.
> 

Isso significa que o **seu projeto local e o projeto no GitHub têm diferenças** e o Git precisa saber como “juntar” essas alterações.

---

## ✅ Como Resolver Passo a Passo

### **1️⃣ Verifique se há alterações não salvas**

No terminal do Codespace, digite:

```bash
git status

```

Se aparecer algo como *modified* ou *untracked files*, salve tudo com:

```bash
git add .
git commit -m "salvando progresso local"

```

---

### **2️⃣ Busque as atualizações do repositório remoto**

Isso baixa as mudanças do GitHub sem misturar ainda:

```bash
git fetch origin

```

---

### **3️⃣ Una (merge) o código remoto com o seu**

Agora junte o que está no GitHub com o que está no seu Codespace:

```bash
git merge origin/main

```

Se o Git disser que há **conflitos**, ele mostrará quais arquivos precisam ser ajustados.

🧠 Dica: os conflitos aparecem entre marcadores como estes:

```
<<<<<<< HEAD
(sua versão)
=======
(versão do GitHub)
>>>>>>> origin/main

```

Edite o arquivo, escolha o que deve ficar e depois finalize com:

```bash
git add .
git commit -m "resolvendo conflitos do merge"

```

---

### **4️⃣ Envie tudo de volta para o GitHub**

Depois que o merge estiver pronto:

```bash
git push origin main

```

---

### **5️⃣ (Opcional) Configure o Git para não pedir isso novamente**

Isso define que o Git sempre fará **merge** ao atualizar:

```bash
git config pull.rebase false

```

Assim, na próxima vez, você pode apenas rodar:

```bash
git pull origin main
git push origin main

```