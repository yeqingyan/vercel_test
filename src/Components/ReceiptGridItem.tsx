import React from 'react';
import { Receipt } from '../types/Receipt.d';
import bookmark from '../images/bookmark_white.svg';

interface Props {
    receipt: Receipt;
}

export default function ReceiptGridItem({ receipt }: Props) {
    return (
        <div key={receipt.id} className="flex flex-col p-1 h-52">
            {/* Thumbnail */}
            <div>
                <img className="aspect-square p-1 h-30 w-30 rounded-3xl" src={receipt.imageUrl}></img>
            </div>
            {/* Name and Icon */}
            <div className="flex flex-row flex-nowrap">
                <div className="w-5/6 font-inter font-medium text-xs">{receipt.title}</div>
                <div className="flex place-content-center ml-auto w-6 h-6 rounded-full bg-neutral-700">
                    <img className="w-2" src={bookmark} />
                </div>
                
            </div>
        </div>
    )
}