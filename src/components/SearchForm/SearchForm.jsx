import css from './SearchForm.module.css'
import { HiSearch } from "@react-icons/all-files/hi/HiSearch";

const SearchForm = ({ onSearch }) => {
    const handleSubmit = (evt) => {
      evt.preventDefault();
      const form = evt.target;
      const topic = form.elements.topic.value;

      
      if (form.elements.topic.value.trim() === "") {
        alert("Please enter search term!");
        return;
      }

     
      onSearch(topic);
      form.reset();
    };
  return (
    <form onSubmit={handleSubmit}  className={css.wrapper}>
      
      <input
        type="text"
        name="topic"
        placeholder="Search movies"
       
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm
