import React, { useState } from 'react';

const EmojiPicker = () => {
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const emojis = ['😀', '😂', '😍', '😎', '🥳', '🔥'];
  const copyEmoji = () => {
    if (selectedEmoji) {
      navigator.clipboard.writeText(selectedEmoji);
    }
  };
  return (
    <div className="bw_wrap_sec">
      <h1>Emoji Picker</h1>
      <div className="bw_container">
        <div className="bw_emoji_picker">
          <div className="bw_selected_emoji">
            <span>{selectedEmoji || 'Select Emoji'}</span>
            <button
              type="button"
              onClick={copyEmoji}
              disabled={!selectedEmoji}
            >
              Copy
            </button>
          </div>
          <div className="bw_emoji_wrap">
            {emojis.map((emoji) => (
              <button
                className="bw_emoji"
                type="button"
                key={emoji}
                onClick={() => setSelectedEmoji(emoji)}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmojiPicker;