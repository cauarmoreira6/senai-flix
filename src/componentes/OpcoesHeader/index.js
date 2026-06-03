import styled from 'styled-components'
const opcoes = ['FILMES', 'SÉRIES', 'FAVORITOS']
const Opcoes = styled.ul`
display: flex;
align-items: center;
`
const Opcao = styled.li`
list-style: none;
font-size: 16px;
margin: 0 20px;
cursor: pointer;
color: white;
`
function OpcoesHeader() {
    return (
        <Opcoes>
            {opcoes.map((texto) => (
                <Opcao>{texto}</Opcao>
            ))}
        </Opcoes>
    )
}
export default OpcoesHeader