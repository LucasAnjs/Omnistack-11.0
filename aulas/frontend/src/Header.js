import React from 'react';

export default function Header({ children }) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

/*
export default Header;

forma alternativa de exportar o componente
*/