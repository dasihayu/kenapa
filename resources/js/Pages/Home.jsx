import Post from '@/Components/Post';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <>
            <Head title="Why" />

            <div className="mx-auto p-4 px-6 bg-wl h-screen xl:px-28 xl:w-screen">
                <Post />
            </div>
        </>
    );
}
