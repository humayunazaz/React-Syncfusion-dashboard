import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React from 'react';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
    return (
        <TooltipComponent content={title} position='BottomCenter'>
            <button
                type='button'
                style={{ color }}
                onClick={() => customFunc()}
                className='relative text-xl rounded-full p-3 hover:bg-light-gray'
            >
                <span style={{ backgroundColor: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
                {icon}
            </button>
        </TooltipComponent>
    );
};

export default NavButton;
