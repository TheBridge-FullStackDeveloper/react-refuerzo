# Soluciones sugeridas — Ejercicios Clase 1

---

## Ejercicio 1: Mensaje con variable

```jsx
function App() {
  const mensaje = "Bienvenidos a React"
  return <h1>{mensaje}</h1>
}
```

---

## Ejercicio 2: Componente Saludo con props

```jsx
function Saludo({ nombre }) {
  return <p>Hola, {nombre}</p>
}

function App() {
  return (
    <>
      <Saludo nombre="Ana" />
      <Saludo nombre="Luis" />
    </>
  )
}
```

---

## Ejercicio 3: Contador con Sumar y Restar

```jsx
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
      <button onClick={() => setCount(count - 1)}>Restar</button>
    </div>
  )
}
```

---

## Ejercicio 4: Contador con límite 0–10

```jsx
function App() {
  const [count, setCount] = useState(0)

  const sumar = () => {
    if (count < 10) setCount(count + 1)
  }

  const restar = () => {
    if (count > 0) setCount(count - 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={sumar} disabled={count >= 10}>
        Sumar
      </button>
      <button onClick={restar} disabled={count <= 0}>
        Restar
      </button>
    </div>
  )
}
```

---
