import PageWrapper from "@/components/PageWrapper";
import { useRouter } from "next/router";
import { LuArrowLeft } from "react-icons/lu"
import { FaRegEdit } from "react-icons/fa"
import { BiSolidTrash } from "react-icons/bi"
import { useState } from "react";
import instance from "@/api/instance";

export default function Filme (){
    const router = useRouter()
    const { id } = router.query
    const [filme, setFilme] = useState({})
    
     useEffect (() => {
    async function getFilmeById(){
        const response = await instance.get(`/api/movies${id}`)
        setFilme(response.data)

        if(!id){
            getFilmeById
        }
      }
     
      
     }, [])


    return(
        <PageWrapper
           showHeader = {false}
        >
            <div className="w-full h-full min-h-screen flex flex-col px-[300px] pt-[12] items-start">
                <button 
                onClick={() => router.back()}
                className="px-5 py-2 text-[#8a898c] gap-2 flex items-center 
                justify-center rounded-lg hover:bg-[#27282b] hover:text-[#8f7fd8]">
                <LuArrowLeft/>
                <p>Voltar para a lista de filmes</p>
            </button>
            <div className="w-full min-h-[90vh] flex">
                 <div className="w-[40%] h-full flex flex-col">
                 <div className="w-full h-[90%]">
                    <img
                    className="w-full h-full roudnded-lg object-cover"
                    src="https://play-lh.googleusercontent.com/pAdEMwuP-lLbi4aEJHJcHKVl9dD5bMJhxeygLaoyS2w-Yvlp3sKVQkAcYJD8dOxZgI8=w240-h480-rw"
                    alt=""
                    />
                 </div>

                 <div className="w-full flex h-[10%] pt-4 justify-between">
                    <button className="w-[46%] h-full border border-[#9b87f533] rounded-md text-[#9b87f5] 
                    cursor-pointer hover:bg-[#9b87f5]/20 flex items-center justify-center gap-2 py-2">
                    <FaRegEdit size={20} /> 
                    Editar filme
                    </button>

                    <button className="w-[46%] h-full border border-[#ef444433] rounded-md text-[#ef4444] 
                    hover:bg-[#ef4444]/20 flex
                    items-center justify-center gap-2 py-2 cursor-pointer">
                    <BiSolidTrash size={20} />
                    Excluir filme
                    </button>

                 </div>
                 </div>
                 <div className="w-[60%] h-full flex flex-col pl-4">
                    <div className="w-full flex gap-2 items-baseline">
                        <h1 className="text-[35px] text-[#9b87f5] font-bold ">O Conde de Monte Cristo</h1>
                        <p className="text-[#8a898c] font-semibold text-[17px]">(2002)</p>
                    </div>
                    <div className="w-full gap-4 flex">
                        <div className="py-1 px-4 rounded-2xl bg-[#4ade80]/20 text-[#4ade80]">
                        <p className="text-[17px]">10/10</p>
                        </div>
                        <div className="py-1 px-4 rounded-2xl bg-[#9b87f5]/20 text-[#9b87f5]">
                        <p className="text-[17px]"
                        >Aventura/Ação
                        </p>
                        </div>
                    </div>
                    <div className="w-full flex-col flex mt-8">
                            <h4 className="text-[20px] font-bold">Diretor</h4>
                            <p className="text-[#8a898c]">Kevin Reynolds</p>
                        </div>
                        <div className="w-full flex-col flex mt-8">
                            <h4 className="text-[20px] font-bold">Sinopse</h4>
                            <p className="text-[#8a898c]">Edmond Dantes é traído por seu amigo Fernand Mondego, 
                                que o acusa falsamente de ter colaborado na fuga de Napoleão.
                                </p>
                        </div>
                 </div>
                </div>
            </div>

        </PageWrapper>
           

       
    )
}