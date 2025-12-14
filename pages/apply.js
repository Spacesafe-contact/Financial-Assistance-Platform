import { supabase } from '../lib/supabaseClient'

export default function Apply() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    const { error } = await supabase.auth.signUp({ email, password })

    if (error) alert(error.message)
    else alert('Check your email to verify your account')
  }

  return (
    <div style={{ padding: '40px' }}>
      <h3>Apply</h3>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" required />
        <br /><br />
        <input name="password" type="password" placeholder="Password" required />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}
