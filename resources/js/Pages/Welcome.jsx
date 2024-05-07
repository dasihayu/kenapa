import { Button } from '@/Components/ui/button';
import { Link, Head } from '@inertiajs/react';
import connect from '../../img/connect.png';
import Navbar from '@/Components/Navbar';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <div className="mx-auto p-4 px-6 bg-wl h-screen xl:px-28 xl:w-screen">
                <div className=' xl:flex xl:justify-between xl:mt-20 xl:items-center'>
                    <div>    
                        <p className='text-5xl font-bold text-wp max-w-[238px] mt-36 xl:text-7xl xl:max-w-[525px]'>Join Together 'whY' And Find The Answers!</p>
                        <div className='xl:flex xl:flex-row xl:gap-1'>
                            <Button variant="primary" className="mt-6"><a href={route('login')} className="text-white">Login</a></Button>
                            <Button variant="outline" className="mt-2 xl:mt-6"><a href={route('register')} className="text-wp">Register</a></Button>
                        </div>
                    </div>
                    <div className='hidden xl:block'>
                        <img src={connect} alt="" />
                    </div>
                </div>
            </div>

        </>
    );
}
