export function UserCard({ user }) {
  return (
  <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
    <div className="flex-shrink-0">
      <img className="h-10 w-10 rounded-full" src={user.avatar} alt="" />
    </div>
    <div className="flex-1 min-w-0">
      <a href="#" className="focus:outline-none">
        <span className="absolute inset-0" aria-hidden="true"></span>
        <p className="text-sm font-medium text-gray-900">{user.first_name + ' ' + user.last_name}</p>
        <p className="text-sm text-gray-500 truncate">{user.employment.title}</p>
      </a>
    </div>
  </div>
  )
}