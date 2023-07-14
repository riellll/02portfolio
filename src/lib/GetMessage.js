

export default async function GetMessage() {
    const res = await fetch(`${process.env.API_URL}/api/contact`,  { next: { revalidate: 10 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

