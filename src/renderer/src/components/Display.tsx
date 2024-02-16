import { FaBars } from 'react-icons/fa6'
import { FaHistory } from 'react-icons/fa'
import { BsBoxArrowInUpRight } from 'react-icons/bs'

export default function Display({
  numero,
  calculo
}: {
  numero: string
  calculo: string
}): JSX.Element {
  return (
    <div className="h-full mr-3">
      <div className="w-full flex flex-row justify-between ">
        <div className="flex flex-row items-center">
          <button
            title="Abrir Navegação"
            type="button"
            className="py-3 px-3 hover:bg-gray-500 rounded mr-1"
          >
            <FaBars size={15} />
          </button>
          <span className="text-lg font-semibold">Padrão</span>
          <button
            title="manter na parte superior"
            className="ml-3 hover:bg-slate-500 p-1 rounded"
            type="button"
          >
            <BsBoxArrowInUpRight size={20} />
          </button>
        </div>
        <div className="flex flex-row items-center ">
          <button title="Histórico" className="hover:bg-gray-500 p-2 rounded" type="button">
            <FaHistory />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-end mt-3">
        <span className="h-4 mr-3">{calculo}</span>
        <span className="text-[3.25rem] font-bold">{numero}</span>
      </div>
    </div>
  )
}
