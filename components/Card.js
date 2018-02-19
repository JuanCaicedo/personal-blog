const Card = ({ children, header }) => (
  <div className="bg-yellow pa3 mb3 br2 card">
    <style jsx>{`
      .card :global(div:first-child > :first-child) {
        margin-top: 0;
      }
      .card :global(div:last-child > :last-child) {
        margin-bottom: 0;
      }
      img {
        width: 250px;
      }
    `}</style>
    {children}
  </div>
)

export default Card
