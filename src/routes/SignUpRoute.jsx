import React, { useState } from 'react'

export default function SignUpRoute() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleChangeEmail(e) {
        setEmail(e.target)
    }

  return (
    <div>
        <input type="email" value={email} onChange={handleChangeEmail} />
        <input type="password" />
    </div>
  )
}
