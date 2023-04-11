
import {useState} from 'react';

function Card({onCardClick, card}) {
    
    const [like, setLike] = useState(false); //сердечко профиля

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        setLike(!like)
    }
    

    return (
        <article className="card">
            <div className="card__info" onClick={handleClick}>
                <img  className="card__image" src={card.avatar} alt={card.avatar}/>
                <h2 className="card__name">{card.first_name}{' '}{card.last_name}</h2>
            </div>
            <div className="card__like-container">
                    <button
                        className = {like ? 'card__like_active' : 'card__like'}
                        onClick={handleLikeClick}
                        type ="button" aria-label="like"
                    />
                </div>
        </article>
    );
}

export default Card;