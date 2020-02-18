import React from 'react';
import './Sider.css';
import UserProfile from '../user/UserProfile';

export default function Sider({user}) {
    return (
        <aside className="Sider">
            <UserProfile user={user} />
        </aside>
    )
}