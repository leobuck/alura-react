import './CampoTexto.css'

let valor = 'Leonardo Buck'

const aoDigitar = (evento) => {
    valor = evento.target.value
    console.log(valor)
}

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={`${props.placeholder}...`} />
        </div>
    )
}

export default CampoTexto