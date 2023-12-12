"use client";
import Image from "next/image";
import styles from "./page.module.css";
import TaskSections from "@/components/TaskSections";
import CustomModal from "@/components/Modal";
import { useState } from "react";
import FileUploader from "@/components/FileUploader";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@/components/Skeleton";
import axios from "axios";

export default function Home() {
  const [show, setShow] = useState(false);

  const {
    isLoading,
    data: totalFiles = 0,
    refetch,
  } = useQuery({
    queryKey: [`total-files`],
    queryFn: async () => {
      const response = await axios.get(
        // `http://localhost:4000/totalFiles`
        "https://seo-page-1-task-file-upload-server.vercel.app/totalFiles"
      );

      return response.data.totalFiles;
    },
  });

  return (
    <main className="ps-5 pt-4">
      <div>
        <CustomModal
          refetch={refetch}
          show={show}
          setShow={setShow}
          title="Upload File"
        />
      </div>

      {isLoading ? (
        <div className="row row-cols-6">
          {[...Array(6).keys()].map((item) => (
            <div className="col" key={item}>
              <Skeleton
                width="100%"
                height="calc(100vh - 40px)"
                borderRadius="8px"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="row row-cols-6">
          <div className="col">
            <TaskSections
              setShow={setShow}
              totalFiles={totalFiles}
              numberOfCards={6}
              title="Incomplete"
              color="danger"
            />
          </div>
          <div className="col">
            <TaskSections
              totalFiles={totalFiles}
              setShow={setShow}
              numberOfCards={6}
              title="To Do"
            />
          </div>
          <div className="col">
            <TaskSections
              setShow={setShow}
              numberOfCards={6}
              title="Doing"
              color="warning"
              totalFiles={totalFiles}
            />
          </div>
          <div className="col">
            <TaskSections
              setShow={setShow}
              numberOfCards={6}
              title="Under Review"
              totalFiles={totalFiles}
            />
          </div>
          <div className="col">
            <TaskSections
              setShow={setShow}
              numberOfCards={6}
              title="Completed"
              color="success"
              totalFiles={totalFiles}
            />
          </div>
          <div className="col">
            <TaskSections
              setShow={setShow}
              numberOfCards={6}
              title="Overdue"
              color="danger"
              totalFiles={totalFiles}
            />
          </div>
        </div>
      )}
    </main>
  );
}
