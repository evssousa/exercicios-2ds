const Notificacao = require("../Notificacao")
const Factory = require("../Factory")

test("Deve criar uma notificação por email", () => {
    const notificacao = Factory.criar("email", "Seu pedido foi aprovado")

    expect(notificacao).toBeInstanceOf(Notificacao)
    expect(notificacao.enviar()).toBe("E-mail enviado: Seu pedido foi aprovado")
})

test("Deve criar uma notificação por SMS", () => {
    const notificacao = Factory.criar("sms", "Seu pedido foi enviado")

    expect(notificacao).toBeInstanceOf(Notificacao)
    expect(notificacao.enviar()).toBe("SMS enviado: Seu pedido foi enviado")
})

test("Deve criar uma notificação por aplicativo", () => {
    const notificacao = Factory.criar("app", "Você recebeu uma nova mensagem")

    expect(notificacao).toBeInstanceOf(Notificacao)
    expect(notificacao.enviar()).toBe(
        "Notificação no aplicativo: Você recebeu uma nova mensagem"
    )
})

test("Diferentes notificações devem possuir comportamentos diferentes", () => {
    const email = Factory.criar("email", "Olá")
    const sms = Factory.criar("sms", "Olá")
    const app = Factory.criar("app", "Olá")

    expect(email.enviar()).not.toBe(sms.enviar())
    expect(sms.enviar()).not.toBe(app.enviar())
    expect(email.enviar()).not.toBe(app.enviar())
})

test("A Factory deve criar o tipo correto de notificação", () => {
    const email = Factory.criar("email", "Teste")
    const sms = Factory.criar("sms", "Teste")
    const app = Factory.criar("app", "Teste")

    expect(email.constructor.name).toBe("Email")
    expect(sms.constructor.name).toBe("SMS")
    expect(app.constructor.name).toBe("App")
})

test("Deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        Factory.criar("telegram", "Teste")
    }).toThrow("Tipo de notificação inválido")
})

test("A mensagem deve ser armazenada na notificação", () => {
    const notificacao = Factory.criar("email", "Mensagem de teste")

    expect(notificacao.mensagem).toBe("Mensagem de teste")
})