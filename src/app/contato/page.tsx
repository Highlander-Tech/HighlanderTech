import { Cards } from './Cards'
import { Form } from './Form'

export default function Contato() {
  return (
    <main className="mx-0 flex w-11/12 flex-col items-center justify-between gap-8 md:max-w-6xl md:flex-row md:items-start md:gap-20">
      <Form />
      <Cards />
    </main>
  )
}
