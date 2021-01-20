
export default function SectionTitle() {
    return (
      <>
        <header className="title">
          <h2>
            {` 
            Glad you're here! Here's your schedule for ${new Date().toLocaleDateString()}.`}
          </h2>
        </header>
      </>
    );
  }