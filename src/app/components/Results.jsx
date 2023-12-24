export default function Results({ results }) {
    return (
      <div>
        {results.map((result) => (
          <div key={result.id}>
            <p>{result.original_name || result.original_title}</p>
          </div>
        ))}
      </div>
    );
  }