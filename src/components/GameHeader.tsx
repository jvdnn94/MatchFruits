import Button from './UI/ButtonComp'
import type { GameHeaderProps } from '../types/services'

function GameHeader({ score, moves,ResetFunc }:GameHeaderProps ) {
    return (
        <div className='Game-Header bg-sky-800/60 px-6 py-8 rounded-md '>
            <h1 className='font-bold text-4xl'>🎮FRUITSMATCH CARD GAME</h1>
            <div className="stat flex justify-center">
                <div className="stat-item flex flex-col mx-12 font-bold text-2xl">
                    <span>score:</span>
                    <span className='text-amber-400'>{score}</span>
                </div>
                <div className="stat-item flex flex-col mx-12 font-bold text-2xl">
                    <span>moves:</span>
                    <span className='text-amber-400'>{moves}</span>
                </div>
                
            </div>
           <div className="flex justify-center">
             <Button onClick={ResetFunc}>Reset Game!!!</Button>
           </div>

        </div>
    )
}

export default GameHeader
