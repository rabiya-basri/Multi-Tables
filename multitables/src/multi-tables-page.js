import React from 'react'
import './index.css'

const MultiTables = () => {
    const data = [
        { date: '24-Apr', days: 'previous', attendance_scope: 'Busy', projected_attendance_min: '13500', projected_attendance_max: '16000', last_year_same_day: '13078', projected_weather: 'partly cloady', projected_temprature: '78F/26C', special_event: 'st.patric day, spring day', actual_attendance: '14207', avg_attendance: '13000' },
        { date: '25-Apr', days: 'previous', attendance_scope: 'Average', projected_attendance_min: '13500', projected_attendance_max: '16000', last_year_same_day: '13078', projected_weather: 'partly cloady', projected_temprature: '8F/26C', special_event: ' spring day', actual_attendance: '14200', avg_attendance: '12800' },
        { date: '26-Apr', days: 'previous', attendance_scope: 'slow', projected_attendance_min: '13500', projected_attendance_max: '16000', last_year_same_day: '13078', projected_weather: 'partly cloady', projected_temprature: '78F/6C', special_event: 'st.patric day, spring day', actual_attendance: '13678', avg_attendance: '12700' },
        { date: '27-Apr', days: 'previous', attendance_scope: 'Full', projected_attendance_min: '13500', projected_attendance_max: '16000', last_year_same_day: '13078', projected_weather: 'partly cloady', projected_temprature: '8F/2C', special_event: ' spring day', actual_attendance: '16709', avg_attendance: '18600' },
    ];

    const renderTableHeader = () => {
        return (
            <>
                {data.map((ele, index) => {
                   
                    return (
                        <table className='table table-bordered'>
                              <tbody>
                                <tr>
                                    <th className='text-center'>{ele.date}</th>
                                    <th>Predicted Attendance</th>
                                    <th>{ele.avg_attendance}</th>
                                </tr>
                          
                                <tr>
                                    <td ></td>
                                    <td>Last year same Day</td>
                                    <td className='text-center'>{ele.last_year_same_day}</td>
                                </tr>
                                <tr>
                                    <td>{""}</td>
                                    <td>Special Day</td>
                                    <td className='text-center'>{ele.special_event}</td>
                                </tr>
                                <tr>
                                    <td>{""}</td>
                                    <td>weather</td>
                                    <td className='text-center'>{ele.projected_weather}</td>
                                </tr>
                                <tr>
                                    <td className='text-center'>{ele.attendance_scope}</td>
                                    <td>Actual Attendance</td>
                                    <td className='text-center'>{ele.avg_attendance}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })}
            </>
        )
    }

    return (
        <div className='container'>
            {renderTableHeader()}
        </div>
    )
}
export default MultiTables