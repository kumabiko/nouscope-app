import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

export const TopLayout = () => {
  const router = useRouter();

  return (
    <>
      <div className="pb-6 bg-white sm:pb-8 lg:pb-12">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          <header className="flex justify-between items-center py-4 mb-4 md:py-8">
            {/* logo - start  */}
            {/* <a href="/" className="inline-flex gap-2.5 items-center text-2xl font-bold md:text-3xl text-black-800" aria-label="logo">
              <svg width="95" height="94" viewBox="0 0 95 94" className="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>

              Flowrift
            </a> */}
            <button disabled className="flex items-center py-2 space-x-3 text-xl font-bold text-primary rounded">
              <Image 
                alt='product'
                src = '/images/nouscope.png'
                width={30}
                height={30}
                layout='fixed'
              /> 
              <span>nouscope</span>
            </button> 
            {/* logo - end  */}

            {/* nav - start  */}
            <nav className="hidden gap-12 lg:flex">
              <a href="#" className="text-lg font-semibold text-primary">Home</a>
              <a href="#" className="text-lg font-semibold text-gray-600 hover:text-indigo-500 active:text-indigo-700 transition duration-100">Features</a>
              <a href="#" className="text-lg font-semibold text-gray-600 hover:text-indigo-500 active:text-indigo-700 transition duration-100">Pricing</a>
              <a href="#" className="text-lg font-semibold text-gray-600 hover:text-indigo-500 active:text-indigo-700 transition duration-100">About</a>
            </nav>
            {/* nav - end  */}

            {/* buttons - start */}
            <a href="#" className="hidden py-3 px-8 text-sm font-semibold text-center text-gray-500 active:text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg outline-none focus-visible:ring ring-indigo-300 transition duration-100 md:text-base lg:inline-block">ログイン</a>

            <button type="button" className="inline-flex gap-2 items-center py-2 px-2.5 text-sm font-semibold text-gray-500 active:text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg focus-visible:ring ring-indigo-300 md:text-base lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>

              Menu
            </button>
            {/* buttons - end  */}
          </header>

          <section className="flex overflow-hidden relative flex-1 shrink-0 justify-center items-center py-16 bg-gray-100 rounded-lg shadow-lg md:py-20 xl:py-48 min-h-96">
            {/* image - start  */}
            <img src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Photo by Fakurian Design" className="object-cover object-center absolute inset-0 w-full h-full" />
            {/* image - end  */}

            {/* overlay - start  */}
            <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
            {/* overlay - end  */}

            {/* text start  */} 
            <div className="flex relative flex-col items-center p-4 sm:max-w-xl">
              {/* <p className="mb-4 text-lg text-center text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p> */}
              <h1 className="mb-8 text-4xl font-bold text-center text-white sm:text-5xl md:mb-12 md:text-6xl">自分探しの旅に<br/>出かけよう</h1>

              <div className="flex flex-col gap-2.5 w-full sm:flex-row sm:justify-center">
                <a href="#" className="inline-block py-3 px-8 text-sm font-semibold text-center text-white bg-primary hover:bg-indigo-600 active:bg-indigo-700 rounded-lg outline-none focus-visible:ring ring-indigo-300 transition duration-100 md:text-base">Start now</a>

                <a href="#" className="inline-block py-3 px-8 text-sm font-semibold text-center text-gray-500 active:text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg outline-none focus-visible:ring ring-indigo-300 transition duration-100 md:text-base">Take tour</a>
              </div>
            </div>
            {/* text end  */}
          </section>
        </div>
      </div>

      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          {/*text - start  */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-6 lg:text-3xl">nouscopeで出来ること</h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">nouscopeは自己分析ツールです。就職や転職活動の方や、自分が何者か、何をやったらいいか悩んでいる方々の、自分探しの手伝いをするアプリです。</p>
          </div>
          {/*text - end  */}

          <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            
            {/*feature - start  */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex shrink-0 justify-center items-center w-12 h-12 text-white bg-primary rounded-lg shadow-lg md:w-14 md:h-14 md:rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">性格分析</h3>
                <p className="mb-2 text-gray-500">世の中にある様々な性格分析の手法やツールをまとめており、分析結果を記録する事が出来ます。自分の性格を客観的に捉える事に役立ちます。</p>
                <a href="#" className="font-bold text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">構想中</a>
              </div>
            </div>
            {/*feature - end  */}

            {/*feature - start  */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex shrink-0 justify-center items-center w-12 h-12 text-white bg-primary rounded-lg shadow-lg md:w-14 md:h-14 md:rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">自己分析</h3>
                <p className="mb-2 text-gray-500">質問形式で回答する事で、自分に関することや働き方の考えなどを整理する事が出来ます。職務経歴書として、作成する事も可能です。</p>
                <a href="#" className="font-bold text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">現在開発中</a>
              </div>
            </div>
            {/*feature - end  */}

            {/*feature - start  */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex shrink-0 justify-center items-center w-12 h-12 text-white bg-primary rounded-lg shadow-lg md:w-14 md:h-14 md:rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">目標設定</h3>
                <p className="mb-2 text-gray-500">月の目標から、十年後の目標まで、将来的な目標を立てて、進捗を管理する事で、俯瞰的な視野を持って行動できる様になります。</p>
                <a href="#" className="font-bold text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">構想中</a>
              </div>
            </div>
            {/*feature - end  */}

          </div>
        </div>
      </div>

      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="px-4 mx-auto max-w-screen-xl md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div className="overflow-hidden h-64 bg-gray-100 rounded-lg shadow-lg md:h-auto">
                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750" loading="lazy" alt="Photo by Martin Sanchez" className="object-cover object-center w-full h-full" />
              </div>
            </div>

            <div className="md:pt-8">
              <p className="font-bold text-center text-indigo-500 md:text-left">Who we are</p>

              <h1 className="mb-4 text-2xl font-bold text-center text-gray-800 sm:text-3xl md:mb-6 md:text-left">Our competitive advantage</h1>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.<br /><br />

                This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 underline transition duration-100">random</a> or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
              </p>

              <h2 className="mb-2 text-xl font-semibold text-center text-gray-800 sm:text-2xl md:mb-4 md:text-left">About us</h2>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
            </div>
          </div>
        </div>
      </div>





      <div className="pt-4 bg-white sm:pt-10 lg:pt-12">
        <footer className="px-4 mx-auto max-w-screen-2xl md:px-8">
          <div className="grid grid-cols-2 gap-12 pt-10 mb-16 border-t md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            <div className="col-span-full lg:col-span-2">
              {/*logo - start */}
              <button disabled className="flex items-center pb-6 space-x-3 text-xl font-bold text-primary rounded">
              <Image 
                alt='product'
                src = '/images/nouscope.png'
                width={30}
                height={30}
                layout='fixed'
              /> 
              <span>nouscope</span>
              </button>
              {/*logo - end */}

              {/*social - start */}
              <div className="flex gap-4">
                <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                  <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                  <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>

                <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                  <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                  <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              {/*social - end */}
            </div>

            {/*nav - start */}
            <div>
              <div className="mb-4 font-bold tracking-widest text-gray-800 uppercase">Products</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Overview</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Solutions</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Pricing</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Customers</a>
                </div>
              </nav>
            </div>
            {/*nav - end */}

            {/*nav - start */}
            <div>
              <div className="mb-4 font-bold tracking-widest text-gray-800 uppercase">Company</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">About</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Investor Relations</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Jobs</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Press</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Blog</a>
                </div>
              </nav>
            </div>
            {/*nav - end */}

            {/*nav - start */}
            <div>
              <div className="mb-4 font-bold tracking-widest text-gray-800 uppercase">Support</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Contact</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Documentation</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Chat</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">FAQ</a>
                </div>
              </nav>
            </div>
            {/*nav - end */}

            {/*nav - start */}
            <div>
              <div className="mb-4 font-bold tracking-widest text-gray-800 uppercase">Legal</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Terms of Service</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Privacy Policy</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Cookie settings</a>
                </div>
              </nav>
            </div>
            {/*nav - end */}
          </div>

          <div className="py-8 text-sm text-center text-gray-400 border-t">© 2021 - Present Nimbusky. All rights reserved.</div>
        </footer>
      </div>

    </>
  );
};
