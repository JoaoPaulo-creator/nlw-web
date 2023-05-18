import { getUser } from "@/lib/auth";
import { User } from "lucide-react";
import Image from "next/image";

export default function Profile() {

  const { name, avatarUrl } = getUser()
  

  return (
    <div className="flex items-center gap-3 text-left">
      {/* 
        pelo fato da imagem do avatar ser de origem externa, é necessário passar o width e o height,
        indicando qual o tamanhoa em que a imagem deverá ser carregada.
        Não tem a ver com a exibição em tela, pois seriam ajustes feitos usando css


        Outro ponto, imagens externas nao sao carregadas por padrao no next, sera necessario
        colocar mais uma propriedade no arquivo next.config.js
      */}
      <Image src={avatarUrl} width={40} height={40}  alt="profile avatar" className="w-10 h-10 rounded-full"/>
      <p className="text-sm leading-snugly max-w-[140px]">
        {name}
        <a href="" className="block text-red-400 hover:text-red-300">Sair</a>
      </p>
    </div>
  )
}