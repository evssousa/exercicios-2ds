const {
    Veiculo,
    Carro,
    Moto
} = require("../index")

test("Deve criar um veículo com marca e modelo", () => {

    const veiculo = new Veiculo(
        "Toyota",
        "Corolla"
    )

    expect(veiculo.marca).toBe("Toyota")
    expect(veiculo.modelo).toBe("Corolla")

})

test("Deve apresentar as informações do veículo", () => {

    const veiculo = new Veiculo(
        "Toyota",
        "Corolla"
    )

    expect(veiculo.apresentar())
        .toBe("Toyota Corolla")

})

test("Carro deve herdar de Veiculo", () => {

    const carro = new Carro(
        "Honda",
        "Civic",
        4
    )

    expect(carro).toBeInstanceOf(Veiculo)

})

test("Carro deve possuir quantidade de portas", () => {

    const carro = new Carro(
        "Honda",
        "Civic",
        4
    )

    expect(carro.portas).toBe(4)

})

test("Carro deve manter o comportamento herdado", () => {

    const carro = new Carro(
        "Honda",
        "Civic",
        4
    )

    expect(carro.apresentar())
        .toBe("Honda Civic")

})

test("Moto deve herdar de Veiculo", () => {

    const moto = new Moto(
        "Honda",
        "CB 500",
        500
    )

    expect(moto).toBeInstanceOf(Veiculo)

})

test("Moto deve possuir cilindrada", () => {

    const moto = new Moto(
        "Honda",
        "CB 500",
        500
    )

    expect(moto.cilindrada).toBe(500)

})

test("Moto deve manter o comportamento herdado", () => {

    const moto = new Moto(
        "Honda",
        "CB 500",
        500
    )

    expect(moto.apresentar())
        .toBe("Honda CB 500")

})