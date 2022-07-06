import { useState, useEffect } from "react"
import { useRouter } from 'next/router'

export default function Details() {
  const router = useRouter()
  const query = router.query.id
  const [details, setDetails] = useState([])
  const fetchDetails = async() => {
    const res = await fetch('/api/dishes')
    const data = await res.json()
    setDetails(data)
  }

  useEffect(()=> {
      fetchDetails()
  }, [])

  return (
  <>
  {
    details.map(detail=>{
      return<>
        <div key={detail.id}>
          {detail.dishes[0].image}
        </div>
      </>
    })
  }
  </>
  )
}