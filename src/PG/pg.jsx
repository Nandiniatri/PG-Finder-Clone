// // import { useContext } from 'react';
// import './pg.css';
// import { Button, Image, Layout } from 'antd';
// // import { UserContext } from '../App';
// import { UserOutlined, ArrowsAltOutlined } from '@ant-design/icons';
// import PGCard from './PGCart';

// const { Content } = Layout;


// const PGData = ({pgs}) => {
//     return (
//         <Layout>
//             <Content style={{backgroundColor:'white'}}>
//             <h1 style={{marginLeft:'25px' , marginTop:'25px'}} className='pgs-h1'>PGs is waiting for you</h1>
//             <div className="pg-list">
//                 {pgs.map(pg => (
//                     <PGCard key={pg.id} pg={pg} />
//                 ))}
//                 </div>
//             </Content>
//         </Layout>
//     );
// }

// export default PGData;

// PGData.jsx
import React from 'react';
import PGCard from './PGCart';
// import PGCard from './PGCard'; 

const PGData = ({ pgs }) => {
  return (
    <div>
      {pgs.map(pg => (
        // <PGCard key={pg.id} pg={{ pgs: [pg] }} />
        <PGCard key={pg.id} pg={{ pgs: [pg] }} />
      ))}
    </div>
  );
};

export default PGData;


