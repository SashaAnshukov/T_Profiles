import { Link, useLocation } from "react-router-dom";
import CatalogAbout from '../CatalogAbout/CatalogAbout';
import ProfileData from '../ProfileData/ProfileData';

function NavbarInfo({card, signOut}) {
    
    const {pathname} = useLocation();

    return (
        <div className="NavbarInfo__container">
            <div  className="NavbarInfo__header">
                {pathname == "/" ? <div className="NavbarInfo__but"></div> : null}
                <div className="NavbarInfo__info">
                    {pathname == "/profile" ? <Link to='/' className="NavbarInfo__button">Назад</Link> : null}
                    {pathname == "/profile" ? <Link to='/' className="NavbarInfo__button-back"></Link> : null}
                    {
                        pathname == "/"
                            ?
                                <CatalogAbout />
                            :
                        pathname == "/profile"
                            ?
                                <ProfileData card={card}/>
                            :
                        null
                    }
                </div>
                <Link to='/signup' onClick= {signOut} className="NavbarInfo__button">Выход</Link>
                <Link to='/signup' onClick= {signOut} className="NavbarInfo__button-out"></Link>
            </div>
        </div>
    );
}

export default NavbarInfo;