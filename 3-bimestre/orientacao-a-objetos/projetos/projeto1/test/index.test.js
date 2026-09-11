const Livro = require("../index")

describe("Classe Livro", () => {

    test("deve criar um livro com os dados informados", () => {

        const livro = new Livro(
            "O Hobbit",
            "J.R.R. Tolkien",
            1937
        )

        expect(livro.titulo).toBe("O Hobbit")
        expect(livro.autor).toBe("J.R.R. Tolkien")
        expect(livro.ano).toBe(1937)

    })


    test("um livro novo deve estar disponível", () => {

        const livro = new Livro(
            "1984",
            "George Orwell",
            1949
        )

        expect(livro.disponivel).toBe(true)

    })


    test("estaDisponivel deve retornar true para um livro disponível", () => {

        const livro = new Livro(
            "Dom Casmurro",
            "Machado de Assis",
            1899
        )

        expect(livro.estaDisponivel()).toBe(true)

    })


    test("emprestar deve tornar o livro indisponível", () => {

        const livro = new Livro(
            "O Pequeno Príncipe",
            "Antoine de Saint-Exupéry",
            1943
        )

        livro.emprestar()

        expect(livro.disponivel).toBe(false)

    })


    test("estaDisponivel deve retornar false após o empréstimo", () => {

        const livro = new Livro(
            "Harry Potter",
            "J.K. Rowling",
            1997
        )

        livro.emprestar()

        expect(livro.estaDisponivel()).toBe(false)

    })


    test("um livro emprestado não pode ser emprestado novamente", () => {

        const livro = new Livro(
            "Clean Code",
            "Robert C. Martin",
            2008
        )

        livro.emprestar()

        const estadoDepoisDoPrimeiroEmprestimo = livro.disponivel

        livro.emprestar()

        expect(livro.disponivel)
            .toBe(estadoDepoisDoPrimeiroEmprestimo)

    })


    test("devolver deve tornar o livro disponível novamente", () => {

        const livro = new Livro(
            "O Senhor dos Anéis",
            "J.R.R. Tolkien",
            1954
        )

        livro.emprestar()
        livro.devolver()

        expect(livro.disponivel).toBe(true)

    })


    test("um livro disponível pode continuar disponível após uma devolução", () => {

        const livro = new Livro(
            "Percy Jackson",
            "Rick Riordan",
            2005
        )

        livro.devolver()

        expect(livro.disponivel).toBe(true)

    })


    test("duas instâncias devem possuir dados independentes", () => {

        const livro1 = new Livro(
            "Livro A",
            "Autor A",
            2000
        )

        const livro2 = new Livro(
            "Livro B",
            "Autor B",
            2001
        )

        livro1.emprestar()

        expect(livro1.disponivel).toBe(false)
        expect(livro2.disponivel).toBe(true)

    })


    test("as instâncias devem pertencer à classe Livro", () => {

        const livro = new Livro(
            "JavaScript",
            "Autor",
            2025
        )

        expect(livro).toBeInstanceOf(Livro)

    })

})