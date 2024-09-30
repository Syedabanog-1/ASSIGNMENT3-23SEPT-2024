import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const message = "Hello from the Parent Component!";

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;