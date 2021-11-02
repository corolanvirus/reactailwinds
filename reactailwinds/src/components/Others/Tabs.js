import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    Articles: [
      {
        id: 1,
        title: 'Comment le sport nous guérira du covid',
        date: 'Il y a 3h',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Sortir à Paris",
        date: 'il y a 8 jours',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Videos: [
      {
        id: 1,
        title: 'But de Marious Mercier / Colombes92vsNanterre92',
        date: 'Il y a 47 min',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'Freestyle à Metz',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Posts: [
      {
        id: 1,
        title: 'Sortie de la v1 très vite !!!',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "que verrez vous le plus comme fonctionalité ? tout type d'event ou plutôt un autre sport ?",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
Récents
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-purple-400 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-purple-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-purple-700 shadow'
                    : 'text-white hover:bg-purple-200/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white rounded-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-purple-400 ring-white ring-opacity-60'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100"
                  >
                    <h3 className="text-sm font-medium leading-5 text-black">
                      {post.title}
                    </h3>

                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} commentaires</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} likes</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'focus:z-10 focus:outline-none focus:ring-2 ring-purple-400'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
