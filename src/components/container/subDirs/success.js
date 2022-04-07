import {useNavigate} from "react-router-dom";

const Success = () =>{

    let main = useNavigate()
    const redirectMain = () => {
        main('/')
    }
    return(
        <div>
            <p style={{fontSize:20}}>Completed Registration</p>
            <button onClick={()=>redirectMain()} style={{marginLeft:30}}>Go Back</button>
        </div>

    )
}

export default Success