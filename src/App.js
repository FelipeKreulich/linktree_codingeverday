import './App.css';

import Logo from './images/Logo.png';
import Discord from './images/DiscordIcon.png';
import Instagram from './images/InstagramIcon.png';
import Books from './images/BooksIcon.png';
import Book from './images/BookIcon.png';
import Site from './images/SiteIcon.png';

import 'animate.css';

function App() {
  return (
    <div className="App">
      <div className='card animate__animated animate__backInDown'>
        <div className='card_body'>
          <div className='profile text-center'>
            <img src={Logo} alt='Coding Everday' className='avatar' />
            <div className='bg_content rd_12 p_8'>
              <h1>Fique por <span className='text-color'>dentro de tudo</span> que acontece aqui!</h1>
              <p>Coding Everday</p>
            </div>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://discord.gg/UPzWZefR4p'>
              <img src={Discord} alt='Instagram' className='icons' />
              <span>Entre em Nossa Comunidade do Discord</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://www.instagram.com/codingeverday_/'>
              <img src={Instagram} alt='Parceiros' />
              <span>Acesse nosso Instagram e Aproveite o Conteúdo</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://drive.google.com/drive/folders/1OnzpX6B3136iugI6vOkdvF_cZizbQf7j?usp=sharing'>
              <img src={Books} alt='Calendário' className='icons' />
              <span>Materiais de Estudo Gratuitos para Você</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://dozeroaocodigo.tech/'>
              <img src={Book} alt='Time' className='icons' />
              <span>Curso de Algoritmo e Lógica da Coding Everday</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://codingeverday.site/'>
              <img src={Site} alt='Whatsapp' className='icons' />
              <span>Acesse nosso Website e Veja as Notícias</span>
            </a>
          </div>
          <div className='contact'>
            <span>Entre em contato em: <span className='text-color'>contato@codingeverday.site</span></span>
          </div>
          <div className='footer bg_content'>
            <p>Designed by ❤️ Coding Everday - 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;