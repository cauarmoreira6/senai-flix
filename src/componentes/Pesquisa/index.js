import { useState } from 'react'
import styled from 'styled-components'
import Input from '../Input'
import { filmes } from './dadosPesquisa'
const PesquisaContainer = styled.section`
background-image: linear-gradient(90deg, #141e30, #243b55);
color: #fff;
text-align: center;
padding: 80px 0;
`
const Titulo = styled.h2`
font-size: 36px;
`
const Subtitulo = styled.h3`
font-size: 18px;
font-weight: 400;
margin-bottom: 35px;
`
const Resultado = styled.div`
display: flex;
justify-content: center;
gap: 25px;
margin-top: 30px;
flex-wrap: wrap;
`

const CardFilme = styled.div`
width: 180px;
background-color: #fff;
color: #111;
padding: 15px;
border-radius: 10px;
`
const CapaFilme = styled.img`
width: 100px;
`
function Pesquisa() {
    const [filmesPesquisados, setFilmesPesquisados] = useState([])
    return (
        <PesquisaContainer>
            <Titulo>Qual filme você quer assistir?</Titulo>
            <Subtitulo>Encontre filmes disponíveis no catálogo.</Subtitulo>
            <Input
                placeholder="Digite o nome do filme"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = filmes.filter(filme =>
                        filme.nome.toLowerCase().includes(textoDigitado.toLowerCase())
                    )
                    setFilmesPesquisados(resultadoPesquisa)
                }}
            />
            <Resultado>
                {filmesPesquisados.map(filme => (
                    <CardFilme>
                        <p>{filme.nome}</p>
                        <CapaFilme src={filme.src} alt={filme.nome} />
                    </CardFilme>
                ))}
            </Resultado>
        </PesquisaContainer>
    )
}
export default Pesquisa