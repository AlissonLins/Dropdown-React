import React from 'react';

function MenuItem({icon, label}) {
    return (
        <div className='link-secundario'>
            {icon && <img src={`assets/img/${icon}`} alt={label} />}
            <span>{label}</span>
        </div>
    );
}

export default MenuItem;