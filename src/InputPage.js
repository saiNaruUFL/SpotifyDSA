import React from 'react'
import Form from './Form'
export const InputPage = ({onGenerate,handleClickBFSFind}) => {

  return (
    <div style={{height: '800px',flex: '1',backgroundColor:'#1f3864',borderRadius: '10px'}}>
      <h1 style={{marginLeft: '50px', color: 'white'}}>Input Song</h1>
      <Form onGenerate={onGenerate}/>
      <div style={{color: 'whitesmoke',fontSize: '28px'}}>Choose Algorithim</div>
      <button>BFS</button>
      <button>Heap Sort</button>
      <div style={{color: 'whitesmoke',fontSize: '28px'}}>Traversals</div>
      <button onClick={handleClickBFSFind}>BFS Find</button>
      <button>DFS Find</button>
      <button>Extract Max</button>
    </div>
  )
}
