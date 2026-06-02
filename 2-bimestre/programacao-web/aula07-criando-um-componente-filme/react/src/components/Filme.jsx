export default function Filme({ filme = "matrix", ano = 1999 }){
    return(
        <>
            <p>Nome do filme: {filme}</p>
            <p>Ano do Filme: {ano}</p>
        </>
    )
}