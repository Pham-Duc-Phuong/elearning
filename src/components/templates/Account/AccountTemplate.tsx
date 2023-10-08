
export const AccountTemplate = () => {
  return (
    <div>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="mr-2">
          <a href="#" className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg">Tab 1</a>
        </li>
        <li className="mr-2">
          <a href="#" className="tabs">Tab 2</a>
        </li>
        <li className="mr-2">
          <a href="#" className="tabs">Tab 3</a>
        </li>
        <li className="mr-2">
          <a href="#" className="tabs">Tab 4</a>
        </li>
        <li>
          <a className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">Tab 5</a>
        </li>
      </ul>
    </div>
  )
}
