import React from 'react'
import './dashboard.css'
import WorkplaceList from './WorkplaceList'
import StaffList from './StaffList'
import TemplateList from './TemplateList'

export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <WorkplaceList />
      <StaffList />
      <TemplateList />
    </div>
  )
}
