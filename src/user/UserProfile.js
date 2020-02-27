import React from 'react';
import withUser from './withUser';
import userContext from './userContext';
import { connect} from 'react-redux';

function UserProfile({user}) {
    return user ? (
               <ul>
                   <li>
                       First name: {user.firstName}
                   </li>
                   <li>
                       Last name: {user.lastName}
                   </li>
               </ul>
       // </userContext.Consumer>
    ): null;
}
const mapStateToProps = state => ({
    user: state.user.userData
});

export default connect(mapStateToProps)(UserProfile);
