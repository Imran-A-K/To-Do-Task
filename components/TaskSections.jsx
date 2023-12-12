import Card from "./Card";

function TaskSections(props) {
  const {
    numberOfCards = 3,
    title,
    color = "primary",
    setShow,
    totalFiles,
  } = props;
  return (
    <section className="fullwidth-container d-flex flex-column">
      <div className="d-flex px-3  justify-content-between align-items-center">
        <div className="d-flex gap-2 my-3 align-items-center">
          <span className={`rounded-start-pill bg-${color} border p-2`} />
          <p className="mb-0">{title}</p>
        </div>
        <div className="px-2 py-0 rounded-1 bg-secondary-subtle border border-0">
          0
        </div>
      </div>
      <div className="d-flex flex-column px-3 gap-3 customScroll">
        {[...Array(numberOfCards).keys()].map((item) => (
          <Card setShow={setShow} key={item} totalFiles={totalFiles} />
        ))}
      </div>
    </section>
  );
}

export default TaskSections;
