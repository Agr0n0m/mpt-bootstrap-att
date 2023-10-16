import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <div className='container'>
      <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>

        <div className='col-md-3 mb-3'>
          <a href='/'>
            <img src='img/logo.png' className='bi me-2' width={180} alt=''></img>
          </a>
        </div>

        <div className='col-md-3 mb-3' id='footer_label'>
        <p>Мы и наши сотрудники искренне стремимся удовлетворять все потребности наших клиентов.</p>
        </div>

        <div className='col-md-3 mb-3' id="adress">
            <p>Адрес:</p>
            <p>г. Москва, ул. Тверская, дом. 1</p>
            <p>+1(234)567-89-99</p>
            <p>support@support.com</p>  
        </div>
        
        <div className='col-md-3 mb-3' id="soc_media">
            <p>Наши соцсети</p>
						<a class="vk" href="/">
              <img src="img/VK.png" alt="ВКонтакте" title="ВКонтакте"></img></a>
            <a class="ok" href="/">
              <img src="img/Ok.png" alt="Одноклассники" title="Одноклассники"></img></a>
            <a class="tg" href="/">
              <img src="img/Telegram.png" alt="Телеграмм" title="Телеграмм"></img></a>
        </div>
      </footer>
    </div>
  )
}

export default Footer