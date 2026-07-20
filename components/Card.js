import React from 'react'

const Card = ({ children, className = '' }) => (
  <div className={`bg-white/80 border border-indigo-200 p-3 mb-4 rounded-lg card ${className}`}>
    <style jsx>{`
      .card :global(div:first-child > :first-child) {
        margin-top: 0;
      }
      .card :global(div:last-child > :last-child) {
        margin-bottom: 0;
      }
    `}</style>
    {children}
  </div>
)

export default Card
