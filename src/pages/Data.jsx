/* eslint-disable no-unused-vars */
import Card from "../components/Card";
import useFetch from "../hooks/useFetch"

export default function Data() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  
console.log(data)

  if (loading) return <span className="loading loading-spinner text-error"></span>;
  
  if(error) return <h2>something went wrong </h2>

  return (
    <div>
      {
    data.map(item => <Card data={item} key={item.id} />)
      }
    </div>
  )
}
