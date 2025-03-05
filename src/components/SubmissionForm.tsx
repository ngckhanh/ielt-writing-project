export default function SubmissionForm() {
    return (
      <form>
        <label htmlFor="file">Upload your writing task:</label>
        <input type="file" id="file" name="file" />
        <button type="submit">Submit</button>
      </form>
    );
  }
  