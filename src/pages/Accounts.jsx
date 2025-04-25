import React from 'react'
import { Invoice } from '../components/Invoice/Invoice'
import { AddExpense } from '../components/addexpense/AddExpense'

export const Accounts = () => {
  return (
    <div className='flex flex-wrap'>
        <AddExpense/>
        <Invoice/>
    </div>
  )
}
