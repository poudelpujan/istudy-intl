import { branchData } from "./Data/Data";

const Bhaktapur = () => {
  return (
    <div className="container">
      <div className="branch_card">
        <div className="branch_content">
          <div className="title-holder">
            <h1>
              <strong>
                {" "}
                Expand Horizons: Opening Our New Branch! Discover New
                Opportunities and Connect with Us in a Fresh Location
              </strong>
              .
            </h1>
            <h5>
              We’re thrilled to announce the grand opening of our newest branch!
              This expansion represents more than just a new address; it's a
              chance to broaden our reach, serve you better, and create new
              opportunities for growth and collaboration. Join us as we embark
              on this exciting new chapter and continue to deliver exceptional
              service with a fresh perspective. Come visit us and experience
              firsthand the innovation and dedication that define our brand.
            </h5>
          </div>
        </div>
        <div className="wrapper">
          {branchData.map((data, index) => (
            <div className="card" key={data.id}>
              <div className="poster">
                <img src={data.image} id={data.id} alt={data.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bhaktapur;
