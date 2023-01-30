import EditSnackForm from "../Components/EditSnackForm";

function Edit() {
  return (
    <div className="edit">
      <div className="editHdgs">
      <span className="editSnackHdg">Edit this Snack</span> <br/><br/>
      <span className="editSnackCancelHdg">(or press Cancel button and return to Snack List)</span>
      <EditSnackForm />
      </div>
    </div>
  );
}

export default Edit;
