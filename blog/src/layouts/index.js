import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Libros resumidos de emprendimiento  | Resumen de las mejores ideas de las mejores mentes."
      meta={[
        { name: 'description', content: 'Aquí encontrarás los puntos clave de los mejores libros de empresas, startups, productividad. Leyendo estos resumenes sacarás tu SUPER YO interior.' },
        { name: 'keywords', content: 'resumen, empredimiento, negocios, entrepreneur, dinero, éxito, libros, resumidos' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
