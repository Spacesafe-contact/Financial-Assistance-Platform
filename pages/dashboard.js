import { supabase } from '../lib/supabaseClient'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })
  }, [])

  if (!user) return <p>Loading...</p>

  return (
    <div style={{ padding: 40 }}>
      <h3>Welcome</h3>
      <p>Email: {user.email}</p>

      <ul>
        <li><a href="/application">Submit Application</a></li>
        <li><a href="/documents">Upload Documents</a></li>
        <li><a href="/banking">Update Banking Info</a></li>
      </ul>
    </div>
  )
}
