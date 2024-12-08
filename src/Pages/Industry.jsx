import React from 'react';
import Card from '../Components/Card';
import array from '../Json/Industry.json';
import './Style/Industry.css'

export default function Industry() {
  
  return (
    <div className='industry'>
      <div className='indusGrid'>
      {array.map((data) => {
        return <Card icon={data.icon} title={data.title} description={data.description}/>
      })}
    </div>
    </div>
  )
}
