import "./newUser.css";
import { Visibility } from "@material-ui/icons";

export default function NewUser() {
  const users = [
    {
      name: "بردیا شمس",
      job: "React Developer",
    },
    {
      name: "پویا رحمتی",
      job: "Flutter Developer",
    },
    {
      name: "بردیا شمس",
      job: "React Developer",
    },
    {
      name: "پویا رحمتی",
      job: "Flutter Developer",
    },
    {
      name: "پریا باب الحوایجی",
      job: "Figma Developer",
    },
  ];

  return (
    <div className="newUser">
      <span className="newUserTitle">کاربر جدید</span>
      <ul className="newUserList">
        {users.map((user) => {
          return (
            <li className="newUserListItem">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="newUserImg"
              />
              <div className="newUserUser">
                <span className="newUserUsername">{user.name}</span>
                <span className="newUserUserTitle">{user.job}</span>
              </div>
              <button className="newUserButton">
                نمایش
                <Visibility className="newUserIcon" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
