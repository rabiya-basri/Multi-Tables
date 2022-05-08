import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { Select, Radio } from 'antd';

const Filter = () => {
    const [selectTicketTYpe, setSelectTicketType] = useState('');
    const ticketTypeData = ['ticket1', 'ticket2', 'tiket3'];
    const [isPeriodicitySelected, setIsPeriodicitySelected] = useState(15);
    // const [initialState, setInitialState] = useState([{
    //     "periodicity_type": "Days",
    //     "periodicity_value": 15,
    //     "ticket_type": ['T123', 'T234', 'T456']
    // },
    // {
    //     "periodicity_type": "Week",
    //     "periodicity_value": 10,
    //     "ticket_type": ['T1', 'T2', 'T4']
    // }, {
    //     "periodicity_type": "Months",
    //     "periodicity_value": 6,
    //     "ticket_type": ['T8', 'T23', 'T56']
    // }]);

    const handelTicketType = (value) => {
        setSelectTicketType(value)
        console.log('val', value)
    };

    const handelPeriodicity = (e) => {
        setIsPeriodicitySelected(e.target.value)
        console.log('radio', e.target.value)
    };
    
    const renderFilters = () => {
        return (
            <>
                <Select
                    style={{ width: '50%' }}
                    mode='multiple'
                    allowClear
                    maxTagCount={2}
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={handelTicketType}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {ticketTypeData.map((type, index) => {
                        return (
                            <Select.Option key={index} value={type}>{type}</Select.Option>
                        )
                    })}
                </Select>
                <Radio.Group onChange={handelPeriodicity} value={isPeriodicitySelected}>
                    <Radio value={15}>Days</Radio>
                    <Radio value={10}>Weeks</Radio>
                    <Radio value={6}>Months</Radio>
                </Radio.Group>

            </>
        )

    }
    return renderFilters();
}
export default Filter