import React from 'react';
import './map.module.scss';

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__info">
        <h2>Контакты</h2>
        <h3>Оптовый поставщик «Султан»</h3>
        <div className="contacts__details">
          <div className="contacts__address">
            <p><strong>Адрес:</strong></p>
            <p>г. Кокшетау, ул. Ж. Ташенова 129Б (Рынок Восточный)</p>
          </div>
          <div className="contacts__sales">
            <p><strong>Отдел продаж:</strong></p>
            <p>+7 (777) 490-00-91</p>
            <p>opt.sultan@mail.ru</p>
          </div>
          <div className="contacts__tax">
            <p><strong>Данные налогоплательщика:</strong></p>
            <p>ИП Катран Д.С.</p>
            <p>ИИН: 860113450858</p>
          </div>
        </div>
      </div>
      <div className="contacts__map">
        <img src="/images/map.png" alt="Map" />
      </div>
    </div>
  );
};

export default Contacts;
