import Image from "next/image";
import { FaBuffer } from "react-icons/fa";
import { HiClipboard } from "react-icons/hi";
import { FaComments } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { formatDate } from "@/common/helpers/utilkit";
function Card({ setShow, totalFiles }) {
  return (
    <section className="card" style={{ position: "relative" }}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex gap-2 align-items-center">
            <Image
              alt="avatar image"
              src="https://images.unsplash.com/photo-1543764477-646365e11da3?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-circle"
              height={100}
              width={100}
              style={{ width: "27px", height: "27px" }}
            />
            <p
              className="mb-0 font-weight-semi-bold"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              Client
            </p>
          </div>

          <div className="d-flex gap-2 align-items-center">
            <Image
              alt="avatar image"
              src="https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-circle"
              height={100}
              width={100}
              style={{ width: "27px", height: "27px" }}
            />
            <p
              className="mb-0 font-weight-semi-bold"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              Sadik
            </p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className=" d-flex align-items-center gap-2">
            <FaBuffer />
            <p
              className="mb-0"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                // maxWidth: "calc(100% - 30px)",
                height: "20px",
                width: "180px",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              nesciunt cumque, labore, laborum magnam neque quaerat delectus
              voluptates quibusdam perspiciatis voluptatibus recusandae harum
              unde iste non ullam, quam esse sunt dolorum voluptate ex. Quae, in
              sapiente possimus velit deserunt eum et dolor animi delectus
              nesciunt commodi odio dignissimos, ipsam nobis.
            </p>
          </div>
          <div className="d-flex px-2 align-items-center bg-secondary-subtle gap-1 rounded-1">
            <HiClipboard />
            <p className="mb-0">1/2</p>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <Image
            alt="avatar image"
            src="https://images.unsplash.com/photo-1557977275-d261356f567f?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-circle"
            height={100}
            width={100}
            style={{ width: "27px", height: "27px" }}
          />
          <Image
            alt="avatar image"
            src="https://images.unsplash.com/photo-1626978407649-de62156f1548?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-circle"
            height={100}
            width={100}
            style={{ width: "27px", height: "27px" }}
          />

          <div
            className="bg-secondary-subtle rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "27px", height: "27px" }}
          >
            <p className="mb-0" style={{ fontSize: "10px", fontWeight: 600 }}>
              12+
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <FaComments className="" />
            <p className="mb-0">15</p>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <FaPaperclip
              onClick={() => setShow(true)}
              className=""
              style={{ cursor: "pointer" }}
            />
            <p className="mb-0">{totalFiles}</p>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <FaCalendarAlt />
            <p className="mb-0">{formatDate(new Date())}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
