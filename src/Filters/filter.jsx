import { Button, Dropdown, Input, Space } from 'antd';
import './filter.css';
import {
    SearchOutlined,
    DownOutlined
} from '@ant-design/icons';
import CustomMultiSelect from '../CustomMultiSelect/CustomMultiSelect';

const Filter = ({ filters, onChange }) => {

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
            <div className='filter-panel-inner-div'>
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
                    options={['Male', 'Female', 'Any']}
                    selectedOptions={filters.gender}
                    onChange={handleGenderChange}
                    label="Gender"
                />
            </div>

            <div className="price">
                <label className='pricelabel'>
                    Price Range:
                </label>

                <div className='price-range-div'>
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
            </div>
        </div>
    );
};

export default Filter;
