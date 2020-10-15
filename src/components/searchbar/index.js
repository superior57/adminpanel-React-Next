import React from 'react'
import { defaultGroupByFn } from 'react-table'

export const Searchbar = () => (

      <div className="relative">
        <label className="block">

          <input
            name="search"
            type="text"
            className="form-input text-xs mt-1 block w-full border-green-500"
            placeholder="Búsqueda"
          />
        </label>

      </div>

  )

export default Searchbar