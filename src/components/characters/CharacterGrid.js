import React from 'react'
import Loading from '../loading/Loading'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({isLoading, items}) => {
    return isLoading ? (<Loading />) : (
        <section className='cards'>
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item}>
                    <h1>{item.name}</h1>
                </CharacterItem>
                
            ))}
        </section>
    )
}

export default CharacterGrid