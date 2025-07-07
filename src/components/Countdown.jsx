import * as React from 'react'

// Función para calcular el tiempo restante
function getTimeLeft() {
  const target = new Date('2025-11-17T00:00:00')
  const now = new Date()
  const diff = target - now

  const totalSeconds = Math.max(0, Math.floor(diff / 1000))
  const days = Math.floor(totalSeconds / (60 * 60 * 24))
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

function Countdown() {
  const [timeLeft, setTimeLeft] = React.useState(getTimeLeft())

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <CountdownUnit label="Días" value={timeLeft.days} />
        <CountdownUnit label="Horas" value={timeLeft.hours} />
        <CountdownUnit label="Min" value={timeLeft.minutes} />
        <CountdownUnit label="Seg" value={timeLeft.seconds} />
      </div>
    </div>
  )
}

function CountdownUnit({ label, value }) {
  return (
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="font-mono text-5xl">{value}</span>
      {label}
    </div>
  )
}

export default Countdown
