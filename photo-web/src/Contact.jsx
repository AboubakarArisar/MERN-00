import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact-container grid grid-cols-2 gap-6 p-10">
                <div className="contact-left flex flex-col ">
                    <div className="left-content flex flex-coljustify-center items-center flex-wrap p-40">
                        <p className='text-yellow-300'>Contact Us</p>
                        <h1 className='text-white text-5xl leading-normal'>
                            Have a
                            <span> Project </span>
                            or want to
                            <span> Collaborate</span>
                            ?
                        </h1>
                        <p className=' my-3 text-white'>We would love to hear from you.
                            Drop a message.</p>

                    </div>

                    <div className="left-card flex flex-col">
                        <div>
                            <p className='title'>Location</p>
                            <p>Sukkur, Pakistan</p>
                        </div>
                        <div>
                            <p className='title'>Email at</p>
                            <p>pindaricoders@gmail.com</p>
                        </div>
                        <div>
                            <p className='title'>Follow on</p>
                            <p>
                                <span>-</span>
                                <a href="">Facebook</a>
                                
                                <span>-</span>
                                <a href="">Instagram</a>
                                
                                <span>-</span>
                                <a href="">Discord</a>
                            </p>
                        </div>

                    </div>
                </div>
                <div className="contact-right"></div>
            </div>
        </>
    )
}

export default Contact