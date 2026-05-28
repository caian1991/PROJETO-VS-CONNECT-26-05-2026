import "./style.css"

import imgAlfinete from "../../assets/images/alfinete.png";

function CardServHome(props) {

    function formatarValor() {

        const valor = parseFloat(props.proposta);

        return valor.toLocaleString("pt-BR", {

            style: "currency", 
            currency: "BRL"
        })
    }

    function limitarTesto(texto, limite) {

        if (texto.lenth >= limite) {

            return texto.substring(0, limite) + "..."

        }

        return texto;
    }

    return (

        <>

        <img src={imgAlfinete} alt=""></img>

        <h3>
            {limitarTesto(props.titulo, 45)}
        </h3>

        <p>
            {limitarTesto(props.descricao, 182)}
        </p>

        <p>
            {formatarValor()}
        </p>
        
        </>
    )
}

export default CardServHome;