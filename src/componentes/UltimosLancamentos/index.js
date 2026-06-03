import styled from 'styled-components'
import filme1 from '../../imagens/filme1.png'
import filme from '../../imagens/filme.png'

const lancamentos = [
    { nome: 'Mestre do Universo', id: 1, src: filme1 },
    { nome: 'O Retorno do Dev', id: 2, src: filme },
    { nome: 'Full Stack Wars', id: 3, src: filme },
    { nome: 'Node.js Reloaded', id: 4, src: filme }
]
const LancamentosContainer = styled.section`
background-color: #0F0F0F;
padding: 50px 0;
text-align: center;
`
const Titulo = styled.h2`
color: #E50914;
font-size: 32px;
`
const Filmes = styled.div`
display: flex;
justify-content: center;
gap: 30px;
flex-wrap: wrap;
`
const FilmeCard = styled.div`
background-color: #fff;
width: 180px;
padding: 20px;

border-radius: 10px;
`
const Capa = styled.img`
width: 100px;
`
function UltimosLancamentos() {
    return (
        <LancamentosContainer>
            <Titulo>Últimos Lançamentos</Titulo>
            <Filmes>
                {lancamentos.map(filme => (
                    <FilmeCard>
                        <Capa src={filme.src} alt={filme.nome} />
                        <p>{filme.nome}</p>
                    </FilmeCard>
                ))}
            </Filmes>
        </LancamentosContainer>
    )
}
export default UltimosLancamentos