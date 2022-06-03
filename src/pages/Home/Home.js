import { Fragment } from 'react'
import Navbar from '../../components/Navbar'
import PageHeadings from '../../components/PageHeadings/PageHeadings'
import "../Home/styles.module.scss"


const Home = () => {
  return (
    <>
        <Navbar />
        <section className='md:container md:mx-auto px-8'>
          <header className="bg-white">
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-1">
              <PageHeadings />
            </div>
          </header>
        </section>
    </>
  )
}

export default Home