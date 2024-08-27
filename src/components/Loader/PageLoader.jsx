import React from 'react'
import { Bars } from 'react-loader-spinner'

const PageLoader = () => {
    return (
        <div className='flex flex-col items-center justify-center h-[70vh]'>
            <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default PageLoader