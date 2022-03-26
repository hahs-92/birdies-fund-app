export const Result = ({ birdie }) => {
  return (
    <section>
        <h2>
            {`You requested ${birdie.number} birdie hole for a ${birdie.limit} hole course. Here it is:`}
        </h2>
        <p>{ birdie.holes.join(', ')}</p>
        <p>{ birdie.date }</p>
    </section>
  )
}
