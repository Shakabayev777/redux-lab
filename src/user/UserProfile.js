import React from 'react';

export default function UserProfile({user}) {
    return (
        <ul>
            <li>
                First name: {user.firstName}
            </li>
            <li>
                Last name: {user.lastName}
            </li>
        </ul>
    )
}