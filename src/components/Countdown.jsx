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
  const [timeLeft, setTimeLeft] = React.useState(getTimeLeft());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0e1a24] py-10 flex justify-center items-center px-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-md sm:max-w-3xl">
        <CountdownUnit label="Días" value={timeLeft.days} />
        <CountdownUnit label="Horas" value={timeLeft.hours} />
        <CountdownUnit label="Min" value={timeLeft.minutes} />
        <CountdownUnit label="Seg" value={timeLeft.seconds} />
      </div>
    </div>
  );
}

function CountdownUnit({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-black/80 text-cyan-300 border border-cyan-500 backdrop-blur-sm shadow-md w-full">
      <span className="font-mono text-4xl sm:text-5xl">{value}</span>
      <span className="text-xs sm:text-sm uppercase tracking-wide mt-1">{label}</span>
    </div>
  );
}

export default Countdown
