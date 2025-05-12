import { useRouter } from "next/router"

export default function CardFilme({ filme }){
    const router = useRouter ()

    function handleClickNavegation(){
        router.push(`/filme/${filme.id}`)
        
    }
    
    return(
        <div className="w-[350px] h-[280px] flex flex-col rounded-lg bg-[#222222] 
        border border-transparent hover:border-[#8f7bb8] 
        cursor-pointer transition-all duration-300 ease-in-out">
            <div className="w-full h-[70%] rounded-t-lg relative">
                <img
                className="w-full h-full rounded-t-lg object-cover"
                src={filme.banner}
                alt={filme.titulo}
                />
                <div className="absolute top-1 left-2 flex text-[#9ca3af]">
                    <p className="text-[17px] text-green-400 font-semibold">{filme.nota}</p>
                    <p>/10</p>
                </div>
            </div>
            <div className="w-full h-[30%] flex flex-col pt-2 px-4">
                <p className="text-[15px] font-bold">{filme.titulo}</p>
                <p className="text-[15px] text-[#8a898c]">{filme.diretor}</p>
                <div className="w ful flex justify-between">
                    <p className="text-[15px] text-[#8a898c]">{filme.ano}</p>
                    <div className="px-2 py-0 rounded-lg bg-[#8f7bd8]/10">{filme.genero}</div>
                </div>
            </div>
        </div>
    )
    
}