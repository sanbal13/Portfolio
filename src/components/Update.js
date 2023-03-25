import React from 'react'

export default function Update(props) {
  let section = props.section;
  return (
    <div className="update">{section} section will be updated with new {section}'s very soon...</div>
  )
}
