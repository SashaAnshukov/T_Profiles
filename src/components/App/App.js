import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import Main from '../Main/Main';
import NavbarInfo from '../NavbarInfo/NavbarInfo';
import PartnerInfo from '../PartnerInfo/PartnerInfo';
import * as Auth from '../utils/Auth';
import api from '../utils/Api';

function App() {

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false); //вход в систему пользователем
  const [checkToken, setCheckToken] = useState(false); //проверка токена
  const [cards, setCards] = useState([]); //карточки с данными
  const [selectedCard, setSelectedCard] = useState({first_name:'', last_name:'', avatar: ''});//выбранная карточка

  /////////регистрация
  function registration(email, password) {
    console.log('email-',email, 'pass-', password)
    Auth.register(email, password)
    .then((response) => {
      setLoggedIn(true);
      navigate('/');
      console.log(response)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    });
  }

  //проверка валидности токена
  useEffect(() =>{
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      setCheckToken(true)
      // проверим токен
      Auth.tokenCheck (jwt).then((res) => {
        setLoggedIn (true);
        navigate('/');
      })
      .catch(err => {
        console.log (`Ошибка: ${err}`)
      })
    }
  }, [])

  /////////получение карточек
  useEffect(() => {
    if (loggedIn) {
      api.getInitialCards().then((res) => {
        console.log(res[0].concat(res[1]))
        setCards(res[0].concat(res[1]));
      })
      .catch(err => {
          console.log (`Ошибка: ${err}`)
      })
    }
  }, [loggedIn])

  /////////просмотр конкретного профиля
  const handleCardClick  = (card) => {setSelectedCard(card); navigate('profile')};

  /////////выход
  function signOut() {
    setLoggedIn (false);
    localStorage.clear()
  }

  return (
    <div className="App">
        <Routes >
          <Route exact path='/signup' element = {<Register registration = {registration}/>} />
          
          <Route exact path='/' element= {
            <ProtectedRoute loggedIn={loggedIn} checkToken={checkToken}>
              <Main
                cards={cards} 
                onCardClick ={handleCardClick} 
                signOut={signOut}  
              />
            </ProtectedRoute>
          }/>

          <Route exact path='/profile' element = {
            <ProtectedRoute loggedIn={loggedIn} >
              <NavbarInfo card = {selectedCard} />
              <PartnerInfo card = {selectedCard} />
            </ProtectedRoute> 
          }/>

          <Route path="/"
            element={loggedIn ? <Navigate to="/" /> : <Navigate to="/signup" />}
          />

        </Routes>
    </div>
  );
}

export default App;
