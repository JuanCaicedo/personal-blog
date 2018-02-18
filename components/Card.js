const Card = ({ children, header }) => (
  <div className="bg-yellow pa3 mb3 br2">
    <style jsx>{`
      :global(:first-child) {
        margin-top: 0;
      }
      :global(:last-child) {
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
