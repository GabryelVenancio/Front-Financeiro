export default function Panel(props){
    
    var caminho = "./img/bandeiravisa.png";

    if (props.data.cardname == "") {
        caminho = "./img/bandeira.png";

    } else if (props.data.cardname == "Visa Platinum") {
        caminho = "./img/bandeiravisa.png";

    } else {
        caminho = "./img/bandeira.png";
    }

    return (
        <div className="panel">
            <img src={caminho} />
            {console.log(caminho)}
        </div>
    )
}