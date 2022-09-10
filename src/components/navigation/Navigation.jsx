import LockPersonIcon from '@mui/icons-material/LockPerson';
import { useContext, useState } from 'react';
import * as Styled from './Navigation.style';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { replaceName } from '../../commons/utility';

const Navigation = ({ setIsViewLogin }) => {
    const route = useNavigate();

    const { isLogin, userInfo, setIsLogin, setUserInfo } = useContext(UserContext);
    const [isMenuView, setIsMenuView] = useState(false);

    const onClickMenu = event => {
        if (event.target.innerText === '로그아웃') {
            setIsLogin(false);
            setUserInfo({});
            localStorage.clear();
        }
        setIsMenuView(false);
        route('/');
    };
    return (
        <Styled.Navigation>
            <Link to="/">
                <Styled.Logo>SQUARES</Styled.Logo>
            </Link>
            {isLogin ? (
                <Styled.AvatarContainer>
                    <Styled.Avatar isBorder={isMenuView} onClick={() => setIsMenuView(pre => !pre)}>
                        <span>{replaceName(userInfo.name)}</span>
                    </Styled.Avatar>
                    {isMenuView && (
                        <Styled.AvatarMenu>
                            <ul>
                                <Styled.MenuList onClick={onClickMenu}>내 정보</Styled.MenuList>
                                <Styled.MenuList onClick={onClickMenu}>내가 쓴글</Styled.MenuList>
                                <Styled.MenuList onClick={onClickMenu}>로그아웃</Styled.MenuList>
                            </ul>
                        </Styled.AvatarMenu>
                    )}
                </Styled.AvatarContainer>
            ) : (
                <Styled.LoginButton onClick={() => setIsViewLogin(true)} size="small" startIcon={<LockPersonIcon />}>
                    로그인 / 회원가입
                </Styled.LoginButton>
            )}
        </Styled.Navigation>
    );
};

export default Navigation;
