import React from 'react'


const DateInput = () => {



    return (
        <div>
            <form>
            <label for="datemax">Enter a date before 1980-01-01:</label>
            <input type="date" id="datemax" name="datemax" max="1979-12-31"/><br/><br/>
            <label for="datemin">Enter a date after 2000-01-01:</label>
            <input type="date" id="datemin" name="datemin" min="2000-01-02"/>
            </form>
        </div>
    )
}

export default DateInput