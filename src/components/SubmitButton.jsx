// Code SubmitButton Component Here

function SubmitButton() {
    function handleMouseEnter() {
        console.log("Mouse Entering");
    }
    function handleMouseLeave() {
        console.log("Mouse Exiting");
        
    }
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
