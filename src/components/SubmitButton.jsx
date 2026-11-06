// Code SubmitButton Component Here

function SubmitButton() {
  return (
    <>
      <button 
        type="submit"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Submit Password
    </button>
    </>
  );
}

export default SubmitButton;
