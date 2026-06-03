import styled from 'styled-components'
import logo from '../../imagens/logo.png'
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-size: 28px;
    `
const LogoImagem = styled.img`
    width: 45px;
    margin-right: 10px;
    `
function Logo() {
    return (
        <LogoContainer>
            <LogoImagem src={logo} alt="Logo SENAI Flix" />
            <p><strong>CAUÃ</strong> Flix</p>
        </LogoContainer>
    )
}

export default Logo