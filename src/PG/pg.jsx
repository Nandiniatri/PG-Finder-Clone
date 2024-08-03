// import { useContext } from 'react';
import './pg.css';
import { Button, Image, Layout } from 'antd';
// import { UserContext } from '../App';
import { UserOutlined, ArrowsAltOutlined } from '@ant-design/icons';
import PGCard from './PGCart';

const { Content } = Layout;


const PGData = ({pgs}) => {
    return (
        <Layout>
            <Content style={{backgroundColor:'white'}}>
            <h1 style={{marginLeft:'25px' , marginTop:'25px'}}>PGs is waiting for you</h1>
            <div className="pg-list">
                {pgs.map(pg => (
                    <PGCard key={pg.id} pg={pg} />
                ))}
                </div>
            </Content>
        </Layout>
    );
}

export default PGData;







//  <div className="PG-Main-Container"> 
//  <div>
//      <h1>4 PGs are waiting for you</h1>
//  </div>

//  <div className="PG-Main-Container-innerDivss">
//      {userData.pgData.map((item) => {
//          return (
//              <div key={item.id} className='AllPGDiv'>

//                  <div className='AllPG-Image-div'>
//                      <Image style={pgImageStyle} src={item.img} />
//                  </div>
//                  <div className='AllPG-Details-divs'>

             
//                      <div className='AllPG-Details-div'>
                         
//                          <div className="first">
//                              <div className='first-Div1'>
//                                  <span style={firstSpanStyle}>{item.title}</span>
//                                  <p style={firstPStyle}>{item.subTitle}</p>
//                              </div>
//                              <div>
//                                  <Button style={genderBtnStyle}>{item.gender}<UserOutlined /></Button>
//                              </div>
//                          </div>
                         

//                          <div className="sec">
//                              <a target="_blank" href='https://www.google.com/maps/place/Stanza+Living+Taiping+House/@28.445494,77.0472862,15z/data=!4m6!3m5!1s0x390d197144c3e109:0xec84aa501ac5993!8m2!3d28.4454984!4d77.0472983!16s%2Fg%2F11ss2f97xg?entry=ttu'><Button style={secBtnStyle}><ArrowsAltOutlined /><p>View Directions</p>  </Button> </a>
//                          </div>
                        


                       
//                          <div className="third">
//                              <Button style={thirdBtn1Style}><i class="fa fa-bath"></i>{item.bathRoom}</Button>
//                              <Button style={thirdBtn2Style}><i class="fa fa-bed"></i>{item.bad}</Button>
//                          </div>
                         


                
//                          <div className="forth">
//                              <div>
//                                  <span style={forthSpanStyle}>{item.start}</span>
//                                  <p style={forthPStyle}>{item.money}</p>
//                              </div>
//                              <div className='forth-div2'>
//                                  <Button style={forthBtn1Style}>SCHEDULE A VISIT</Button>
//                                  <Button style={forthBtn2Style}>REQUEST A CALLBACK</Button>
//                              </div>
//                          </div>
                         
//                      </div>
//                  </div>
//              </div>
//          )
//      })}
//  </div>

// </div>