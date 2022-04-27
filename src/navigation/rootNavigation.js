import React from 'react';
import { useSelector } from 'react-redux';
import TabNavigationHome from './TabNavigatorHome';
import TabNavigationLogin from './TabNavigatorLogin';

const RootNavigation = () => {

    const {logeado, token} = useSelector(state => state.auth);
    return ( 
        <>
        { logeado & token != null ? <TabNavigationHome/> : <TabNavigationLogin/> }
        </>
     )
}
 
export default RootNavigation;