import HeaderLoggedIn from "../components/HeaderLoggedIn";
import HeaderNotLoggedIn from "../components/HeaderNotLoggedIn";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getUserName, toggleLoggedIn } from "../redux/user";
import { toast } from "react-toastify";

function Home() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.isLoggedIn && localStorage.getItem("jwt")) {
      axios
        .get("http://localhost:8000/api/users/me", {
          headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
        })
        .then((response) => {
          dispatch(toggleLoggedIn());
          dispatch(getUserName(response.data.name));
        })
        .catch((error) => toast.error(error));
    }
  }, [user.isLoggedIn, dispatch]);

  if (user.isLoggedIn) {
    return (
      <>
        <HeaderLoggedIn />
      </>
    );
  } else {
    return <HeaderNotLoggedIn />;
  }
}

export default Home;
