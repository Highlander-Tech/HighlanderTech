import React from 'react'
import { Form } from 'react-bootstrap';
import Header from './components/_header'
import Footer from './components/_footer'

export default function Orcamento() {
  return (<>
    <Header></Header>
    <div className="orcamento">
      <section id="nav">
        <button><div id="work" className="perfil" alt="PC Workstation"><h2>Workstation</h2></div></button>
        <button><div id="gamer" className="perfil" alt="PC Gamer"><h2>Gamer</h2></div></button>
      </section>
      <section id="orcamento">
        <h2>Orçamento</h2>
        <div id="contato">
          <Form>
            <Form.Group controlId="name">
              <Form.Label className="label">Nome</Form.Label>
              <Form.Control type="text" placeholder="Exemplo" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label className="label">E-mail</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="investimento">
              <Form.Label className="label">Investimento</Form.Label>
              <Form.Control as="select">
                <option>R$2000,00 a R$3500,00</option>
                <option>R$3500,00 a R$4000,00</option>
                <option>R$4000,00 a R$6500,00</option>
                <option>R$6500,00 ou mais</option>
                <option>Outro</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="descritivo">
              <Form.Label className="label">Descrição</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Finalidade do equipamento" />
            </Form.Group>
            <button>Enviar</button>
          </Form>
          <div id="dados">
            <h3>Dados</h3>
            <p>(51) 99141-9753</p>
            <p>highlandertechrs@gmail.com</p>
            <h3>Monte seu PC</h3>
            <p>Finalidade</p>
            <ul>
              <li>CAD</li>
              <li>Edição de Fotos</li>
              <li>Edição de Vídeos</li>
              <li>Games</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </>
  )
}
