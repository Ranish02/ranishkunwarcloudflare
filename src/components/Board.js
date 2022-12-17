import React from 'react';
import Typed from 'react-typed';
const Board = () => {
    return (
        <div className='flex justify-center mt-[50px] items-center snap-start snapsection'>
            <div className='w-screen h-screen bg-[#000] text-white pt-[50px] px-4'>
                <div className='grid md:grid-cols-2 grid-cols-1 h-screen '>
                    <div className='flex justify-center items-center px-10' >
                        <div>
                            <div>
                                Hi I am
                                <div className='font-bold text-xl'>
                                    Ranish Kunwar
                                </div>
                            </div>
                            <div>
                                As known as:
                            </div>
                            <div className='text-2xl'>
                                <Typed
                                    strings={['IproFortnut', 'Nwyfo', 'Nephoos Star']}
                                    typeSpeed={40}
                                    loop
                                />
                            </div>

                            <div>
                                I love so many things. Some of the things, you'll see below.
                            </div>
                            <div>
                                So let's get started
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center items-start md:items-center'>
                        <div className='mb-16'>
                            <img src="https://cdn.discordapp.com/attachments/979623779477123122/1052894880516542505/Snapchat-646155085.jpg" alt="" className='rounded-full overflow-hidden cropped' />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Board;
