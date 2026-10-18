import type { WinCompProps } from "../types/services";
import Button from "./UI/ButtonComp";



function WinComp({ moves, onClose }: WinCompProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"

    >
      <div
        className="bg-gray-800 py-6 px-8 rounded-2xl shadow-xl text-center max-w-md w-full" >
        <h1 className="text-4xl font-bold my-4">Congratulations Buddy!!! 🎉</h1>
        <h2 className="text-amber-50 text-2xl font-bold">
          You Win the game in {moves} moves.
        </h2>
        <div className="flex justify-center mt-4">
          <Button onClick={onClose} variant="light"   >RESTART GAME</Button>
        </div>
      </div>

    </div>
  );
}

export default WinComp;
