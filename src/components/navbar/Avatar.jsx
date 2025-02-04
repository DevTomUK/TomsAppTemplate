import React from 'react'
import './avatar.css'

export default function Avatar({ size }) {
  return (
    <div className="avatar-container" style={size}>
        <div className="avatar-wrapper">
            A
        </div>
    </div>
  )
}
