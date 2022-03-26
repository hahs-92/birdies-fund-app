//styles
import style from '../styles/components/Form.module.css'

export const Form = ({numberHoles,handleNumber, handleSelect, cb}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        cb()
      }

    return (
        <form className={style.Form } onSubmit={handleSubmit}>
            <label htmlFor="number">Generate</label>
            <input
                className={ style.Form_Input }
                type="number"
                id='number'
                value={ numberHoles}
                onChange={handleNumber}
            />

            <label htmlFor="holes">Birdies hole(s) for a</label>
            <select
                className={ style.Form_Input }
                name="holes"
                id="holes"
                onChange={handleSelect}
            >
                <option value="1-9">1-9</option>
                <option value="10-18">10-18</option>
                <option value="1-18">1-18</option>
            </select>

            <span>courses.</span>

           <section className={ style.Form_ButtonWrapper }>
                <input type="submit" value="Get Birdie Holes" />
           </section>
        </form>
    )
}
