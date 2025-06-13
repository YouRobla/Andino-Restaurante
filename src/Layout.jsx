import Header from "./componets/header"

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  )
}

export default Layout
