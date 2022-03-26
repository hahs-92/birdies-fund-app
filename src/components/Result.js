//styles
import style from '../styles/components/Result.module.css'

export const Result = ({ birdie, isError }) => {
  console.log(birdie)
  return (
    <section className={ style.Result }>
        {
          isError
            ? <h2>Something is Wrong, Try again later!</h2>
            :
            <>
              <h2>
                You requested
                <span>{birdie.number}</span> birdie hole for a <span>{birdie.limit}</span>
                hole course. Here it is:
              </h2>
              <p>{ birdie.holes.join(', ')}</p>
              <p>{ birdie.date }</p>
            </>
        }

    </section>
  )
}
