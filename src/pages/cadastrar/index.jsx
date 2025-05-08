import CustomInput from "@/components/CustomImput";
import CustomSelect from "@/components/CustomSelect";
import instance from "@/api/instance";
import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Cadastrar(){
     const[titulo, setTitulo] = useState("");
     const [diretor, setDiretor] = useState("");
     const [ano, setAno] = useState(0);
     const [genero, setGenero] = useState("");
     const [nota, setNota] = useState(0);
     const [sinopse, setSinopse] = useState("");
     const [banner, setBanner] = useState("")

     async function handleSubmit(event){
        event.preventDefault();

        if(!titulo || !diretor || !ano || !genero || !nota || !sinopse || !banner){
          toast.error("Preencha todos os campos!")
          return;
            
          }
        

        try { 
          await instance.post("/api/movies", {
            titulo: titulo,
            diretor: diretor,
            ano: ano,
            genero: genero,
            nota: nota,
            sinopse: sinopse,
            banner: banner
          })
          toast.success("Filme cadastrado com sucesso!");
          setTitulo("");
          setDiretor(""); 
          setAno(0);
          setNota(0);
          setGenero("");
          setSinopse("");
          setBanner("");
        } catch (error) {
          console.error(error);
          toast.error("Erro ao cadastrar filme!");
          
        }

       
     }

    return(
       <PageWrapper showButton={false}> 
       <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
        <h1 className="text-[40px] font-bold text-[#9a86f4]">Adicione um novo filme</h1>
      <p className=" text-[20px] text-gray-500">Preencha o formulário abaixo para adicionar um novo filme a sua coleção!</p>
      <div className="w-full flex justify-center pt-[40px]">
        <form 
        onSubmit={handleSubmit}
        
        className="w-[50%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border border-[#3a364c] flex flex-col p-5 gap-4">
          <CustomInput 
          label="Título"
          value={titulo}
          placeholder="Digite o título do filme"
          type="text"
          onChange={
            (event) => setTitulo(event.target.value)
          }
            
          />
           <CustomInput 
           value={diretor}
          label="Diretor"
          placeholder="Digite o nome do diretor"
          type="text"
          onChange={
            (event) => setDiretor(event.target.value)
          }
            
          />
           <div className="w-full flex gap-4">
            <div className="w-[50%]">
              <CustomInput
              value={ano}
              label="Ano"
              placeholder="Digite o ano de lançamento"
              type="number"
              onChange={
                (event) => setAno(event.target.value)
              }
              />
            </div>
            <div className="w-[50%]">
              <CustomSelect
              value={genero}
              onChange={
                (event) => setGenero(event.target.value)
              }
              label="Genero"
              options={[
                "Açao", 
                "Comédia", 
                "Drama", 
                "Romance", 
                "Ficção científica"
              ]}
              />
            </div>
           </div>
           <div className="w-[30%] items-center flex gap-2">
            <div className="w-[70%]">
            <CustomInput
            value={nota}
            label="Nota"
            placeholder="0"
            typer="number"
            onChange={
              (event) => setNota(event.target.value)
            }
            />
            </div>
            <p className="flex mt-7">10 / 10</p>
           </div>
           <div className="w-full flex flex-col gap-2">
            <label className="text-[17px] font-bold">Sinopse</label>
            <textarea 
            onChange={
              (event) => setSinopse(event.target.value)
            }
            className="w-full h-[150px] min-h-[150px] max-h-[150px] rounded-lg border border-[#ffffff1a]
             focus:border-purple-400 p-2 bg-[#141414] outline-none"
            value={sinopse}
            ></textarea>
           </div>
           
           <CustomInput
           value={banner}
           label="Banner"
           placeholder="URL da imagem"
           type="text"
           onChange={
            (event) => setBanner(event.target.value)
          }
           />
           <div className="w-full flex justify-end gap-4">
            <button type="reset" className="w-[100px] h-[50px] rounded-md bg-[#141414] cursor-pointer
            hover:bg-white/10
            border border-[#3a364a]">Cancelar
            </button>
            <button type="submit" className="w-[130px] h-[50px] rounded-md bg-[#9a86f4]
            cursor-pointer font-bold hover:bg-[#9a86f4]/80"
            >Salvar Filme
            </button>
           </div>
        </form>
      </div>
       </div>
       </PageWrapper>
    )
}