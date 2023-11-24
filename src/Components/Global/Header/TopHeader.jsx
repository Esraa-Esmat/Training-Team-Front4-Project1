import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Redux/Reducers/UserSlice';

function TopHeader() {
    const dispatch = useDispatch();

    const login = useSelector((state) => state.UserSlice.login);
    const userRole = useSelector((state) => state.UserSlice.userRole);
    // console.log(userRole);

    const handleLogout = () => {
        dispatch(logout());

    };

    return (
        <div className="bg-dark bg-opacity-50">
            <div className="container d-flex justify-content-end gap-4 text-uppercase py-2 fs-p">
                {!login ? (
                    <Link to={'/auth/login'}>Login</Link>
                ) : (
                    <>
				{/* {login && userRole === 'admin' && <Route path="/admin-panel/jobs" element={<AdminPanelJobs />} />} */}

                        {userRole === 'admin' && <Link to="/adminpanel">Admin Panel</Link>}
                        {userRole === 'instructor' && (
                            <Link to="/instructor">Instructor Portal</Link>
                        )}
                        {userRole === 'student' && <Link to="/student">Student Portal</Link>}
                        <Link to={'/profile'}>Profile</Link>
                        <Link onClick={handleLogout} to={'/'}>Logout</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default TopHeader;
