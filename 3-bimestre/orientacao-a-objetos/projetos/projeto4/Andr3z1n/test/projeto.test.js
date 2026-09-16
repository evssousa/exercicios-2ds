const Notificacao = require("../class/Notificacao")
const Email = require("../class/Email")
const SMS = require("../class/SMS")
const PushApp = require("../class/PushApp")
const Canal = require("../class/Canal")
const ListaEnvio = require("../class/ListaEnvio")
const Disparo = require("../class/Disparo")
const NotificacaoFactory = require("../class/NotificacaoFactory")

test("Notificacao deve armazenar titulo e prioridade e possuir comportamento genérico", () => {
    const base = new Notificacao("Campanha de outubro Base", 0)

    expect(base.titulo).toBe("Campanha de outubro Base")
    expect(base.prioridade).toBe(0)
    expect(base.resumo()).toBe("Notificação registrada no sistema")
})

test("Email deve herdar de Notificacao e sobrescrever resumo()", () => {
    const instancia = new Email("Pedido aprovado", 2)

    expect(instancia).toBeInstanceOf(Notificacao)
    expect(instancia.titulo).toBe("Pedido aprovado")
    expect(instancia.prioridade).toBe(2)
    expect(instancia.resumo()).toBe("Notificação enviada por e-mail")
})

test("SMS deve herdar de Notificacao e sobrescrever resumo()", () => {
    const instancia = new SMS("Prioritário", 160)

    expect(instancia).toBeInstanceOf(Notificacao)
    expect(instancia.titulo).toBe("Prioritário")
    expect(instancia.prioridade).toBe(160)
    expect(instancia.resumo()).toBe("Notificação enviada por SMS")
})

test("PushApp deve herdar de Notificacao e sobrescrever resumo()", () => {
    const instancia = new PushApp("Padrão", 300)

    expect(instancia).toBeInstanceOf(Notificacao)
    expect(instancia.titulo).toBe("Padrão")
    expect(instancia.prioridade).toBe(300)
    expect(instancia.resumo()).toBe("Notificação enviada por push no aplicativo")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar resumo()", () => {
    const instancia0 = new Email("Pedido aprovado", 2)
    const instancia1 = new SMS("Prioritário", 160)
    const instancia2 = new PushApp("Padrão", 300)
    expect(instancia0.resumo()).not.toBe(instancia1.resumo())
    expect(instancia1.resumo()).not.toBe(instancia2.resumo())
})

test("NotificacaoFactory deve criar o tipo correto", () => {
    const instancia0 = NotificacaoFactory.criar("email", "Pedido aprovado", 2)
    const instancia1 = NotificacaoFactory.criar("sms", "Prioritário", 160)
    const instancia2 = NotificacaoFactory.criar("pushapp", "Padrão", 300)
    expect(instancia0).toBeInstanceOf(Email)
    expect(instancia1).toBeInstanceOf(SMS)
    expect(instancia2).toBeInstanceOf(PushApp)
})

test("NotificacaoFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        NotificacaoFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de notificação inválido")
})

test("Canal deve armazenar nome e limiteDeCaracteres", () => {
    const item = new Canal("Prioritário", 160)

    expect(item.nome).toBe("Prioritário")
    expect(item.limiteDeCaracteres).toBe(160)
})

test("ListaEnvio deve associar membros e categorias", () => {
    const item = new Canal("Prioritário", 160)
    const membro = new Email("Pedido aprovado", 2)
    const grupo = new ListaEnvio("Campanha de outubro")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Campanha de outubro")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("ListaEnvio deve permitir múltiplos membros e categorias", () => {
    const item1 = new Canal("Prioritário", 160)
    const item2 = new Canal("Padrão", 300)
    const membro1 = new Email("Pedido aprovado", 2)
    const membro2 = new Email("Padrão", 300)
    const grupo = new ListaEnvio("Campanha de outubro")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Disparo deve armazenar valor e a categoria vinculada", () => {
    const item = new Canal("Prioritário", 160)
    const registro = new Disparo(0.05, item)

    expect(registro.valor).toBe(0.05)
    expect(registro.canal).toBe(item)
})

test("Email deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Canal("Prioritário", 160)
    const item2 = new Canal("Padrão", 300)
    const membro = new Email("Pedido aprovado", 2)

    const registro1 = new Disparo(0.05, item1)
    const registro2 = new Disparo(0.02, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(0.05)
    expect(membro.registros[0].canal).toBe(item1)
    expect(membro.registros[1].valor).toBe(0.02)
    expect(membro.registros[1].canal).toBe(item2)
})

