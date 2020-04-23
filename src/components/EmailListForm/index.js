import React from 'react'

export default function emailListForm() {
  return (
    <div>
      <h1>To join the mailing list please fill out this form</h1>
      <form>
        <input 
        type='text'
        required
        />
        <label>
          <span>Name</span>
        </label>

        <input 
        type='text'
        required
        />
        <label>
          <span>Email</span>
        </label>

        <button 
        type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}
