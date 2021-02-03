import React, { useCallback, useEffect, useState, createContext } from "react"

// TODO configure styling for each of the below style classNames
const types = {
  WARN: "alert_warn", // orange
  SUCCESS: "alert_success", // green
  INFO: "alert_info", // blue
  ERROR: "alert_error", // red
}

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
    <AlertContext.Provider
      value={{
        types: types,
        newAlert,
      }}
    >
      {alerts.map((alert, i) => (
        <div key={i} className="fixed flex self-center my-3 items-center justify-start rounded-xl bg-opacity-10 w-1/4 max-w-xs h-auto z-10 overflow-hidden">
          <div className={`${alert.type} bg-opacity-75 w-full h-full text-xs text-secondary text-center font-normal p-3`}>
            {alert.text}
          </div>
        </div>
      ))}
      {children}
    </AlertContext.Provider>
  )
}
