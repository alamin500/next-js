import React from 'react'

const admin = ({users}) => {
 return (
  <div>
   <h1>This is admin : {users.length} </h1>
  </div>
 )
}

export default admin

export async function getStaticProps() {
 const res = await fetch('https://jsonplaceholder.typicode.com/users');
 const users = await res.json();
 return {
  props : {users}
 }
}