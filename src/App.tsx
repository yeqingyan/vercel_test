import React from 'react';
import bookmark from './images/bookmark_black.svg';
import './App.css';
import { items } from './data';
import RecipeGridItem from './Components/RecipeGridItem';
import { Recipe } from './types/Recipe.d';
import Bookmark from './Components/Bookmark';
import { useGetRecipesQuery } from './apis/recipes';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './app/store';
import { openBookmark } from './reducers/bookmarks';

function renderBookmark(opening: boolean, bookmarks: Set<number>, recipes: Recipe[]) {
  if (opening) {
    const bookmarkedRecipes = recipes.filter(item => bookmarks.has(item.id))
    return (
      <div className="fixed top-0 left-0 w-full h-screen">
        <Bookmark recipes={bookmarkedRecipes}/>
      </div>)
  } else {
    return null;
  }
}

function App() {
  const { data: recipes, isLoading } = useGetRecipesQuery()
  const bookmarks = useSelector((state: AppState) => state.bookmarks.bookmarks)
  const bookmarkOpening = useSelector((state: AppState) => state.bookmarks.bookmarkOpening)
  const dispatch = useDispatch()
  if ((isLoading == true) || recipes == undefined) {
    return null;
  }

  return (
    <div className="App">
      {/* header */}
      <div className="fixed w-full h-28 bg-white">
        <div className="flex flex-row h-28 w-full items-end">
          <div className="flex justify-center w-full mx-5 mb-5 h-3/5 items-end">
            <div className="flex-grow text-center font-inter text-sm font-semibold leading-4 tracking-header text-left">
              RECIPEBOX
            </div>
            <div className="relative ml-auto w-4" onClick={() => dispatch(openBookmark())}>
              <div className="absolute place-content-center w-2 h-2 -top-1 left-2 rounded-full bg-red-600">
                <div className="text-ssm">{bookmarks.size}</div>
              </div>
              <img className="w-3 fill-black" src={bookmark} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full pt-28 px-4">
        <div className="flex justify-center overflow-y-auto h-full w-full h-70">
          <div className="grid grid-cols-2 gap-4">
            {recipes.map(item => (<RecipeGridItem key={item.id} recipe={item} bookmarked={bookmarks.has(item.id)} />))}
            {/* <div key={item.id} className="bg-blue-200 p-4"> */}
            {/* <li className="p-2 hover:bg-blue-100">{item.title}</li> */}
            {/* </div> */}
            {/* )} */}
          </div>
        </div>
      </div>
      {renderBookmark(bookmarkOpening, bookmarks, recipes)}
      {/* <div className="fixed top-0 left-0 w-full h-screen">
        <Bookmark recipes={items.map(item => ({id: item.id,
          title: item.title,
                imageUrl: item.image[0].url,}))}/>
      </div> */}
    </div>
  );
}

export default App;
