import { GeoAlt, Globe2 } from 'react-bootstrap-icons';
import './Metadata.css';

export default function Metadata({ location, date, language }: { location?: string, date?: Date, language?: string }) {
    return (
        <div className='metadata'>
            {location &&
                <div className='location'>
                    <GeoAlt size={20} />
                    <div style={{ width: '16px' }} />
                    {location}
                </div>
            }
            {date &&
                <span className='date'>
                    {/* Remove the day of the week */}
                    {date.toDateString().split(' ').slice(1).join(' ')}
                </span>
            }
            {language &&
                <div className='language'>
                    <Globe2 size={18} />
                    <div style={{ width: '12px' }} />
                    {language}
                </div>
            }
        </div>
    );
}