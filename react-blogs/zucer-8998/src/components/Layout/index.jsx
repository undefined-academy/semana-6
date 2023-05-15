import PropTypes from 'prop-types'

import './Layout.css'

const Layout = ({ children, className }) => (
  <article className={`layout ${className}`}>{children}</article>
)

Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Layout.defaultProps = {
  className: '',
}

export default Layout
