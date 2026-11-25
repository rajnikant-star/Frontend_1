import './App.css'

function Header() {
  return (
    <div className="header">
      <h1>Header Component</h1>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      <h1>Footer Component</h1>
    </div>
  )
}

function PersonDetails() {
  const name = "Rajnikant"
  const age = 19
  const studentClass = "FB"

  return (
    <div className="person">
      <h2>Person Details</h2>
      <h3>GLA University</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Class: {studentClass}</p>
    </div>
  )
}

function App() {
  const a = 10
  const b = 20

  return (
    <div className="container">
      <Header />

      <h1>Hello World</h1>

      <div className="dynamic">
        <h2>Dynamic Expressions</h2>
        <p>Addition: {a + b}</p>
        <p>Multiplication: {a * b}</p>
      </div>

      <PersonDetails />

      <Footer />
    </div>
  )
}

export default App