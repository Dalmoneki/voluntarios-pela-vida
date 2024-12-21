import { Suspense } from 'react'
import { FormattedDate } from '../components/FormattedDate'
import ClientPage from '../components/ClientPage'

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ClientPage>
        <FormattedDate />
      </ClientPage>
    </Suspense>
  )
}

