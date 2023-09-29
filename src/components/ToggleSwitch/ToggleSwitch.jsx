import './ToggleSwitch.css'

function ToggleSwitch(
  {
    initialState,
    onChange
  })
{
  return (
    <label className={'toggle-switch'}>
      <input
        className={'toggle-switch__input'}
        checked={ initialState }
        type={'checkbox'}
        onChange={ () => onChange(!initialState) }
      />
        <span className={'toggle-switch__slider'}/>
    </label>
  )
}

export default ToggleSwitch