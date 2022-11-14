import { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';


export const CalendarComponent = function() {

    const [value, onChange] = useState(new Date());

    return (
        <>
            <div>
                <Calendar onChange={onChange} value={value} />
            </div>
        </>
    )
}