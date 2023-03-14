import { hideMail, formatDate } from "../utilities/functions";
import ListCard from "./ListCard";

const ListItem = (props) => {
  return (
    <div className="px-3">
      <div className="border d-flex justify-content-start p-2">
        <div className="mt-1">
          <img
            className="rounded-circle"
            src={props.user.picture.thumbnail}
            alt="slika"
          />
        </div>
        <div className="ps-3">
          <p className="m-0">name: {props.user.name.first}</p>
          <p className="m-0">email: {hideMail(props.user.email)}</p>
          <p className="m-0">
            date of birth: {formatDate(props.user.dob.date)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
