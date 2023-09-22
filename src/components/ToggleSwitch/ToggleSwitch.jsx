import './ToggleSwitch.css'

function ToggleSwitch(
  {
    initialState,
    onChange
  })
{
  return (
    <label className={'switch'}>
      <input
        checked={ initialState }
        type={'checkbox'}
        onChange={ () => onChange(!initialState) }
      />
        <span className={'slider'}/>
    </label>
  )
}

export default ToggleSwitch