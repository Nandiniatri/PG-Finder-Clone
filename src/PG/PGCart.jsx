import { Button, Image, Layout } from 'antd';
import React from 'react';
import { UserOutlined, AreaChartOutlined, BankOutlined } from '@ant-design/icons';

const { Content } = Layout;

const PGCard = ({ pg }) => {
  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <Content style={{ backgroundColor: 'white', marginTop: '20px' }} className='pgs-content'>
        <div className="pg-card">
          <div className="pg-card-img-div">
            <Image src={pg.images[0]} alt={pg.name} className="pg-card-img" />
          </div>
          <div className="pg-card-div2">
            <div>
              <div className="first">
                <p className="pg-card-location">{pg.location}</p>
                <p className="pg-card-gender">{pg.gender}<UserOutlined /></p>
              </div>
              <div className="button-container">
                <Button className="btn-description"><AreaChartOutlined /><p>{pg.details.description}</p></Button>
                <Button className="btn-room"><BankOutlined /><p>Rooms: {pg.available_rooms}</p></Button>
              </div>
            </div>
            <div className="Pg-Cart-btn">
              <div className="price-container">
                <p>Starts from</p>
                <h4 className="price">₹{pg.price_per_month}</h4>
              </div>
              <div className="buttons-container">
                <Button className="primary-btn">Schedule a Visit</Button>
                <Button className="secondary-btn">Request a callback</Button>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default PGCard;
