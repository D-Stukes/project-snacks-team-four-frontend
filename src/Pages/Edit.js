import EditSnackForm from "../Components/EditSnackForm";

function Edit() {
  return (
    <div className="edit">
      <div className="editHdgs">
      <span className="editSnackHdg">Edit This Snack</span> <br/><br/>

      <EditSnackForm />
      </div>
    </div>
  );
}

export default Edit;
