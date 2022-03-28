import React from 'react'
import './css/cover.css'
import { ParallaxBanner } from 'react-scroll-parallax';

const Cover = () => {
    return (
        <>
            <ParallaxBanner
                style={{ aspectRatio: '2/1' }}
                layers={[


                    {
                        image: 'https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
                        speed: -15,
                    },
                    // {
                    //     image: 'http://localhost:3000/static/media/circle.5704f004df576d404f39.jpg',
                    //     speed: -10
                    // },


                    // {
                    //     speed: -10,
                    //     children: (

                    //             <h1 className="text1">Hello World!</h1>

                    //     ),

                    // },
                    // console.log(ParallaxBanner)

                ]}
            />
            <div className="text1">
                <h1>Dynamic Planner</h1>
            </div>

            {/* <div>
                <img src={require('../images/clock.jpg')} alt='background' className='cover' />
                <p className="title">Dynamic Planner</p>
            </div> */}


        </>
    )
}

export default Cover;