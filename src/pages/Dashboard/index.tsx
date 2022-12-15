import { Link } from "react-router-dom";
import { User } from "firebase/auth";


export const Dashboard = () => {
    return(
        <div>
            <h1 className="text-lg font-bold">Dashboard</h1>

            <p>Os dados vão ficar aqui</p>

            <Link to='/'>Votar</Link>
        </div>
    )
}