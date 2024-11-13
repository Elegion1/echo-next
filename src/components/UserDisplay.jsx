import CheckIcon from "@/icons/CheckIcon"
import DotsIcon from "@/icons/DotsIcon"

export default function UserDisplay({name, username, verified, timeAgo}) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
                <p className="text-l font-bold truncate">
                    {name}
                </p>
                {verified && <CheckIcon size={20} />}
            </div>
            <small>@{username} · {timeAgo}</small>
            <DotsIcon size={20} />
        </div>
    )
}