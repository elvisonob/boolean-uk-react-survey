import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [rate, setRate] = useState('')
  const [time, setTime]=useState('')
  const [words, setWords]=useState('')
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')

  console.log({rate, time, words, name})

  
const handleRateRadioInput=event=>{
  const inputValue=event.target.value
  setRate(inputValue)
}

const handleTimeRadioInput=event=>{
  const inputValue=event.target.value
  setTime(inputValue)
}

const handleWordsInput=event=>{
  const inputValue=event.target.value
  setWords(inputValue)
}

const handleNameInput=event=>{
  const inputValue=event.target.value
  setName(inputValue)
  
}

const handleEmailInput=event=>{
  const inputValue=event.target.value
  setEmail(inputValue)
}

const handleSubmit=event=> {
  event.preventDefault()
  const userInformation={rate,time,words,name,email}
  console.log('form Submitted', {userInformation})

  // setName('')
  // setRate('')
  // setTime('')
  // setWords('')
  // setEmail('')
}



  return (

    <main className="main" onSubmit={handleSubmit} >
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">{<form class="form">
  <h2>Tell us what you think about your rubber duck!</h2>
  <div class="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
    <ul>
  <li>
    <input 
    onChange={handleRateRadioInput}
    checked={rate==='1'}
    id="color-one" type="radio" name="color" value="1" /><label
      for="color-one"
      >1</label
    >
  </li>
  <li>
    <input 
     onChange={handleRateRadioInput}
     checked={rate==='2'}
    id="color-two" type="radio" name="color" value="2" /><label
      for="color-two"
      >2</label
    >
  </li>
  <li>
    <input 
    onChange={handleRateRadioInput}
    checked={rate==='3'}
    id="color-three" type="radio" name="color" value="3" /><label
      for="color-three"
      >3</label
    >
  </li>
  <li>
    <input 
    onChange={handleRateRadioInput}
    checked={rate==='4'}
    id="color-four" type="radio" name="color" value="4" /><label
      for="color-four"
      >4</label
    >
  </li>
</ul>
  </div>
  <div class="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    <ul>
  <li>
    <label
      ><input
      onChange={handleTimeRadioInput}
      checked={time==='swimming'}
        name="spend-time"
        type="checkbox"
        value="swimming"
      />Swimming</label
    >
  </li>
  <li>
    <label
      ><input 
      onChange={handleTimeRadioInput}
      checked={time==='bathing'}
      name="spend-time" type="checkbox" value="bathing" />Bathing</label
    >
  </li>
  <li>
    <label
      ><input
      onChange={handleTimeRadioInput}
      checked={time==='chatting'}
        name="spend-time"
        type="checkbox"
        value="chatting"
      />Chatting</label
    >
  </li>
  <li>
    <label
      ><input 
      onChange={handleTimeRadioInput}
      checked={time==='noTime'}
      name="spend-time" type="checkbox" value="noTime" />I don't like to
      spend time with it</label
    >
  </li>
</ul>
  </div>
  <label
    >What else have you got to say about your rubber duck?<textarea
      onChange={handleWordsInput}
      value={words}
      name="review"
      cols="30"
      rows="10"
    ></textarea></label
  ><label
    >Put your name here (if you feel like it):<input
    onChange={handleNameInput}
      type="text"
      name="username"
      value={name} /></label
  ><label
    >Leave us your email pretty please??<input
    onChange={handleEmailInput}
      type="email"
      name="email"
      value={email} /></label>
      <input class="form__submit" type="submit" value="Submit Survey!" />
</form>
}</section>
    </main>
  );
}

export default Main;
