// Place ALL react components into this one single file
// importing react and react dom
// import React from 'react'
// import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      <h1><Homepage /></h1>
    </div>
  )
}

const Homepage = () => {
  return(
    <div>
      <button>Checkout</button>
    </div>
  )
}

//Account info
const F1 = () => {
  return (
    <form>
      <label>
        Name:
      <input type="text" name="name" />
      </label>
      <label>
        Email:
      <input type="text" name="email" />
      </label>
      <label>
        Password:
      <input type="text" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

// Address Info
const F2 = () => {
  return (
    <form>
      <h2>Address Info</h2>
      <label>
        Line 1
      <input type="text" name="line-1" />
      </label>
      <label>
        Line 2
      <input type="text" name="line-2" />
      </label>
      <label>
        City
      <input type="text" name="city" />
      </label>
      <label>
        State
      <input type="text" name="state" />
      </label>
      <label>
        ZIP Code
      <input type="text" name="zip" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

// CC info
const F3 = () => {
  return (
    <form>
      <h2>Credit Card Info</h2>
      <label>
        Card Number
      <input type="text" name="card-number" />
      </label>
      <label>
        Exiration date
      <input type="text" name="exp" />
      </label>
      <label>
        CVV
      <input type="text" name="cvv" />
      </label>
      <label>
        Billing ZIP Code
      <input type="text" name="billing-zip" />
      </label>
    </form>
  )
}

const Confirmation = () => {
  return (
    // Summarize Info in F1, F2, F3
    // Show all data from current user?
    <div>
      <button>Confirm Purchase</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
// export default App;
// export default App;