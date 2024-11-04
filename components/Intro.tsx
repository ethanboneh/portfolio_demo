'use client'

import Image from "next/image";

const Intro = () => {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col gap-4 w-9/12">
                <h1 className="text-4xl font-bold">Hi! I'm Ethan</h1>
                <p className="text-base text-gray-700">Lorem Ipsum ....Lorem Ipsum ....
                Lorem Ipsum ....Lorem Ipsum ....Lorem Ipsum ....Lorem Ipsum ....Lorem Ipsum ....Lorem Ipsum ....
                Lorem Ipsum ....Lorem Ipsum ....
                </p>
            </div>
            <div className="flex-1 w-3/12 overflow-hidden">
                <Image src="/images/ethnsss.jpeg" 
                alt="Ethan" 
                width={160} 
                height={160}
                className="rounded-full border border-gray-100 object-cover object-center w-40 h-40"/>
            </div>
        </div>
        
    );
};

export default Intro;