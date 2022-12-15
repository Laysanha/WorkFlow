import { Link } from "react-router-dom"

export const Dashboard = () => {
    return(
        <div>
            <h1 className="text-lg font-bold">Dashboard</h1>
            <p className="text-sm">Que tenha um bom dia otário!</p>
            <Link to='/'>Votar</Link>
        </div>
    )
}