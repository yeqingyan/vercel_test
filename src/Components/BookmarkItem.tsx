import { Receipt } from '../types/Receipt.d';

interface Props {
    receipt: Receipt;
}

export default function BookmarkItem({ receipt }: Props) {
    return (
        <div key={receipt.id} className="flex flex-row flex-nowrap justify-between items-center place-content-center	w-full h-14 px-4">
            {/* Thumbnail */}
            <img className="aspect-square p-1 h-full w-14 rounded-lg" src={receipt.imageUrl}></img>
            {/* Name */}
            <div className="font-inter font-normal text-xs text-white px-1">
                {receipt.title}
            </div>
            {/* Remove button */}
            <div className='w-18 text-white text-center	text-xs bg-zinc-700 rounded-full px-4 my-3'>
                Remove
            </div>
        </div>
    )
}