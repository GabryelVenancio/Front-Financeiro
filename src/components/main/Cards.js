export default function Cards(props){

    const passarDados = (pr) => {
        props.action(pr);
    }


    return (
        <div className="cards">
            <h2>Cartões</h2>
        {props.data.map((itens,ix)=>(
                <div key={ix} onClick={() => passarDados(itens)}>
                    <h3>{itens.cardname}</h3>
                    <p>{itens.balance}</p>
                    <p>{itens.cardlimit}</p>
                    <p>{
                      itens.cardname.substring(0,4) === "Visa" ? 
                      <img src= "../img/bandeiravisa.png" alt="" /> : 
                      <img src="../img/bandeira.png" alt="" />  
                       }
                      </p>
                </div>
        ))}
        </div>
    );
};
