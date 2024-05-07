import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import post from '../../img/post.jpg'


function Post() {
  return (
    <div className='flex flex-col gap-4 xl:max-w-2xl justify-center'>
       <Card>
            <CardHeader>
                <div className='flex flex-row items-center gap-2 font-semibold'><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" className='w-10 rounded-full' />Joko Anwar</div>
            </CardHeader>
            <CardContent>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid exercitationem labore officia deserunt aliquam ab. Error dolorem architecto laudantium exercitationem.</p>
                <img src={post} alt="" />
            </CardContent>
            <CardFooter>
                <div className='flex flex-row gap-4 justify-between w-full'>
                    <div>
                        <i className="fa-regular fa-comments fa-xl"></i>
                        <p>5467</p>
                    </div>
                    <i className="fa-solid fa-heart fa-xl text-red-600"></i>
                    <i className="fa-regular fa-heart fa-xl hidden"></i>
                    <i class="fa-solid fa-share-nodes fa-xl"></i>
                    <i class="fa-solid fa-arrow-up fa-xl"></i>
                </div>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Post