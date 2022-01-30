import styled from 'styled-components'

export const Header = styled.header`
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  background-color: var(--white);
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 300px;

  a {
    text-decoration: none;
    color: var(--black);
    font-size: 1.15rem;
    font-weight: 500;
    transition: all ease 0.3s;
  }

  a:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Container = styled.div`
  width: 1268px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 1280px) {
    padding: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 375px;
  }
`

export const Burguer = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
