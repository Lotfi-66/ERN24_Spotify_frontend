import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSearch } from '../../redux/albums/albumSlice';

const SearchBar = () => {

    //on crée un state pour capter la valeur de l'input
    const [searchWord, setSearchWord] = useState('')
    const [error, setError] = useState('')
    //on récupère le hook dispatch
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        //si searchword contient moins de 3 caractère on set une error et on return
        if (searchWord.length < 3) {
            setError('Votre recherche doit contenir au moins 3 caractères')
            return
        } else {
            setError('')
            dispatch(fetchSearch(searchWord))
        }
    }

    return (
        <div className="max-w-xl mx-auto mt-8">
            <form 
            onSubmit={handleSubmit} 
            autoComplete='off'
            className="relative"
            >
                <input
                    type="text"
                    className="block w-full p-4 pl-4 pr-12 text-sm text-white border rounded-full bg-[#242424] border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none"
                    placeholder="Qu'est-ce que tu veux écouter ?"
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="absolute right-2.5 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-400 focus:bg-green-400 active:bg-green-600 transition-colors duration-200 ease-in-out rounded-full p-2 focus:outline-none"
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
                {error && <p className='text-red-500'>{error}</p>}
            </form>
        </div>
    )
}

export default SearchBar