import React from 'react'

const MembersCard = ({item, index}) => {
  return (
    <tr>
        <td>{index}</td>
        <td>{item.backNum}</td>
        <td>{item.name}</td>
        <td>{item.tier}</td>
        <td>{item.games}</td>
        <td>{item.goals}</td>
        <td>{item.assists}</td>
    </tr>
  )
}

export default MembersCard