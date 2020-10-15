import React, {useState} from 'react'
import Link from 'next/link'
import Item from './item'

const List = ({items}) => {
  const [hidden, setHidden] = useState(true)
  return (
    <ul className="list-none px-4">
      <li
        className={`relative ${items.items.length > 0 ? 'right-arrow' : ''} ${
          hidden ? '' : 'is-open'
        }`}>

        {items.items.length === 0 && (
          <Link href={items.url}>
            <a className="list-item children-x-2">
              <Item {...items} />
            </a>
          </Link>
        )}

        {items.items.length > 0 && (
          <button
            className="list-item children-x-2"
            onClick={() => setHidden(!hidden)}>
            <Item {...items} />
          </button>
        )}

        {items.items.length > 0 && (
          <ul
            className={`list-none accordion ${
              hidden ? '' : 'open'
            }`}>
            {items.items.map((item, k) => (
              <li key={k}>
                <Link href={item.url}>
                  <a className="list-item children-x-2 block">
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  )
}

export default List
