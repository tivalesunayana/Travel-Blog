import { Button } from 'flowbite-react';

export default function CallToAction() {
    return (
        <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className="flex-1 justify-center flex flex-col">
                <h2 className='text-2xl'>
                    "Life is short and the world is wide. Explore!"

                </h2>
                {/* <p className='text-gray-500 my-2'>
                    Checkout these resources with 100 JavaScript Projects
                </p>
                <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                    <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
                        100 JavaScript Projects
                    </a>
                </Button> */}
            </div>
            <div className="p-7 flex-1 hover:scale-110 rounded-full">
                <img src="https://images.unsplash.com/photo-1710092681405-f834b9ca7a53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhbmRzY2FwZSUyMHBob3RvZ3JhcGh5fGVufDB8fDJ8fHww" />
            </div>
        </div>
    )
}