import './ToggleSwitch.css'

function ToggleSwitch(
  {
    //todo
    // не ясное поведение initialState. Пока логгируется здесь, все ок
    // initialState,
    onClick
  })
{
  // console.log(initialState)
  return (
    <label className={'switch'}>
      <input
        // checked={ initialState }
        type={'checkbox'}
        onChange={ onClick }
      />
        <span className={'slider'}/>
    </label>
  )
}

export default ToggleSwitch