import { hideMail, formatDate } from "../utilities/functions";

 const ListCard = (props) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="border rounded-2">
        <div className="card p-0 border-0">
          <img
            src={props.user.picture.large}
            className="card-img-top img-fluid"
            alt="..."
          />
          <div class="card-img-overlay d-flex align-items-end">
            <h5 class="card-title text-light">{props.user.name.first}</h5>
          </div>
        </div>
        <div className="card card-body border-0">
          <p className="card-text m-0">email: {hideMail(props.user.email)}</p>
          <p className="card-text m-0">
            date of birth: {formatDate(props.user.dob.date)}
          </p>
        </div>
      </div>
    </div>
  );
};


export default ListCard;