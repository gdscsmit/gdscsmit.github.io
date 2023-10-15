// LOADER COMPONENT

export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-item">
        {/* render loader animated gif  */}
        <img src="./loader-unscreen.gif" alt="loader" />
      </div>
    </div>
  );
};
