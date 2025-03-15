function Paragraph({ children, classToAdd = "" }) {
  return (
    <p className={`text-xl font-bold opacity-60 ${classToAdd}`}>{children}</p>
  );
}

export default Paragraph;
