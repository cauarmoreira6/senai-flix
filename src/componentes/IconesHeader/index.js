import styled from 'styled-components'
import perfil from '../../imagens/perfil.png'
import favorito from '../../imagens/favorito.png'
const icones = [perfil, favorito]
const Icones = styled.ul`
display: flex;
align-items: center;
`
const Icone = styled.li`
list-style: none;
margin-left: 25px;
cursor: pointer;
`
const IconeImagem = styled.img`
width: 28px;
filter: invert(1);
`
function IconesHeader() {
    return (
        <Icones>
            {icones.map((icone) => (
                <Icone>
                    <IconeImagem src={icone} alt="ícone" />
                </Icone>
            ))}
        </Icones>
    )
}
export default IconesHeader