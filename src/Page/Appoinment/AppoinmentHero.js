import heroBanar from '../../assets/images/chair.png'
import bgimg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinmentHero = ({ date, setDate }) => {




    return (
        <div className="hero min-h-screen w-full" style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-[594px] h-[355px]' src={heroBanar} />
                <div className=' lg:mr-12 bg-white rounded-lg shadow-lg' >
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppoinmentHero;