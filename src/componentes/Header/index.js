import styled from 'styled-components'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
const HeaderContainer = styled.header`
background-color: #141414;
color: #E50914;
display: flex;
align-items: center;
justify-content: center;

gap: 40px;
padding: 15px 0;
`
function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}
export default Header