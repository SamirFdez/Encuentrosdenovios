import { useState } from 'react';
import Calendar from 'react-calendar';
import './eventCalendar.css';


export const EventCalendar = function() {

    const [value, onChange] = useState(new Date());

    return (
        <>
            <div>
                <Calendar onChange={onChange} value={value} />
            </div>
        </>
    )
}