import { useState } from "react"
const Contador = () => {
  const [numero, setNumero] = useState(0)

  const sumar = () => {
    if (numero < 10) {
      setNumero(numero + 1)
    }
  }

  const restar = () => {
    numero > 0 ? setNumero(numero - 1) : setNumero(numero)
  }
  return (
    <div>
      <p>Has hecho click {numero} veces</p>
      <button onClick={sumar} disabled={numero >= 10}>
        Sumar
      </button>
      <button onClick={restar} disabled={numero <= 0}>
        Restar
      </button>
    </div>
  )
}

export default Contador
