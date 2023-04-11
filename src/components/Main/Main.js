import {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import Card from '../Card/Card';
import NavbarInfo from '../NavbarInfo/NavbarInfo';
import PartnerInfo from '../PartnerInfo/PartnerInfo';


function Main(
    {signOut, onCardClick, card, cards}) {
    
    const {pathname} = useLocation();
    const [width, setWidth] = useState(window.innerWidth);//ширина экрана
    
    const getloadStep = (width) => {
        if (width >= 1440) {
            return 8;
        } else if (width= 375) {
            return 4;
        } else {
            return 4;
        }
    }
    const getInitialCount = (width) => {
        if (width >= 1140) {
            return 8;
        } else if (width = 375) {
            return 4;
        } else {
            return 4;
        }
    }

    const [visibleCardCount, setvisibleCardCount] = useState(getInitialCount(width));//кол-во отображаемых карточек
    
    useEffect(() => {
        let timeoutId = null;
        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setWidth(window.innerWidth), 150);
        }
        window.addEventListener('resize', resizeListener)
        return() => {
            window.removeEventListener('resize', resizeListener)
        };
        
    }, [])
    
    function addMovies () {
        setTimeout(() => {
            setvisibleCardCount((prevCount) => prevCount + getloadStep(width));
        }, 600)
    }
    
    return (
        <main className="main__container">
            <NavbarInfo card = {card} signOut={signOut}/>
            <div className="main__elements">
                {
                    pathname == "/"
                        ?
                    <>
                        {cards.slice(0, visibleCardCount).map ((card) => {
                            return <Card 
                                onCardClick ={onCardClick}
                                card={card} key ={card.id}/>
                        })}
                    </>
                        :
                    pathname == "/profile"
                        ?
                            <PartnerInfo card={card}/>
                        :
                    null 
                }
            </div>
            {visibleCardCount < cards.length && (
                <button className="main__add-button" 
                    type="button"onClick={addMovies}>
                        Показать ещё 
                    <div className="main__add-button-component" alt="символ Показать ещё"></div>
                </button>
            )}
        </main>
    );
}

export default Main;