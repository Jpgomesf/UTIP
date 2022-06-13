import React from 'react'
import { Link } from 'react-router-dom'

import {
  PlusIcon,
} from '@heroicons/react/solid'

import { 
  CollectionIcon ,
} from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PageHeadings() {
  return (
    <>
      <section className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Processos</h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <form action="" className="relative">
              <input type="search" 
                  className="peer cursor-pointer relative z-10 h-10 w-10 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-zinc-600 focus:pl-16 focus:pr-4" placeholder="Pesquisar processo" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent -zinc-600 px-3.5 peer-focus:border-zinc-300 peer-focus:zinc-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">stroke
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
            </form>
          </span>

          <span className="sm:ml-3">
            <Link to="/includeprocess"
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Novo processo
            </Link>
          </span>
        </div>
      </section>

      <br></br>

      <section className="lg-flex border border-zinc-400 rounded-xl">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-zinc-700">
              <CollectionIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-zinc truncate">
              <span className="md:hidden">Lei de Tóxicos</span>
              <span className="hidden md:inline">Lei de Tóxicos 11.343/06</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <Link to="/dashboard"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-500 focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600"
            >
              Ver Processos
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}