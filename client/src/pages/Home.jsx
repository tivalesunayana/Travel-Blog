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






          {/* <h1 className='text-3xl font-bold lg:text-6xl'> <span className='hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 border bg-gradient-to-r from-indigo-500 opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] via-purple-500 to-pink-500 text-white outline-none duration-300 group'> Welcome <br></br><span className=''>to my Blog</span></span></h1> */}
          {/* <h1 className='text-3xl font-bold lg:text-6xl'>
            <span className='hover:brightness-150  active:opacity-75   opacity-50 group-hover:top-[150%] duration-500 shadow-[0 0 10px 10px rgba(0,0,0,0.3)] '>
              Welcome
              <br />

              <span className='ml-8 p-5'>to my Blog</span>
            </span>
          </h1> */}


          <div className="relative ">
            <span className="text-6xl font-bold text-pink-400 hover:brightness-150 hover:text-purple-500">Welcome <br></br>
              <span className='ml-4'> to my Blog</span></span>
            {/* <span className="absolute top-1 left-3 text-pink-500  active:opacity-75 hover:brightness-150   group-hover:top-[150%] duration-500 opacity-50 -mt-2 -ml-2 text-6xl font-bold">Welcome <br></br>
              <span className='ml-4'>to my Blog</span></span> */}

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
          <img src='https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww' className='rounded-3xl' />
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
      {/* 
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex  gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div> */}

      {/* <div className='flex justify-center'>
        <div class="card">
          <div
            class="relative bg-black w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center"
          >
            <div
              class="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16"
            >
              <p class="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
                Thank You
              </p>
              <p class="px-10 text-[10px] sm:text-[12px] text-gray-700">
                It’s so nice that you had the time to view this idea
              </p>
              <p class="font-serif text-[10px] sm:text-[12px text-gray-700">
                Wishing you a fantastic day ahead!
              </p>
              <p class="font-sans text-[10px] text-gray-700 pt-5">Sunayana</p>
            </div>
            <button
              class="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900"
            >
              SMKY
            </button>
            <div
              class="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
            ></div>
            <div
              class="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
            ></div>
            <div
              class="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"
            ></div>
            <div
              class="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"
            ></div>
          </div>
        </div>

      </div> */}
    </div>
  );
}
