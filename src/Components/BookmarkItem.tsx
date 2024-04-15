import { useDispatch } from 'react-redux';
import { Recipe } from '../types/Recipe.d';
import { removeBookmark } from '../reducers/bookmarks';

interface Props {
    recipe: Recipe;
}

export default function BookmarkItem({ recipe }: Props) {
    const dispatch = useDispatch()
    return (
        <div key={recipe.id} className="flex flex-row flex-nowrap justify-between items-center place-content-center	w-full h-14 px-4">
            {/* Thumbnail */}
            <img className="aspect-square p-1 h-full w-14 rounded-lg" src={recipe.imageUrl}></img>
            {/* Name */}
            <div className="font-inter font-normal text-xs text-white px-1">
                {recipe.title}
            </div>
            {/* Remove button */}
            <div 
                className='w-18 text-white text-center	text-xs bg-zinc-700 rounded-full px-4 my-3' 
                onClick={() => dispatch(removeBookmark(recipe.id))}>
                Remove
            </div>
        </div>
    )
}