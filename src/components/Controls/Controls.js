import { useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../../actions'
import './Controls.css'

export default function Control() {
  const dispatch = useDispatch()
  // const isRunning = useSelector(state => state.isRunning)

  return (
    <div className="controls">
      <button className="control-button" onClick={
        (e) => { dispatch(moveLeft()) }}>Left</button>
      <button className="control-button" onClick={
        (e) => { dispatch(moveRight()) }}>Right</button>
      <button className="control-button" onClick={
        (e) => { dispatch(rotate()) }}>Rotate</button>
      <button className="control-button" onClick={
        (e) => {dispatch(moveDown()) }}>Down</button>
    </div>
  )
}
