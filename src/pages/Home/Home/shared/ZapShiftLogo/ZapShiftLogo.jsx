import React from 'react';
import logo from '../../../../../assets/logo.png'

const ZapShiftLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-1' src={logo} alt="" />
            <p className='text-3xl font-bold -ml-2'>Zap-Shift</p>
        </div>
    );
};

export default ZapShiftLogo;