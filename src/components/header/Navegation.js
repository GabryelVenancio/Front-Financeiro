import {profile, cardinsert, cardremove, about} from "../utils/Functions"
export default function Navegation(){
    return (
        <div className="navbar">
            <ul>
                <li><a href="#">STClube</a></li>
                <li><a href="#" onClick={profile}>Profile</a></li>
                <li><a href="#" onClick={cardinsert}>Insert Card</a></li>
                <li><a href="#" onClick={cardremove}>Remove Card</a></li>
                <li><a href="#" onClick={about}>About</a></li>
            </ul>
        </div>
    );
}