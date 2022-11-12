import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import eventCalendartStyles from './eventCalendar.module.css'


export const EventCalendar = function() {

    const [value, onChange] = useState(new Date());
    

    return (
        <>
            <div className={eventCalendartStyles.calendar}>
                <Calendar onChange={onChange} value={value} />
            </div>
        </>
    )
}