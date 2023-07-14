import EmptyMemories from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import { cookies, headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'


dayjs.locale(ptBr)

interface MemoryProps {
  data: {
    coverUrl: string
    content?: string
    createdAt: string
  }

}

export default async function MemoryPage() {

  const headersList = headers().get('x-invoke-path');
  const id = headersList?.replace('/memories/', '')

  const isAuthenticated = cookies().has('token')
  if (!isAuthenticated) return <EmptyMemories />

  const token = cookies().get('token')?.value
  const response: MemoryProps = await api.get(`/memories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  console.log(response.data)


  return (
    <div className='flex flex-col gap-10 p-8'>
      <Link href='/' className='bg-white text-blue-500 ml-4'>VOLTAR</Link>
      <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
        {dayjs(response.data.createdAt).format('D[ de ]MMMM[, ] YYYY')}
      </time>

      <Image
        className='aspect-video w-full rounded-lg object-cover'
        src={response.data.coverUrl}
        height={280}
        width={592}
        alt="memory image"
      />
      <p className='text-lg leading-relaxed text-gray-100'>{response.data.content}</p>
    </div>
  )
}
