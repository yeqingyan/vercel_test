import { Recipe } from "../types/Recipe.d";
import close from '../images/close.svg';
import BookmarkItem from "./BookmarkItem";
import { useDispatch } from "react-redux";
import { closeBookmark } from "../reducers/bookmarks";

interface Props {
    recipes: Recipe[];
}

export default function Bookmark({ recipes }: Props) {
    const dispatch = useDispatch()

    function renderEmpty() {
        return (
            <div
                className='text-white text-center text-xs rounded-full px-4 my-3'>
                No recipe bookmarked yet
            </div>
        );
    }

    function renderBookmark(recipes: Recipe[]) {
        return (
            <div className="overflow-y-auto h-44 grid grid-cols-1 gap-4">
                {recipes.map(item => {
                    const recipe: Recipe = {
                        id: item.id,
                        title: item.title,
                        imageUrl: item.imageUrl,
                    };
                    return (<BookmarkItem recipe={recipe} />)
                }
                )}
            </div >);
    }

    return (
        <div>
            {/* Overlay */}
            <div className="bg-zinc-950 w-full h-screen opacity-10" onClick={() => dispatch(closeBookmark())}>
            </div>
            {/* Bookmark container */}
            <div className="fixed bottom-0 w-full h-1/3 bg-zinc-950 rounded-t-3xl">
                <div className="flex flex-col">
                    {/* Close button */}
                    <div className="ml-auto object-fill" onClick={() => dispatch(closeBookmark())}>
                        <img className="h-14 w-14 pt-4 pr-4" src={close} />
                    </div>
                    {recipes.length == 0 ? renderEmpty() : renderBookmark(recipes)}
                </div>
            </div>
        </div>
    )
}