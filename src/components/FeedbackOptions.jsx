import './FeedbackOptions.css';
const FeedbackOptions = ({ options, onHandleClick }) => (
  <>
    {options.map((btn, idx) => (
      <button
        key={idx}
        type="button"
        onClick={() => {
          onHandleClick(btn);
        }}
        className="btns"
      >
        {btn}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
