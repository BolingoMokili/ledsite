
import React from 'react'
import Executive from '../../component/executives/Executive'
import History from '../../component/history/History'
import MVV from '../../component/mvv/MVV'

const Who = () => {
  return (
    <div className='who' id='who' >
      <h1>who we are</h1>
      <History/>
      {/* <hr /> */}
      <MVV/>
      {/* <hr /> */}
      <Executive/>
    </div>
  )
}

export default Who