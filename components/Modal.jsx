import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FileUploader from "./FileUploader";

function CustomModal(props) {
  const { show, setShow, refetch } = props;
  return (
    <>
      {/* <Button variant="primary" onClick={() => setShow(true)}>
        Upload Your File
      </Button> */}

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        // fullscreen={true}
        size="md"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Upload Your File
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FileUploader refetch={refetch} setShow={setShow} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CustomModal;
