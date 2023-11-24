import React from 'react'
import { AdminUserData } from '../../../Components/AdminPanal/AdminUsers/AdminUserData';
import { LiaTrashAlt } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, toggleUserStatus } from '../../../Redux/Reducers/AdminSlice';
import AdminSectionsSearchBar from '../../../Components/AdminPanal/AdminGlobal/AdminSectionsSearchBar';
import { infoMsg } from '../../../Components/Toast/Toast';

const AdminPanelUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.AdminSlice.users);
  const selectedContent = useSelector((state) => state.AdminSlice.selectedContent);
  const titleSideBar = useSelector((state) => state.AdminSlice.titleSideBar)


  const filteredUser = users.filter((user) => {
    return selectedContent ? user.role === selectedContent : true;
  });




  const handelDeleteUser = (index) => {
    dispatch(deleteUser(index));
    infoMsg(`Item ${index} Is Deleted`)

  };


  const handleToggleStatus = (index) => {
    dispatch(toggleUserStatus({ index }));
  };

  return (
    <>
      {selectedContent ?
        <AdminSectionsSearchBar section={`${titleSideBar} - ${selectedContent}`} />
        :
        <AdminSectionsSearchBar section={titleSideBar} />

      }

      <div className="d-none d-lg-flex flex-column gap-4 mt-5 text-capitalize">
        <div className="row align-items-center fw-bold px-4">
          <div className="col-6 col-lg-4">Name</div>
          <div className="col-6 col-lg-3">Status</div>
          <div className="col-6 col-lg-2">User ID</div>
          <div className="col-6 col-lg-2">Role</div>
          <div className="col-6 col-lg-1"></div>
        </div>
        {filteredUser &&
          filteredUser.map((user, i) => (
            <div key={i} className="row bg-black bg-opacity-25 align-items-center rounded p-4">
              <div className="col-6 col-lg-4">
                <h6 className="mb-0">{user?.name}</h6>
              </div>
              <div className="col-6 col-lg-3 ">
                <button
                  className={`badge rounded-pill fs-6 py-2 px-4 ${user.status === 'Active' ? 'bg_primary border_primary' : 'bg_gray border_gray'}`}
                  onClick={() => handleToggleStatus(i)}
                >
                  {user.status}
                </button>
              </div>
              <div className="col-6 col-lg-2">{user?.userId}</div>
              <div className="col-6 col-lg-2">{user?.role}</div>
              <div className="col-6 col-lg-1 d-flex align-items-center gap-2 text_primary">
                <Link className="text_primary clickable active-scale" to={`${user?._id}`}>
                  <i className="fa-regular fa-pen-to-square fa-xl" />
                </Link>

                <div className="clickable active-scale" onClick={() => handelDeleteUser(i)}>
                  {/* <i className="fa-solid fa-trash-can fa-xl" /> */}
                  <LiaTrashAlt size={30} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>

  );
}

export default AdminPanelUsers