import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className=' p-8 mt-20 border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <button class=" border bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-medium overflow-hidden relative px-4 py-2 rounded-full hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Sunayana's Blog
              </button>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/tivalesunayana'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  JS Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Sunayana's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/tivalesunayana'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Sunayana's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            {/* <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitter} /> */}
            <Footer.Icon href='https://github.com/tivalesunayana' icon={BsGithub} />
            {/* <Footer.Icon href='#' icon={BsDribbble} /> */}

          </div>
        </div>
      </div>
    </Footer>
  );
}
