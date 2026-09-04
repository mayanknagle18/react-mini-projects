import React, { useState } from "react";

const PalindromeChecker = () => {
  const [value, setValue] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(null);
  const palindromeCheck = (e) => {
    e.preventDefault();
    const originalValue = value.trim().toLowerCase();
    const reverseValue = originalValue.split("").reverse().join("");
    if (originalValue === reverseValue) {
      setIsPalindrome(true);
    } else {
      setIsPalindrome(false);
    }
  };
  return (
    <div className="bw_wrap_sec">
      <h1>Palindrome Checker</h1>
      <div className="bw_container">
        <form
          action=""
          className="bw_palindrome_wrap"
          onSubmit={palindromeCheck}
        >
          <h3>{isPalindrome ? "Palindrome" : "Not a Palindrome"}</h3>
          <input
            type="text"
            className="bw_input"
            placeholder="Enter a string"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="bw_btn_wrap">
            <button type="submit" className="bw_btn bw_primary_btn">
              Check
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PalindromeChecker;
