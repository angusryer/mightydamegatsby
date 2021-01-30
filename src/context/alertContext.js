import React, { useCallback, useEffect, useState, createContext } from "react"

// TODO configure styling for each of the below style classNames
export const WARN = "alert_warn" // orange
export const SUCCESS = "alert_success" // green
export const INFO = "alert_info" // blue
export const ERROR = "alert_error" // red

const AlertContext = createContext(null)

export default AlertContext

export function AlertContextProvider({ children }) {
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    if (alerts.length > 0) {
      const timer = setTimeout(
        () => setAlerts((alerts) => alerts.slice(1)),
        4000
      )
      return () => clearTimeout(timer)
    }
  }, [alerts])

  const newAlert = useCallback(
    function (type, alert) {
      setAlerts((alerts) => [...alerts, { type: type, text: alert }])
    },
    [setAlerts]
  )

  return (
    <AlertContext.Provider value={newAlert}>
      <div className="fixed top-2 right-2">
        {alerts.map((alert, i) => (
          <div className={alert.type} key={i}>
            {alert.text}
          </div>
        ))}
      </div>
      {children}
    </AlertContext.Provider>
  )
}
