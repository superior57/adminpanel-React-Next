import React from 'react'
import {CircularBadge} from '../badges'

const Item = ({icon, title, badge}) => (
  <>
    {icon}
    <span>{title}</span>
    {badge && (
      <CircularBadge size="sm" color={badge.color}>
        {badge.text}
      </CircularBadge>
    )}
  </>
)

export default Item
