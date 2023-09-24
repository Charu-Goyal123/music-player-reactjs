import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Control = (props) => {
  return (
    <div className='control'>
        <button className='control_SkipBtn' onClick={() => props.skipSong()}>
          <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon></button>
        <button className='control_PlayButton' onClick={()=> props.setIsPlaying(!props.isPlaying)}>
          <FontAwesomeIcon icon={props.isPlaying? faPause : faPlay}></FontAwesomeIcon></button>
        <button className='control_SkipBtn' onClick={()=> props.skipSong()}><FontAwesomeIcon icon={faForward}></FontAwesomeIcon></button>
    </div>
  )
}

export default Control;