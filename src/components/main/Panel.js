export default function Panel(props){
    
    var caminho = "./img/visa.png"; 

    if (props.data.cardname === "") {
        caminho = "./img/mastercard.png";

    } else if (props.data.cardname === "Visa Platinum") {
        caminho = "./img/visa.png";

    } else {
        caminho = "./img/mastercard.png";
    }

    return (
        <div className="panel">
            <img src={caminho} />
            {console.log(caminho)}
        </div>
    )
}