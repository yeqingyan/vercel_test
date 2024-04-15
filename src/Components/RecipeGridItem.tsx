import React from 'react';
import { Recipe } from '../types/Recipe.d';
import bookmark from '../images/bookmark_white.svg';
import { useDispatch } from 'react-redux';
import { addBookmark, removeBookmark } from '../reducers/bookmarks';

interface Props {
    key: number;
    recipe: Recipe;
    bookmarked: boolean;
}

export default function RecipeGridItem({ recipe, bookmarked }: Props) {
    const dispatch = useDispatch()
    return (
        <div className="flex flex-col p-1 h-52">
            {/* Thumbnail */}
            <div>
                <img className="aspect-square p-1 h-30 w-30 rounded-3xl" src={recipe.imageUrl}></img>
            </div>
            {/* Name and Icon */}
            <div className="flex flex-row flex-nowrap">
                <div className="w-5/6 font-inter font-medium text-xs">{recipe.title}</div>
                <div className={`flex place-content-center ml-auto w-6 h-6 rounded-full ${bookmarked ? 'bg-blue-500' : 'bg-neutral-700'}`}>
                    <img className="w-2" src={bookmark} onClick={() => {
                        if (bookmarked) {
                            dispatch(removeBookmark(recipe.id));
                        } else {
                            dispatch(addBookmark(recipe.id));
                        }
                    }
                    } />
                </div>

            </div>
        </div>
    )
}