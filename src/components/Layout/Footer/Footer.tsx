import React from 'react'

type FooterProps = {
    data: any;
}

  const Footer: React.FC<FooterProps> = ({ data }) => {
// const Footer = (props) => {
    // const data = props.data.footer
  return (
    <footer>
        <p>{data}</p>
    </footer>
  )
}

export default Footer
