import { useCallback, useState } from "react"

export const useNavbarCollapseState = () => {
  const [isCollapsed, setCollapsed] = useState(true)
  const toggle = useCallback(() => setCollapsed(!isCollapsed), [isCollapsed])
  return [isCollapsed, toggle, setCollapsed]
}

export const useNavbarDisabledState = () => {
  const [isDisable, setDisabled] = useState(false)
  return [isDisable, setDisabled]
}
