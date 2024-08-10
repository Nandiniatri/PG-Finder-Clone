// import { Button, Image, Layout, List } from 'antd';
// import React from 'react';
// import { UserOutlined, AreaChartOutlined, BankOutlined } from '@ant-design/icons';
// import VirtualList from 'rc-virtual-list';
// import './pg.css';

// const { Content } = Layout;
// const ContainerHeight = 400;

// const PGCard = ({ pg }) => {

//   return (
//     <Layout style={{ backgroundColor: 'white' }}>
//       <Content style={{ backgroundColor: 'white', marginTop: '20px' }} className='pgs-content'>
//         {/* <List>
//           <VirtualList
//             data={pgs}
//             height={ContainerHeight}
//             itemHeight={150} 
//             itemKey="id" 
//           > */}
//               <div className="pg-card" key={pg.id}>
//                 <div className="pg-card-img-div">
//                   <Image src={pg.images[0]} alt={pg.name} className="pg-card-img" />
//                 </div>
//                 <div className="pg-card-div2">
//                   <div>
//                     <div className="first">
//                       <p className="pg-card-location">{pg.location}</p>
//                       <p className="pg-card-gender">{pg.gender}<UserOutlined /></p>
//                     </div>
//                     <div className="button-container">
//                       <Button className="btn-description"><AreaChartOutlined /><p>{pg.details.description}</p></Button>
//                       <Button className="btn-room"><BankOutlined /><p>Rooms: {pg.available_rooms}</p></Button>
//                     </div>
//                   </div>
//                   <div className="Pg-Cart-btn">
//                     <div className="price-container">
//                       <p>Starts from</p>
//                       <h4 className="price">₹{pg.price_per_month}</h4>
//                     </div>
//                     <div className="buttons-container">
//                       <Button className="primary-btn">Schedule a Visit</Button>
//                       <Button className="secondary-btn">Request a callback</Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//           {/* </VirtualList>
//         </List> */}
//       </Content>
//     </Layout>
//   );
// };

// export default PGCard;



// import { Button, Image, Layout, List } from 'antd';
// import React from 'react';
// import { UserOutlined, AreaChartOutlined, BankOutlined } from '@ant-design/icons';
// import VirtualList from 'rc-virtual-list';
// import './pg.css';

// const { Content } = Layout;
// const ContainerHeight = 400;

// const PGCard = ({ pgs }) => {
//   return (
//     <Layout style={{ backgroundColor: 'white' }}>
//       <Content style={{ backgroundColor: 'white', marginTop: '20px' }} className='pgs-content'>
//         <VirtualList
//           data={pgs}
//           height={ContainerHeight}
//           itemHeight={150}
//           itemKey="id"
//           style={{border:'solid'}}
//         >
//           {(pg) => (
//             <>
//             <div className="pg-card" key={(item) => item.id}>
//               <div className="pg-card-img-div">
//                 <Image src={pg.images[0]} alt={pg.name} className="pg-card-img" />
//               </div>
//               <div className="pg-card-div2">
//                 <div>
//                   <div className="first">
//                     <h1>{pg.name}</h1>
//                     <p className="pg-card-location">{pg.location}</p>
//                     <p className="pg-card-gender">{pg.gender} <UserOutlined /></p>
//                   </div>
//                   <div className="button-container">
//                     <Button className="btn-description">
//                       <AreaChartOutlined />
//                       <p>{pg.details.description}</p>
//                     </Button>
//                     <Button className="btn-room">
//                       <BankOutlined />
//                       <p>Rooms: {pg.available_rooms}</p>
//                     </Button>
//                   </div>
//                 </div>
//                 <div className="Pg-Cart-btn">
//                   <div className="price-container">
//                     <p>Starts from</p>
//                     <h4 className="price">₹{pg.price_per_month}</h4>
//                   </div>
//                   <div className="buttons-container">
//                     <Button className="primary-btn">Schedule a Visit</Button>
//                     <Button className="secondary-btn">Request a callback</Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             </>
//           )}
//         </VirtualList>
//       </Content>
//     </Layout>
//   );
// };

// export default PGCard;













// import { Button, Image, Layout, List } from 'antd';
// import React, { useState } from 'react';
// import { UserOutlined, AreaChartOutlined, BankOutlined } from '@ant-design/icons';
// import VirtualList from 'rc-virtual-list';
// import './pg.css';

// const { Content } = Layout;
// const ContainerHeight = 400;

// const PGCard = ({ pgs }) => {
//   const [data , setData] = useState()
//   return (
//     <Layout style={{ backgroundColor: 'white' }}>
//       <Content style={{ backgroundColor: 'white', marginTop: '20px' }} className='pgs-content'>
//         <VirtualList
//           data={pgs}
//           height={ContainerHeight}
//           itemHeight={150}
//           itemKey="id"
//           style={{border:'solid'}}
//         >
//           {(pg) => (
//             <>
//             <div className="pg-card" key={(item) => item.id}>
//               <div className="pg-card-img-div">
//                 <Image src={pg.images[0]} alt={pg.name} className="pg-card-img" />
//               </div>
//               <div className="pg-card-div2">
//                 <div>
//                   <div className="first">
//                     <h1>{pg.name}</h1>
//                     <p className="pg-card-location">{pg.location}</p>
//                     <p className="pg-card-gender">{pg.gender} <UserOutlined /></p>
//                   </div>
//                   <div className="button-container">
//                     <Button className="btn-description">
//                       <AreaChartOutlined />
//                       <p>{pg.details.description}</p>
//                     </Button>
//                     <Button className="btn-room">
//                       <BankOutlined />
//                       <p>Rooms: {pg.available_rooms}</p>
//                     </Button>
//                   </div>
//                 </div>
//                 <div className="Pg-Cart-btn">
//                   <div className="price-container">
//                     <p>Starts from</p>
//                     <h4 className="price">₹{pg.price_per_month}</h4>
//                   </div>
//                   <div className="buttons-container">
//                     <Button className="primary-btn">Schedule a Visit</Button>
//                     <Button className="secondary-btn">Request a callback</Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             </>
//           )}
//         </VirtualList>
//       </Content>
//     </Layout>
//   );
// };

// export default PGCard;









// import React, { useEffect, useState } from 'react';
// import { Avatar, Image, List, message ,  Button} from 'antd';
// import VirtualList from 'rc-virtual-list';
// import { UserOutlined, AreaChartOutlined, BankOutlined } from '@ant-design/icons';
// import './pg.css';



// const ContainerHeight = 400;

// const PGCard = ({ pgs }) => {
//   const [data, setData] = useState([]);
//   const [loading , setLoading] = useState(false);

//   function appendData() {
//     setData((prevDatas) => [...prevDatas, ...pgs])
//   }

//   useEffect(() => {
//     appendData();
//   }, [pgs]);

//   const onScroll = (e) => {
//     if (!loading && (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight)) <= 1) {
//       setLoading(true)
//       setTimeout(() => {
//         setLoading(false)
//         appendData()
//       },300)
//     }
//   };

//   return (
//     <List>
//     <VirtualList
//       data={data}
//       height={ContainerHeight}
//       itemHeight={47}
//       itemKey="id"
//       onScroll={onScroll}
//     >
//       {(pg) => (
//         <List.Item key={(item) => item.id}>
//           <div className="pg-card">
//             <div className="pg-card-img-div">
//               <Image src={pg.images[0]} alt={pg.name} className="pg-card-img" />
//             </div>
//             <div className="pg-card-div2">
//               <div>
//                 <div className="first">
//                   <p className="pg-card-location">{pg.location}</p>
//                   <p className="pg-card-gender">{pg.gender} <UserOutlined /></p>
//                 </div>
//                 <div className="button-container">
//                   <Button className="btn-description">
//                     <AreaChartOutlined />
//                     <p>{pg.details.description}</p>
//                   </Button>
//                   <Button className="btn-room">
//                     <BankOutlined />
//                     <p>Rooms: {pg.available_rooms}</p>
//                   </Button>
//                 </div>
//               </div>
//               <div className="Pg-Cart-btn">
//                 <div className="price-container">
//                   <p>Starts from</p>
//                   <h4 className="price">₹{pg.price_per_month}</h4>
//                 </div>
//                 <div className="buttons-container">
//                   <Button className="primary-btn">Schedule a Visit</Button>
//                   <Button className="secondary-btn">Request a callback</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </List.Item>
//       )}
//     </VirtualList>
//     </List>
//   );
// };

// export default PGCard

import React, { useState, useEffect } from 'react';
import { Avatar, Image, List, Button } from 'antd';
import VirtualList from 'rc-virtual-list';
import { UserOutlined, AreaChartOutlined, BankOutlined } from '@ant-design/icons';
import './pg.css';

const ContainerHeight = 400;

const PGCard = ({ pgs, setPgs }) => {
  const [scroll, setScroll] = useState([]);
  const [loading, setLoading] = useState(false);

  const appendData = () => {
    setScroll((prevData) => [...prevData, ...pgs]);
  };

  useEffect(() => {
    setScroll(pgs);
  }, [pgs]);

  const onScroll = (e) => {
    if (!loading && (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight)) <= 1) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        appendData();
      }, 300);
    }
  };

  return (
    <List>
      <VirtualList
        data={scroll}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="id"
        onScroll={onScroll}
      >
        {(pg) => (
          <List.Item key={pg.id}>
            <div className="pg-card">
              <div className="pg-card-img-div">
                <Image src={pg.images[0]} alt={pg.name} className="pg-card-img" />
              </div>
              <div className="pg-card-div2">
                <div>
                  <div className="first">
                    <p className="pg-card-location">{pg.location}</p>
                    <p className="pg-card-gender">
                      {pg.gender} <UserOutlined />
                    </p>
                  </div>
                  <div className="button-container">
                    <Button className="btn-description">
                      <AreaChartOutlined />
                      <p>{pg.details.description}</p>
                    </Button>
                    <Button className="btn-room">
                      <BankOutlined />
                      <p>Rooms: {pg.available_rooms}</p>
                    </Button>
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
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default PGCard;
