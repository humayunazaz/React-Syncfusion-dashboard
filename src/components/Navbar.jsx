import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';

import { useStateContext } from '../contexts/ContextProvider';
import NavButton from './NavButton';

const Navbar = () => {
    const { setActiveMenu, isClicked, handleClickedNav, screenSize, setScreenSize, currentColor } = useStateContext();

    const activeMenuHandler = () => {
        setActiveMenu((prevActiveMenu) => !prevActiveMenu);
    };

    useEffect(() => {
        const handleWindowResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
            <NavButton title='Menu' icon={<AiOutlineMenu />} customFunc={activeMenuHandler} color={currentColor} />
            <div className='flex'>
                <NavButton title='Cart' icon={<FiShoppingCart />} customFunc={() => handleClickedNav('cart')} color={currentColor} />
                <NavButton
                    title='Chat'
                    dotColor='#03C9D7'
                    icon={<BsChatLeft />}
                    customFunc={() => handleClickedNav('chat')}
                    color={currentColor}
                />
                <NavButton
                    title='Notification'
                    icon={<RiNotification3Line />}
                    dotColor='rgb(254, 201, 15)'
                    customFunc={() => handleClickedNav('notification')}
                    color={currentColor}
                />
                <TooltipComponent content='Profile' position='BottomCenter'>
                    <div
                        className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
                        onClick={() => handleClickedNav('userProfile')}
                    >
                        <img src={avatar} alt='user-profile' className='rounded-full w-8 h-8' />
                        <p>
                            <span className='text-gray-400 text-14'>Hi,</span>{' '}
                            <span className='text-gray-400 font-bold ml-1 text-14'>Humayun</span>
                        </p>
                        <MdKeyboardArrowDown className='text-gray-400 text-14' />
                    </div>
                </TooltipComponent>

                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notification && <Notification />}
                {isClicked.userProfile && <UserProfile />}
            </div>
        </div>
    );
};

export default Navbar;
