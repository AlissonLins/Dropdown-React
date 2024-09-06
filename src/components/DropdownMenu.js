import React from 'react';

function DropdownMenu({ children }) {
    return (
        <div className='menu-secundario'>
            {children}
        </div>
    );
}

export default DropdownMenu;