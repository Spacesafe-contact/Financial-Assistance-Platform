import { supabase } from '../lib/supabaseClient'

export default function Application() {

  const submitApplication = async (e) => {
    e.preventDefault()

    const user = (await supabase.auth.getUser()).data.user

    const { error } = await supabase.from('applications').insert({
      user_id: user.id,
      employment_status: e.target.employment.value,
      monthly_income: e.target.income.value,
      household_size: e.target.household.value,
      benefit_type: e.target.benefit.value,
      reason: e.target.reason.value
    })

    if (error) alert(error.message)
    else alert('Application submitted')
  }

  return (
    <div style={{ padding: 40 }}>
      <h3>Application Form</h3>

      <form onSubmit={submitApplication}>
        <input name="employment" placeholder="Employment Status" required /><br/><br/>
        <input name="income" type="number" placeholder="Monthly Income" required /><br/><br/>
        <input name="household" type="number" placeholder="Household Size" required /><br/><br/>
        <input name="benefit" placeholder="Benefit Type" required /><br/><br/>
        <textarea name="reason" placeholder="Reason for application" required /><br/><br/>
        <button>Submit</button>
      </form>
    </div>
  )
}
