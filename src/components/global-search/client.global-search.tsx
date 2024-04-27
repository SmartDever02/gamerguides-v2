'use client'

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'
import './global-search.css'

export default function GlobalSearchForm() {
  return (
    <form className="gg-global-search-form">
      <label className='gg-global-search-input-label group'>
        <input
          className="bg-[#333] pr-7 pl-3 rounded w-full h-7 text-sm text-white pointer-events-auto peer"
          placeholder="Search"
        />

        <XMarkIcon className='group-focus-within:scale-100 block right-1 absolute opacity-0 group-focus-within:opacity-100 w-5 h-5 stroke-white stroke-2 transition-all duration-150 pointer-events-none scale-0 delay-75'/>

        <MagnifyingGlassIcon className='w-5 h-5 stroke-white stroke-2 absolute right-2 scale-100 group-focus-within:scale-0 duration-75'/>
      </label>
    </form>
  )
}
