import React from 'react'

export default function FooterComponent() {
  return (
    <center>
        <footer>
            <div className="footer-content">
            <p className='text-sm text-gray-400'>&copy; {(new Date().getFullYear())} Entrepreneur Minds.</p>
            </div>
        </footer>
    </center>
  )
}
