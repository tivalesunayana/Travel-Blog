import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex  gap-6 p-28 px-3 max-w-6xl mx-auto '>

        <div className=''>
          <div className="relative ">
            <span className="text-6xl font-bold text-pink-400 hover:brightness-150 hover:text-purple-500">Welcome <br></br>
              <span className='ml-4'> to my Blog</span></span>


          </div>

          <p className='text-black dark:text-white dark:hover:text-purple-600 text-xs sm:text-sm mt-40 hover:brightness-90 hover:text-purple-500'>
            <div className="text-left">
              <h1 className="text-4xl  mb-4">Step into a world of travel inspiration!</h1>
              <p className="text-lg mb-8">Explore a diverse range of travel ideas, discover hidden gems, and find the perfect season to embark on your next adventure.</p>
            </div>          </p>
          <Link
            to='/search'
            className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
          >
            View all posts
          </Link>
        </div>




        <div className='flex '>
          <img src='https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww' className='rounded-3xl  hidden sm:block md:block' />
        </div>
      </div>

      <div className='ml-50 grid grid-flow-col  justify-center  gap-10  hover:scale-110 rounded-full  max-w-2xl mx-auto  '>
        {/* <CallToAction /> */}

        <div className='w-40' >
          <img className='rounded-lg' src='https://images.unsplash.com/photo-1687223321465-f41b0d886120?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHRyYXZlbCUyMGltYWdlfGVufDB8fDB8fHww' />
        </div>
        <div className='w-80 '>
          <img src='https://images.unsplash.com/photo-1528255915607-9012fda0f838?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbCUyMGltYWdlfGVufDB8fDB8fHww'
            className='rounded-lg' />
        </div>
        <div className='w-40' >
          <img className='rounded-lg' src='https://images.unsplash.com/photo-1685969318927-a5048905fba9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbCUyMGltYWdlfGVufDB8fDB8fHww' />
        </div>
      </div>

    </div>
  );
}
