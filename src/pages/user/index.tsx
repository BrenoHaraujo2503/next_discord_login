import { useSession } from "next-auth/react"
import Image from "next/image"
import { useEffect } from "react"

export default function User() {
  const { data, status } = useSession()
  useEffect(() => {
    if(status === "loading") {
      console.log(status)
    }
    console.log(status)
  },[status])
  return (
    <div>
      {status === 'loading' ? (
        <h1>loading</h1>
      ) : (
        <>
        <h1>Hello</h1>
        <h2>Name: {data?.user.name}</h2>
        <h2>Email: {data?.user.email}</h2>
        <Image 
          src={data?.user.image}
          alt={data?.user.name}
          width={200}
          height={200}
        />
        <h3>Data de expiração do cookie: {data?.expires}</h3>
        <button>Sair</button></>
      )}
    </div>
  )
}
