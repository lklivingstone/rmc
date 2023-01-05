import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Admin.css"
import { logOut } from "../../redux/userRedux";


const Admin = () => {

    const user= useSelector((state)=> state.user.user.username)

    const dispatch= useDispatch()

    const navigate= useNavigate()

    const handleClick=(e)=>{
	    e.preventDefault();
        dispatch(logOut())

        navigate("/login")
	}  

    return (
        <>
            <nav className="navigation">
                <a href="/" className="brand-name">
                    ST
                </a>
            
                <div className="navigation-menu">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/bachelor">Bachelor</a>
                        </li>
                        <li>
                            <button style={{backgroundColor: "white", padding: "10px 25px", fontSize: "16px"}} onClick={handleClick} >Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div>
                
            </div>
        </>
    )
}

export default Admin