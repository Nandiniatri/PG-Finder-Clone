import { Button, Dropdown, Flex, Image, Input, Menu, Space } from "antd";
import { Layout } from "antd";
import {
    SearchOutlined,
    DownOutlined
} from '@ant-design/icons';
import './headerFile.css';

const { Header } = Layout;
const {Search} = Input;

const imageStyle = {
    width:'100px'
}

const headerStyle = {
    backgroundColor:'white',
    height:'100px'
}

// const searchStyle = {
//     border:'solid red',
//     display:'flex',
//     alignItem:'center',
//     width:'80%',
//     padding:'20px'
// }

const searchStyle = {
    // border: 'solid red',
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    // padding: '20px',
    '.ant-input': {
      height: '60px' // Add this line
    }
  }
  
// DropDownData
const items = [
    {
        key:'1',
        label: (
            <a href="#aboutUs">About Us</a>
        )
    },
    {
        key:'2',
        label:(
            <a href="#ourTeam">Our Team</a>
        )
    },
    {
        key:'3',
        label:(
            <a href="partner">Partner With Us</a>
        )
    }
]

const HeaderFile = () => {
    return (
        <>
            <Layout> 
                <Header className="header" style={headerStyle}>

                    <Image.PreviewGroup>
                        <Image style={imageStyle} src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Fw_220%2Cf_auto%2Cq_auto%2Fv1583405334%2FNewWebsite%2FStanza_Living_Logo_3x.png&w=1920&q=75" alt="stanzaLogo"/>
                    </Image.PreviewGroup>

                    {/* <div className="search-container"> */}
                        <Search 
                            placeholder="Search..." 
                            enterButton="Search" 
                            size="large"
                            suffix={<SearchOutlined />}
                            style={searchStyle}
                        />
                    {/* </div> */}

                    <Dropdown 
                    menu={{
                        items,
                    }}>
                        <a href="#knowMore">
                            <Space>
                                Know More
                                < DownOutlined />
                            </Space>
                        </a>
                        
                    </Dropdown>

                </Header>
            </Layout>
        </>
    )
}

export default HeaderFile;