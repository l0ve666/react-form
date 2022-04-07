import '../app/app.css'
import {useNavigate} from "react-router-dom";


const Dashboard = () => {

    let home = useNavigate()
    const redirectHome = () => {
        home('/')
    }
    return (
        <div>
            <div className={'container-style'}>
                <div className={'container-left'}>
                    <button className={'button-left'}> <p className={'paragraph-text'}>test1</p> </button>
                    <button className={'button-left'}> <p className={'paragraph-text'}>test1</p> </button>
                    <button className={'button-left'}> <p className={'paragraph-text'}>test1</p> </button>
                    <button className={'button-left'}> <p className={'paragraph-text'}>test1</p> </button>
                    <button className={'button-left'}> <p className={'paragraph-text'}>test1</p> </button>
                    <button className={'button-left'} onClick={redirectHome} > <p className={'paragraph-text'}>Logout</p> </button>
                </div>
                <div className={'container-right'}>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;