import React from 'react';
import Typed from 'react-typed';
const Board = () => {
    return (
        <div>
            <div className='flex justify-center mt-[10px] items-center snap-start'>
                <div className='w-screen h-screen bg-[#000] text-white pt-[50px] px-4'>
                    <div className='grid md:grid-cols-2 grid-cols-1'>
                        <div className='flex justify-center items-center px-10' >
                            <div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quisquam, cumque sapiente enim iure nisi rerum. Id libero mollitia dolorem eos laborum. Numquam, veniam itaque ipsam eligendi eos dolores dolore.
                                <Typed
                                    strings={['Here you can find anything']}
                                    typeSpeed={40}
                                />
                                <br />
                            </div>

                        </div>
                        <div className='flex justify-center items-center'>
                            <div>
                                <img src="https://cdn.discordapp.com/attachments/979623779477123122/1052894880516542505/Snapchat-646155085.jpg" alt="" className='rounded-full overflow-hidden cropped' />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;
