import Badge from "../components/Badge"
import HomeIcon from "../icons/HomeIcon"
import SearchIcon from "../icons/SearchIcon"
import BellIcon from "../icons/BellIcon"
import MessageIcon from "../icons/MessageIcon"
import UsersIcon from "../icons/UsersIcon"

export default function Navbar() {
  return (
    <div className="flex justify-center items-center">
      <div className="navbar bg-base-100 fixed bottom-0 flex justify-around items-center border-t border-gray-400">
        <button className="btn btn-square btn-ghost relative">
          <HomeIcon size={28} />
          <Badge />
        </button>
        <button className="btn btn-square btn-ghost relative">
          <SearchIcon size={28} />
          <Badge />
        </button>
        <button className="btn btn-square btn-ghost relative">
          <BellIcon size={28} />
          <Badge />
        </button>
        <button className="btn btn-square btn-ghost relative">
          <MessageIcon size={28} />
          <Badge />
        </button>
        <button className="btn btn-square btn-ghost relative">
          <UsersIcon size={28} />
          <Badge />
        </button>
      </div>
    </div>
  )
}