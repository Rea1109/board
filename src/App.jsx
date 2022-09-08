import * as Styled from './App.style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Board from './components/board/Board';
import Navigation from './components/navigation/Navigation';
import Login from './components/login/Login';
import { useState } from 'react';
import SignUp from './components/login/SignUp';

const App = () => {
    const [isViewLogin, setIsViewLogin] = useState(false);
    const [isViewSignUp, setIsViewSignUp] = useState(false);
    return (
        <BrowserRouter>
            {isViewLogin && <Login setIsViewLogin={setIsViewLogin} setIsViewSignUp={setIsViewSignUp} />}
            {isViewSignUp && <SignUp setIsViewSignUp={setIsViewSignUp} />}
            <Navigation setIsViewLogin={setIsViewLogin} />
            <Styled.Main>
                <Routes>
                    <Route path="/" element={<Board />} />
                </Routes>
            </Styled.Main>
        </BrowserRouter>
    );
};

export default App;
