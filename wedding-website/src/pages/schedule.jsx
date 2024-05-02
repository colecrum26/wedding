import Header from "../components/header";

export default function Schedule() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <h1>HELLO</h1>
        {/* add search function from invite DB */}
        <form action="" className="form-field">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="" />
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="phone" id="" />
            <label htmlFor="attendance">Attending?</label>
            <select name="attendance" id="">
                <option value=""></option>
                <option value="">Will Attend</option>
                <option value="">Will Not Attend</option>
            </select>
            <button type="submit" id="submit-info">Submit</button>
        </form>
      </div>
    </div>
  );
}
