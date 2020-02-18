import React from 'react';

export default function UserAvatar({user}) {
    return (
        <div className="UserAvatar">
            Hello, {user.firstName} {user.lastName}
        </div>
    )
}