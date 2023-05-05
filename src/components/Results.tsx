const Results = ({ results }: any) => {
  return (
    <>
      <div>
        {results.map((data: dataResultProps) => {
          return (
            <div key={data.id}>
              <p>{data.original_title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Results;
