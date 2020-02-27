import React from "react";

export default function withUser(ComponentToWrap) {
    const user = {
        firstName: 'Assan',
        lastName: 'Shakabayev',
    };

    return function (props) {
        return <ComponentToWrap user={user} {...props} />
    }
}
