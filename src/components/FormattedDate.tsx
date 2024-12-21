import { Suspense } from 'react'

function FormattedDateInner() {
  const formattedDate = new Date().toLocaleString('pt-BR', { 
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  return <span>{formattedDate}</span>
}

export function FormattedDate() {
  return (
    <Suspense fallback={<span>Carregando...</span>}>
      <FormattedDateInner />
    </Suspense>
  )
}

