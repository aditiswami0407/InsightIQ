import "../styles/PageHeader.css";

function PageHeader({
  title,
  subtitle,
  buttonText,
  buttonIcon,
  onButtonClick,
}) {
  return (
    <div className="page-header">

      <div className="page-header-left">

        <h1>{title}</h1>

        <p>{subtitle}</p>

      </div>

      {buttonText && (
        <button
          className="page-btn"
          onClick={onButtonClick}
        >
          {buttonIcon}
          {buttonText}
        </button>
      )}

    </div>
  );
}

export default PageHeader;