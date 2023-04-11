

function ProfileData({card}) {
    
    return (
        <section className="profileData">
            <div className="profileData__space">
                <div className = "profileData__holder">
                    <div className = "profileData__round">
                        <img className="profileData__avatar" src={card.avatar} alt="Аватар партнера"/>
                    </div> 
                </div>    
                    <div className="profileData__info">
                    <h1 className="profileData__title">{card.first_name}{' '}{card.last_name}</h1>
                    <p className="profileData__subtitle">Партнер</p>
                </div>
            </div>
        </section>
    );
}

export default ProfileData;