import "./style.css"

export default function PainelStatus({ total }) {
    return (
        <div className="status">
            <p id="p">Total de personagens: {total}</p>
        </div>
    )
}