import React from 'react'
import '../styles/App.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import ContentGrid from './ContentGrid'
import Footer from './Footer'
import _ from 'lodash'

import { HashRouter, Routes, Route } from 'react-router-dom'
import Invoices from './Invoices'
import Expense from './Expense'

const LazyInvoice = React.lazy(() => import('./Invoices'))
const ExpenseLazy = React.lazy(() => import('./Expense'))

function App() {
  const cars = [
    {
      make: 'audi',
      model: 'r8',
      year: '2012',
    },
    {
      make: 'audi',
      model: 'rs5',
      year: '2013',
    },
    {
      make: 'ford',
      model: 'mustang',
      year: '2012',
    },
    {
      make: 'ford',
      model: 'fusion',
      year: '2015',
    },
    {
      make: 'kia',
      model: 'optima',
      year: '2012',
    },
  ]

  const result = _.mapValues(
    _.groupBy(cars, (car) => car.make),
    (clist) => _.max(clist.map((val) => val.year))
  )

  console.log(result)
  return (
    <>
      {process.env.REACT_APP_PLACE}
      <Header />
      <React.Suspense fallback="Loading....">
        <HashRouter>
          <Routes>
            <Route path="/" element={<ContentGrid />} />
            <Route path="expenses" element={<ExpenseLazy />} />
            <Route path="invoices" element={<LazyInvoice />} />
          </Routes>
        </HashRouter>
      </React.Suspense>
      <Footer />
    </>
  )
}

export default App
function max(arg0: any) {
  throw new Error('Function not implemented.')
}
