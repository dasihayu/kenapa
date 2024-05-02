import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';

export default function Login() {

    return (
        <GuestLayout>
            <div className='flex mx-auto p-4 px-6 bg-wl h-screen w-full xl:px-28 rounded-lg'>
                <div className='container flex justify-center items-center xl:flex xl:justify-between xl:items-center xl:flex-row'>
                    <div className='hidden xl:block'>
                        <p className='text-5xl font-bold text-wp max-w-[238px] xl:text-7xl xl:max-w-[525px]'>Discuss Everything In This World Register Now!</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className=' text-xl font-bold text-wp mb-4'>Register</h1>    
                        <div className='bg-ws p-6 w-full'>
                            <div className='flex flex-col'>
                                <Label htmlFor="email" value="Email" className="text-wp">Email</Label>
                                <Input type="email" />
                                <Label htmlFor="text" value="Name" className="text-wp mt-2">Username</Label>
                                <Input type="text" />
                                <Label htmlFor="password" value="Password" className="text-wp mt-2">Paswword</Label>
                                <Input type="password" />
                                <Label htmlFor="password" value="pasword" className="text-wp mt-2">Confirm Password</Label>
                                <Input type="passwrord" />
                            </div>
                            <div className=''>
                                <Button variant="primary" className="mt-6" href={route('login')}>Create Account</Button>
                                <div className='flex flex-row items-center gap-1'>
                                    <div class="border-b-2 border-wp w-full"></div>
                                    <p>or</p>
                                    <div class="border-b-2 border-wp w-full"></div>
                                </div>
                                <Button variant="outline" href={route('register')}>Google</Button>
                                <div className='flex justify-center'>
                                    <p className='text-wp mt-2 '>already have an account? <span className='text-wd underline'>Login</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
