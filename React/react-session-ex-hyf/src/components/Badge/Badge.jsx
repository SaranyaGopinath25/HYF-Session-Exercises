import React from 'react'

// https://www.figma.com/design/QERVV4a2Fpa1FmsZ5LGW3S/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-Figma-%E2%80%93-PRO-VARIABLES--v8.0-?node-id=12-539&p=f&t=zFetcxZxm36wJ46T-0
/*
 *  label : String
 *  icon
 *  iconPosition: "left" | "right"
 *  color: string  "blue", "red", "grey", ....
 *  radius: "xs" | "s" | "m" | "l" | "xl"
*/

function Badge({label, icon, iconPosition, color, radius}) {
  return (
    <div>
        {icon}
        {label}
    </div>
  )
}

export default Badge