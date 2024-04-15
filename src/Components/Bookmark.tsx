import { Receipt } from "../types/Receipt.d";
import close from '../images/close.svg';
import BookmarkItem from "./BookmarkItem";

interface Props {
    receipts: Receipt[];
}

export default function Bookmark({ receipts }: Props) {
    return (
        <div>
            {/* Overlay */}
            <div className="bg-zinc-950 w-full h-screen opacity-10">
            </div>
            {/* Bookmark container */}
            <div className="fixed bottom-0 w-full h-1/3 bg-zinc-950 rounded-t-3xl">
                <div className="flex flex-col">
                    {/* Close button */}
                    <div className="ml-auto object-fill">
                        <img className="h-14 w-14 pt-4 pr-4" src={close} />
                    </div>
                    <div className="overflow-y-auto h-44 grid grid-cols-1 gap-4">
                        {receipts.map(item => {
                            const receipt: Receipt = {
                                id: item.id,
                                title: item.title,
                                imageUrl: item.imageUrl,
                            };
                            return (<BookmarkItem receipt={receipt} />)
                        }

                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}