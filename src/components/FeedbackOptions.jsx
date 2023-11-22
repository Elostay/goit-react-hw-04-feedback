const FeedbackOptions = ({ options, onHandleClick }) => (
  <>
    {options.map((btn, idx) => (
      <button
        key={idx}
        type="button"
        onClick={() => {
          onHandleClick(btn);
        }}
      >
        {btn.charAt(0).toUpperCase() + btn.slice(1)}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
