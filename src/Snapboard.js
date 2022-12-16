import React from 'react';

const Snapboard = () => {
    return (
        <section className='flex justify-center mt-[50px] snapsection snap-start'>
            <div className='bg-[#000] text-white px-4'>
                <div className='grid md:grid-cols-2 grid-cols-2'>
                    <div className='flex justify-center items-center px-10' >
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quisquam, cumque sapiente enim iure nisi rerum. Id libero mollitia dolorem eos laborum. Numquam, veniam itaque ipsam eligendi eos dolores dolore.
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
        </section>
    );
}

export default Snapboard;
