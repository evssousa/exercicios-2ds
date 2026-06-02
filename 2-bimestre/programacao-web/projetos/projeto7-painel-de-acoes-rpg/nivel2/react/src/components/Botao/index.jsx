import "./style.css"

export default function Botao( {texto, foto, ...rest} ) {
return (
    <>
        <button {...rest}> <img src={foto} alt="" />{texto}</button>
    </>
    )
}