const Funcionario = require("../Funcionario")

test("Deve criar um funcionário com nome e cargo", () => {

    const funcionario = new Funcionario(
        "Ana",
        "Desenvolvedora",
        5000
    )

    expect(funcionario.nome).toBe("Ana")
    expect(funcionario.cargo).toBe("Desenvolvedora")

})

test("Deve permitir consultar o salário", () => {

    const funcionario = new Funcionario(
        "Ana",
        "Desenvolvedora",
        5000
    )

    expect(funcionario.salario).toBe(5000)

})

test("Deve permitir alterar o salário", () => {

    const funcionario = new Funcionario(
        "Ana",
        "Desenvolvedora",
        5000
    )

    funcionario.salario = 6000

    expect(funcionario.salario).toBe(6000)

})

test("Deve aceitar salário igual a zero", () => {

    const funcionario = new Funcionario(
        "Ana",
        "Desenvolvedora",
        5000
    )

    funcionario.salario = 0

    expect(funcionario.salario).toBe(0)

})

test("Não deve permitir salário negativo", () => {

    const funcionario = new Funcionario(
        "Ana",
        "Desenvolvedora",
        5000
    )

    funcionario.salario = -1000

    expect(funcionario.salario).toBe(5000)

})

test("Funcionários diferentes devem possuir dados independentes", () => {

    const funcionario1 = new Funcionario(
        "Ana",
        "Desenvolvedora",
        5000
    )

    const funcionario2 = new Funcionario(
        "Carlos",
        "Analista",
        4000
    )

    funcionario1.salario = 6000

    expect(funcionario1.salario).toBe(6000)
    expect(funcionario2.salario).toBe(4000)

})

test("Deve gerar a identificação do funcionário", () => {

    const funcionario = new Funcionario(
        "Carlos",
        "Analista",
        4000
    )

    expect(funcionario.apresentar())
        .toBe("Carlos - Analista")

})

test("A quantidade de funcionários deve aumentar a cada cadastro", () => {

    const quantidadeInicial =
        Funcionario.quantidade

    new Funcionario(
        "Ana",
        "Desenvolvedora",
        5000
    )

    new Funcionario(
        "Carlos",
        "Analista",
        4000
    )

    expect(Funcionario.quantidade)
        .toBe(quantidadeInicial + 2)

})

test("Deve permitir consultar a quantidade de funcionários", () => {

    const quantidadeInicial =
        Funcionario.quantidade

    new Funcionario(
        "Maria",
        "Gerente",
        7000
    )

    expect(
        Funcionario.quantidadeFuncionarios()
    ).toBe(quantidadeInicial + 1)

})

test("A quantidade de funcionários não deve pertencer individualmente aos objetos", () => {

    const funcionario = new Funcionario(
        "João",
        "Designer",
        3500
    )

    expect(funcionario.quantidade).toBeUndefined()

})

test("O salário não deve estar exposto como propriedade pública comum", () => {

    const funcionario = new Funcionario(
        "Maria",
        "Gerente",
        7000
    )

    expect(
        Object.keys(funcionario)
    ).not.toContain("salario")

})