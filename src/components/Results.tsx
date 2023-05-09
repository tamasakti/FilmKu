import Card from "./Card";

const Results = ({ results }: any) => {
  return (
    <>
      <div className="grid max-w-6xl py-4 mx-auto gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {results.map((data: dataResultProps) => {
          return <Card key={data.id} result={data} />;
        })}
      </div>
    </>
  );
};

export default Results;
