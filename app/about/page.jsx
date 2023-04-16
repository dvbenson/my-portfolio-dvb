import DefaultLayout from '@/components/DefaultLayout';
import styles from '@/styles/about.module.css';

export default function page() {
  return (
    <DefaultLayout styles={styles} page={'about'}>
      <main className='min-h-screen bg-white pb-16'>
        <section>
          <div className='container mx-auto px-4 md:px-16'>
            <div className='flex flex-col flex-nowrap items-center justify-center h-32 sm:h-42 bg-pink pb-2'>
              <div className='flex items-center justify-center'>
                <p className='text-gray mr-64 sm:mr-72'>It's all</p>
              </div>
              <div className='flex items-center justify-center w-full'>
                <h1 className='text-black-gray text-6xl sm:text-7xl'>
                  About Me<span className='text-white'>.</span>
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container mx-auto px-4 flex flex-col gap-x-20'>
            <div className='container mx-auto px-4 w-full flex flex-col mt-8'>
              <div
                id='img-text block 1'
                className='container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center min-[480px]:mb-24'
              >
                <div className='flex justify-center items-center '>
                  <img
                    src='/assets/food_cartoon.svg'
                    alt='about'
                    className='w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-full'
                  />
                </div>
                <div className='flex flex-col gap-4 min-[480px]:w-[320px] min-[480px]:h-[280px]'>
                  <h2 className='text-3xl lg:text-4xl xl:text-5xl'>
                    Get to know me.
                  </h2>
                  <p className='font-serif font-medium text-base md:text-lg lg:text-2xl xl:text-xl'>
                    I'm a full stack developer, I love the JavaScript eco-system
                    and I'm a highly intuitive self-teacher.
                  </p>

                  <p className='font-serif font-medium text-base md:text-lg lg:text-2xl xl:text-xl'>
                    Outside of programming you can find me drawing, designing,
                    baking or cooking. I'm an avid Linguist, having majored in
                    Languages, so I love learning a new phrase or two!
                  </p>
                </div>
              </div>
              <div
                id='img-text block 2'
                className='container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center min-[480px]:mb-48'
              >
                <div className='flex flex-col  gap-4  max-[640px]:order-2 min-[480px]:w-[320px] min-[480px]:h-[280px] '>
                  <h2 className='text-3xl lg:text-4xl xl:text-5xl'>
                    Experience.
                  </h2>

                  <p className='font-serif font-medium text-base md:text-lg lg:text-2xl xl:text-xl'>
                    With a background in user-centred services and products,
                    Agile is a methodology I am confident in and have used to
                    deliver successful products.
                  </p>
                  <p className='font-serif font-medium text-base md:text-lg lg:text-2xl xl:text-xl'>
                    Since then I have trained with Northcoders in full stack
                    development, working intensively to develop my skills and
                    hone in on what makes me tick as a developer.
                  </p>
                </div>
                <div className='flex justify-center items-center'>
                  <img
                    src='/assets/coding_cartoon.svg'
                    alt='about'
                    className='w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-full  max-[640px]:order-1'
                  />
                </div>
              </div>
              <div
                id='img-text block 3'
                className='container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center min-[480px]:mb-64'
              >
                <div className='flex justify-center items-center '>
                  <img
                    src='/assets/draw_cartoon.svg'
                    alt='about'
                    className='w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-full  m'
                  />
                </div>
                <div className='flex flex-col  gap-4 min-[480px]:w-[320px] min-[480px]:h-[280px]'>
                  <h2 className='text-3xl lg:text-4xl xl:text-5xl'>Skills.</h2>

                  <p className='font-serif font-medium text-base md:text-lg lg:text-2xl xl:text-xl'>
                    I am able to take a product through its entire lifecycle.
                    Whether that's confidently building a backend REST API in
                    Node, routing with Express or creating a frontend UI in
                    React or Next.js.
                  </p>
                  <p className='font-serif font-medium text-base md:text-lg lg:text-2xl xl:text-xl'>
                    I have taken a particular interest in UI/UX design, becoming
                    knowledgeable in design practices and prototyping using
                    Figma and Framer, and styling with vanilla CSS or Tailwind
                    to develop mobile-first, accessible and responsive products.
                  </p>
                </div>
              </div>
              <div
                id='img-text block 4'
                className='container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center mt-16 sm:mt-0'
              >
                <div className='flex flex-col gap-4 max-[640px]:order-1 min-[480px]:w-[320px] min-[480px]:h-[280px]'>
                  <h2 className='text-3xl text-center md:-4xl lg:text-4xl xl:text-5xl'>
                    Stack.
                  </h2>

                  <ul className='font-serif font-medium text-center text-base md:text-lg lg:text-2xl xl:text-xl'>
                    <li> JavaScript, HTML, CSS</li>
                    <li> React, Next.js, Vue.js</li>
                    <li>React Native</li>
                    <li> Node.js, Express.js</li>
                    <li> Python, Django, DRF</li>
                    <li> Postgres, SQL</li>
                    <li> Tailwind, Bootstrap</li>
                    <li> Figma, Framer</li>
                  </ul>
                </div>
                <div className='flex justify-center items-center'>
                  <img
                    src='/assets/error_cartoon.svg'
                    alt='about'
                    className='w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-full  max-[640px]:order-2  max-[640px]:mb-8 '
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}

{
  /* <div className='flex justify-center items-center'>
              <div className='relative'>
                <div className='flex items-center'>
                  <p className={styles.emoji}>👉</p>
                  <button className={styles.cv_button}>
                    View
                    <br />
                    CV
                  </button>
                </div>
              </div>
            </div> */
}
