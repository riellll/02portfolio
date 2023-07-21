

export default async function GetMessage() {
    const res = await fetch(`https://02portfolio.vercel.app/api/contact`,  { next: { revalidate: 10 } })
 
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

