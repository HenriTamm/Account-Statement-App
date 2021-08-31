import { Link } from "react-router-dom";

export const InsertTransactions = () => {

    function handleSubmit(event: Event) {
        console.log(event)
    }

  return (
    <div>
      <Link to="/">Back</Link>
      <br></br>
      <br></br>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );
};
