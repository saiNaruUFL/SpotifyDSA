import React, {useState} from 'react';

function Form({onGenerate}) {
    const [songName,setSongName] = useState('');

    async function handleSubmit(event) {
      event.preventDefault();
      onGenerate(songName);
    }

    function handleInputChange(event) {
      setSongName(event.target.value);
    }

    return (
        
      <form onSubmit={handleSubmit}>
        <label htmlFor="songName" style={{color:'white'}}>Song Name:</label>
        <input type="text" id="songName" value={songName} onChange={handleInputChange} />
        <button type="submit">Generate</button>
      </form>
    );
  
}

export default Form;