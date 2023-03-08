import React from 'react'
import TenentHome from '../../pages/Tenant/TenentHome'
import TenantNavbar from '../Header/TenantNav'


export default function Tenant() {
  return (
    <div>
      <TenantNavbar></TenantNavbar>
      <TenentHome></TenentHome>
    </div>
  )
}
