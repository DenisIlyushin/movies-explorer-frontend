import './ToggleSwitch.css'

function ToggleSwitch({ onClick }) {
  return (
    <label className={'switch'}>
      <input
        type={'checkbox'}
        onClick={ onClick }
      />
        <span className={'slider'}/>
    </label>
  )
}

export default ToggleSwitch