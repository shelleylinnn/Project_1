import React, { useState, useCallback } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Counter = ({ curNum, childToParent }) => {
  const [counter, setCounter] = useState(curNum)

  var doPlus = useCallback(() => {
    if (counter < 10) {
      setCounter(prev => {
        const newCounter = prev + 1;
        childToParent(newCounter);
        return newCounter;
      })
    } else {
      setCounter(10)
      childToParent(counter)
    }
  }, [counter, childToParent])

  var doReduce = useCallback(() => {
    if (counter > 1) {
      setCounter(prev => {
        const newCounter = prev - 1;
        childToParent(newCounter);
        return newCounter;
      })
    } else {
      setCounter(1)
      childToParent(counter)
    }
  }, [counter, childToParent])
  // var doPlus = () => {
  //     var newcounuter = 0
  //     if (counter < 10){
  //         newcounuter = counter +1
  //         setCounter(newcounuter)
  //         childToParent(newcounuter)            
  //     }else{
  //         // 給定庫存最大數?
  //         newcounuter = 10
  //         setCounter(newcounuter)
  //         childToParent(newcounuter)          
  //     }

  // }

  // var doReduce = () => {
  //     var newcounuter = 0
  //     if(counter > 1) {
  //         newcounuter = counter -1
  //         setCounter(newcounuter)
  //         childToParent(newcounuter)          
  //     }else{
  //         newcounuter = 1
  //         setCounter(newcounuter)
  //         childToParent(newcounuter)          
  //     }

  // }

  return (
    <React.Fragment>
        <div className="row col-12 mb-3">
          <div className="d-flex justiy-contnet-center">
            <button className="btn btn-outline-secondary" type="button" onClick={doReduce}><FontAwesomeIcon icon="fa-solid fa-minus" /></button>
            <input type="text" className="form-control text-center" value={counter} id='quantity' readOnly />
            <button className="btn btn-outline-secondary" type="button" onClick={doPlus}><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
          </div>
        </div>
    </React.Fragment>
  )


}

export default Counter