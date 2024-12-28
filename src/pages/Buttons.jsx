import { useSelector, useDispatch } from 'react-redux';
import { selectButtons } from '../features/buttonSlice';


const Buttons = () => {
    const buttons = useSelector(selectButtons);


    return (
        <div className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {buttons.map((button) => (
                <div className="border p-4 rounded shadow">
                    <button>{button}</button>

                </div>
            ))}
        </div>
    );
};

export default Buttons;
