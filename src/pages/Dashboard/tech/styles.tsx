function Tech({ id, tech, level }) {
  const techId: string = id;
  return (
    <li>
      <p>{tech}</p>
      <p>{level}</p>
    </li>
  );
}
export default Tech;
