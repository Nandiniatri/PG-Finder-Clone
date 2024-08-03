import { Button, Dropdown, Input, Space } from 'antd'
import './filter.css'
import {
    SearchOutlined,
    DownOutlined
} from '@ant-design/icons';
import CustomMultiSelect from '../CustomMultiSelect/CustomMultiSelect';



const Filter = ({ filters, onChange }) =>{

    const handleLocationChange = (newLocations) => {
        onChange('location', newLocations); 
      };
    
      const handleBudgetChange = (newBudgets) => {
        onChange('budget', newBudgets); 
      };
    
      const handleAmenitiesChange = (newAmenities) => {
        onChange('amenities', newAmenities);
      };
    
      const handleGenderChange = (newGenders) => {
        onChange('gender', newGenders);
      };

      return (
        <div className="filter-panel">
          <CustomMultiSelect
            options={['Downtown', 'Suburb', 'Campus']}
            selectedOptions={filters.location}
            onChange={handleLocationChange}
            label="Location"
          />
    
          <CustomMultiSelect
            options={['Low', 'Medium', 'High']}
            selectedOptions={filters.budget}
            onChange={handleBudgetChange}
            label="Budget"
          />
    
          <CustomMultiSelect
            options={['Air Conditioning', 'Hot Meals', 'High-Speed WiFi', 'Laundry Service']}
            selectedOptions={filters.amenities}
            onChange={handleAmenitiesChange}
            label="Amenities"
          />

          <CustomMultiSelect
            options={['Male' , 'Female' , 'Any']}
            selectedOptions={filters.gender}
            onChange={handleGenderChange}
            label="Gender"
          />

          <div className="price">
            <label>
              Price Range:
            </label>

            <input
                type="range"
                name="price_range"
                min="0"
                max="2000"
                value={filters.price_range}
                onChange={(e) => onChange('price_range', e.target.value)}
              />
              <span>₹{filters.price_range}</span>
          </div>
      
    
          {/* <label>
            Move-in Date:
            <input
              type="date"
              name="move_in_date"
              value={filters.move_in_date}
              onChange={(e) => onChange('move_in_date', e.target.value)}
            />
          </label> */}
        </div>
      );
    };

export default Filter


            // <Dropdown
            // menu={{items:localityItems}} trigger={['click']}
            // >
            //     <Space>
            //         <Button style={dropDownButtonStyle}> Locality < DownOutlined style={downIconStyle}/> </Button>
            //     </Space>
            // </Dropdown>
            // const ItemButtonStyle = {
//     cursor:'pointer',
//     border: '1px solid rgb(232, 232, 232)',
//     borderRadius: '100vw',
//     padding: '11px 24px',
//     marginRight: '12px',
//     marginTop: '12px',
//     backgroundColor: 'rgb(255, 255, 255)',
//     fontSize: '14px',
//     lineHeight: '18px',
//     color: 'rgb(41, 45, 50)'
// }

// const dropDownButtonStyle = {
//     height: '50px',
//     padding: '14px 20px',
//     borderRadius: '4.5em',
//     border: '1px solid rgb(232, 232, 232)',
//     fontSize: '16px',
//     lineHeight: '21px',
//     color: 'rgb(41, 45, 50)',
//     display: 'flex',
//     alignItems: 'center',
//     whiteSpace: 'nowrap',
//     fontFamily: 'Font-Light',
//     cursor: 'pointer',
//     transition: '0.2s',
// };




// const [isSelected , setIsSelected] = useState(0);
// const userData = useContext(UserContext);
// console.log(userData);

// function handleClick(index){
//     setIsSelected(index);
// }
// // buttonData
{/* <div style={filterMainDivStyle}>
            <div className="filterMainDivStyle-div1">

                <Button style={PgButtonStyle} 
                className = {isSelected === 0 ? 'selectedButton' : ''}
                onClick={() => handleClick(0)}>PG/Hostels</Button> 
                
                <Button style={PgButtonStyle}  className = {isSelected === 1 ? 'selectedButton' : ''}
                onClick={() => handleClick(1)}>Flats</Button>

                <Button style={PgButtonStyle}  className = {isSelected === 2 ? 'selectedButton' : ''}
                onClick={() => handleClick(2)}>Female PG</Button>

                <Button style={PgButtonStyle}  className = {isSelected === 3 ? 'selectedButton' : ''}
                onClick={() => handleClick(3)}>Male PG</Button>

                <Button style={PgButtonStyle}  className = {isSelected === 4 ? 'selectedButton' : ''}
                onClick={() => handleClick(4)}>Unisex PG</Button>

                <Button style={PgButtonStyle}  className = {isSelected === 5 ? 'selectedButton' : ''}
                onClick={() => handleClick(5)}>Economic PG</Button>

                <Button style={PgButtonStyle}  className = {isSelected === 6 ? 'selectedButton' : ''}
                onClick={() => handleClick(6)}>Luxury PG</Button>
            </div>
        </div> */}