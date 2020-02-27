import React, {useState} from 'react';
import './Sider.css';
import UserProfile from '../user/UserProfile';

export default function Sider({children}) {
    const[user, setUser] = useState({
        firstName: 'Assan',
        lastName: 'Shakabayev',
    });

    return (
        <aside className="Sider">
            <UserProfile  />
            {children}
        </aside>
    )
}
