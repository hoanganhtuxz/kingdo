export default function Alert({ title, status }) {
  return (
    <div>
      <p className={`box-alert ${status ? "success" : "faild"}`}>{title}</p>
    </div>
  );
}
