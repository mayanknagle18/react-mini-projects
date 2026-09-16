import { useState } from 'react';

const CopyToClipboard = () => {
  const [copy, setCopy] = useState("");
  const changeHandle = (e) => {
    setCopy(e.target.value)
  }
  const copyHandle = () => {
    navigator.clipboard.writeText(copy);
  };
  return (
    <div className="bw_wrap_sec">
      <h1>Copy To Clipboard</h1>
      <div className="bw_container">
        <div className="bw_copy_to_clipboard">
          <input type="text" className="bw_input" placeholder="Enter Text" value={copy} onChange={changeHandle}/>
          <button type="button" className="bw_btn bw_primary_btn" onClick={copyHandle}>Copy</button>
        </div>
      </div>
    </div>
  )
}

export default CopyToClipboard;