const Animal = require("../class/Animal")
const Mamifero = require("../class/Mamifero")
const Ave = require("../class/Ave")
const Reptil = require("../class/Reptil")
const Habitat = require("../class/Habitat")
const Recinto = require("../class/Recinto")
const Alimentacao = require("../class/Alimentacao")
const AnimalFactory = require("../class/AnimalFactory")

test("Animal deve armazenar nome e idade e possuir comportamento genérico", () => {
    const base = new Animal("Recinto Sul Base", 2)

    expect(base.nome).toBe("Recinto Sul Base")
    expect(base.idade).toBe(2)
    expect(base.descricao()).toBe("Animal cadastrado no zoológico")
})

test("Mamifero deve herdar de Animal e sobrescrever descricao()", () => {
    const instancia = new Mamifero("Simba", 5)

    expect(instancia).toBeInstanceOf(Animal)
    expect(instancia.nome).toBe("Simba")
    expect(instancia.idade).toBe(5)
    expect(instancia.descricao()).toBe("Mamífero em exibição no recinto")
})

test("Ave deve herdar de Animal e sobrescrever descricao()", () => {
    const instancia = new Ave("Savana", 12)

    expect(instancia).toBeInstanceOf(Animal)
    expect(instancia.nome).toBe("Savana")
    expect(instancia.idade).toBe(12)
    expect(instancia.descricao()).toBe("Ave em exibição no recinto")
})

test("Reptil deve herdar de Animal e sobrescrever descricao()", () => {
    const instancia = new Reptil("Floresta", 8)

    expect(instancia).toBeInstanceOf(Animal)
    expect(instancia.nome).toBe("Floresta")
    expect(instancia.idade).toBe(8)
    expect(instancia.descricao()).toBe("Réptil em exibição no recinto")
})

test("Cada tipo deve possuir um comportamento diferente ao chamar descricao()", () => {
    const instancia0 = new Mamifero("Simba", 5)
    const instancia1 = new Ave("Savana", 12)
    const instancia2 = new Reptil("Floresta", 8)
    expect(instancia0.descricao()).not.toBe(instancia1.descricao())
    expect(instancia1.descricao()).not.toBe(instancia2.descricao())
})

test("AnimalFactory deve criar o tipo correto", () => {
    const instancia0 = AnimalFactory.criar("mamifero", "Simba", 5)
    const instancia1 = AnimalFactory.criar("ave", "Savana", 12)
    const instancia2 = AnimalFactory.criar("reptil", "Floresta", 8)
    expect(instancia0).toBeInstanceOf(Mamifero)
    expect(instancia1).toBeInstanceOf(Ave)
    expect(instancia2).toBeInstanceOf(Reptil)
})

test("AnimalFactory deve gerar erro ao solicitar um tipo inválido", () => {
    expect(() => {
        AnimalFactory.criar("tipo-inexistente", "Teste", 1)
    }).toThrow("Tipo de animal inválido")
})

test("Habitat deve armazenar nome e capacidade", () => {
    const item = new Habitat("Savana", 12)

    expect(item.nome).toBe("Savana")
    expect(item.capacidade).toBe(12)
})

test("Recinto deve associar membros e categorias", () => {
    const item = new Habitat("Savana", 12)
    const membro = new Mamifero("Simba", 5)
    const grupo = new Recinto("Recinto Sul")

    grupo.adicionarCategoria(item)
    grupo.adicionarMembro(membro)

    expect(grupo.nome).toBe("Recinto Sul")
    expect(grupo.categorias).toEqual([item])
    expect(grupo.membros).toEqual([membro])
})

test("Recinto deve permitir múltiplos membros e categorias", () => {
    const item1 = new Habitat("Savana", 12)
    const item2 = new Habitat("Floresta", 8)
    const membro1 = new Mamifero("Simba", 5)
    const membro2 = new Mamifero("Floresta", 8)
    const grupo = new Recinto("Recinto Sul")

    grupo.adicionarCategoria(item1)
    grupo.adicionarCategoria(item2)
    grupo.adicionarMembro(membro1)
    grupo.adicionarMembro(membro2)

    expect(grupo.categorias).toHaveLength(2)
    expect(grupo.membros).toHaveLength(2)
})

test("Alimentacao deve armazenar valor e a categoria vinculada", () => {
    const item = new Habitat("Savana", 12)
    const registro = new Alimentacao(3.5, item)

    expect(registro.valor).toBe(3.5)
    expect(registro.habitat).toBe(item)
})

test("Mamifero deve acumular vários registros associados a categorias diferentes", () => {
    const item1 = new Habitat("Savana", 12)
    const item2 = new Habitat("Floresta", 8)
    const membro = new Mamifero("Simba", 5)

    const registro1 = new Alimentacao(3.5, item1)
    const registro2 = new Alimentacao(2, item2)

    membro.adicionarRegistro(registro1)
    membro.adicionarRegistro(registro2)

    expect(membro.registros).toHaveLength(2)
    expect(membro.registros[0].valor).toBe(3.5)
    expect(membro.registros[0].habitat).toBe(item1)
    expect(membro.registros[1].valor).toBe(2)
    expect(membro.registros[1].habitat).toBe(item2)
})

