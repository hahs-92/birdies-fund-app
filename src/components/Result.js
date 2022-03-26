//styles
import style from '../styles/components/Result.module.css'

export const Result = ({ birdie }) => {
  console.log(birdie)
  return (
    <section className={ style.Result }>

        <h2>
          You requested
            <span>{birdie.number}</span> birdie hole for a <span>{birdie.limit}</span>
          hole course. Here it is:
        </h2>
        <p>{ birdie.holes.join(', ')}</p>
        <p>{ birdie.date }</p>
    </section>
  )
}
