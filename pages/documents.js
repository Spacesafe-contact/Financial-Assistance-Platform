import { supabase } from '../lib/supabaseClient'

export default function Documents() {
  const uploadFile = async (e, type) => {
    const file = e.target.files[0]
    const user = (await supabase.auth.getUser()).data.user

    const filePath = `${user.id}/${type}-${file.name}`

    await supabase.storage
      .from('user-documents')
      .upload(filePath, file)

    await supabase.from('documents').insert({
      user_id: user.id,
      document_type: type,
      file_url: filePath
    })

    alert('Uploaded successfully')
  }

  return (
    <div className="container mt-4">
      <h4>Upload Documents</h4>

      <label>ID Document</label>
      <input type="file" onChange={(e) => uploadFile(e, 'ID')} />

      <label className="mt-3">Proof of Income</label>
      <input type="file" onChange={(e) => uploadFile(e, 'INCOME_PROOF')} />
    </div>
  )
}
