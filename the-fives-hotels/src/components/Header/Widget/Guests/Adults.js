import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Adults({ adults, setAdults }) {

  const handleDecreaseAdults = () => {
    if (adults > 1) {
      setAdults((prevAdults) => prevAdults - 1);
    } else {
      toast.info("The minimum number of adults for a booking is one.");
    }
  };

  return (
    <article className="modal-guest__adults">
       <ToastContainer position="bottom-center" autoClose={5000} />
      <aside className="modal-guest__adults-counter">
        <label htmlFor="adultsInput">Adults</label>

        <button
          type="button"
          className="modal-guest__button-minus"
          onClick={handleDecreaseAdults}
        >
          -
        </button>
        <input id="adultsInput" type="text" value={adults} readOnly />

        <button
          type="button"
          className="modal-guest__button-plus"
          onClick={() =>
            setAdults((prevAdults) =>
              prevAdults < 10 ? prevAdults + 1 : prevAdults
            )
          }
        >
          +
        </button>
      </aside>
    </article>
  );
}
