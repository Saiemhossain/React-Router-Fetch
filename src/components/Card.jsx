/* eslint-disable react/prop-types */
export default function Card({ data }) {
  
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src=""
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> { data.title}</h2>
          <p>{data.body}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
}
