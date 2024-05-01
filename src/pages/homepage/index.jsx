import React from 'react'
import Banner from './features/banner'
import Ourtruck from './features/ourtruck'
import Subscribe from './features/subscribe'


const HomePage = () => {
    return (
        <div>
            <Banner />
            <Ourtruck/>
            <Subscribe/>
        </div>
    )
}

export default HomePage