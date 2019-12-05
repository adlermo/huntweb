import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Products from './pages/products'

const Routes = () => (
    /* Interpreta as rotas como por meio de um browser -- BrowserRouter */
    <BrowserRouter>
        {/* Faz com que uma unica rota seja chamada -- Switch */}
        <Switch>
            {/* define os componentes a exibir em cada rota -- Route */}
            <Route exact path='/' component={Main} />
            <Route path='/products/:id' component={Products} />
        </Switch>
    </BrowserRouter>
)

export default Routes