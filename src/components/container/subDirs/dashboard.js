import '../../app/app.css'
import {useNavigate} from "react-router-dom";


const Dashboard = () => {

    let home = useNavigate()
    const redirectHome = () => {
        home('/')
    }

    let user = JSON.parse(localStorage.getItem('newInfo'))


    return (
        <div>
            <div className={'container-style'}>
                <div className={'container-left'}>
                    <button className={'button-left'}><p className={'paragraph-text'}>test1</p></button>
                    <button className={'button-left'}><p className={'paragraph-text'}>test1</p></button>
                    <button className={'button-left'}><p className={'paragraph-text'}>test1</p></button>
                    <button className={'button-left'}><p className={'paragraph-text'}>test1</p></button>
                    <button className={'button-left'}><p className={'paragraph-text'}>test1</p></button>
                    <button className={'button-left'} onClick={redirectHome}><p className={'paragraph-text'}>Logout</p>
                    </button>
                </div>
                <div className={'container-right'}>
                    <div className={'container-right-data'}>
                        <h1 className={'h1'}>Login data of user</h1>
                        <h5 className={'h5'}>{`User's Name = ` + user.name}</h5>
                        <h5 className={'h5'}>{`User's Password = ` + user.password}</h5>
                        <h5 className={'h5'}>{`User's Id = ` + user.id }</h5>
                        <h5 className={'h5'}>{`User's Email = ` + user.email}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;