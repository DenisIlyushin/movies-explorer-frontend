import './ToggleSwitch.css'

function ToggleSwitch(
  {
    initialState,
    onClick
  })
{
  return (
    <label className={'switch'}>
      <input
        checked={ initialState }
        type={'checkbox'}
        onChange={ () => onClick(!initialState) }
      />
        <span className={'slider'}/>
    </label>
  )
}

export default ToggleSwitch