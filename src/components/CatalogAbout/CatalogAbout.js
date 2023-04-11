

function CatalogAbout() {
    
    const text = {
        title: 'Наша команда',
        description: `Это опытные специалисты, хорошо разбирающиеся во всех задачах,
        которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.`,
    }
    
    return (
        <div className ="catalogAbout">
            <h1 className="catalogAbout__title">{text.title}</h1>
            <p className="catalogAbout__description">{text.description}</p>
        </div>
    );
}

export default CatalogAbout;