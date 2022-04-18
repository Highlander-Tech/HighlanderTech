import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/_header'
import Footer from './components/_footer'

export default function root() {
  return (
    <div id="root">
      <Header></Header>
      <Container id="home">
        <div id="sobre">
          <img id="photo-home" src="./pctop.png" alt="High End PC" />
          <article>
            <h2>Quem somos</h2>
            <h1>Computador Gamer Porto Alegre</h1>
            <p>Somos uma empresa especializada na montagem de computadores de alta performance tanto para uso gamer quanto profissional.</p>
            <button>MAIS INFORMAÇÕES</button>
          </article>
        </div>
        <div id="navegar">
          <div className="card" id="primeiro">
            <img src="./computador.svg" alt="maquinapronta" />
            <h2>Maquinas montadas</h2>
            <p className="txtcard">Maquinas disponíveis a pronta entrega</p>
            <a href="/portifolio" class="cardbutton">MAIS</a>
          </div>
          <div className="card" id="segundo">
            <img src="./orçamento.svg" alt="orçamentos" />
            <h2>Orçamentos</h2>
            <p className="txtcard">Precisa de uma maquina sob medida? Fazemos orçamentos sem custo</p>
            <a href="/orcamento" class="cardbutton">MAIS</a>
          </div>
          <div className="card" id="terceiro">
            <img src="./warranty.svg" alt="garantia" />
            <h2>Garantia</h2>
            <p className="txtcard">Nós lhe daremos todo suporte pós-venda que precisar</p>
            <a href="/garantia" class="cardbutton">MAIS</a>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  )
}
