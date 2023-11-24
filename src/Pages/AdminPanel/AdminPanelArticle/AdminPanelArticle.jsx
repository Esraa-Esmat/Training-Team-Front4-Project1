import React from 'react'
import AdminSectionsSearchBar from '../../../Components/AdminPanal/AdminGlobal/AdminSectionsSearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { LiaTrashAlt } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { deletearticle, toggleArticleStatus } from '../../../Redux/Reducers/AdminSlice';
import { AdminSideBarData } from '../../../Components/AdminPanal/AdminGlobal/SideBar/AdminSideBarData';

const AdminPanelArticle = () => {
    const selectedContent = useSelector((state) => state.AdminSlice.selectedContent);
    const titleSideBar = useSelector((state) => state.AdminSlice.titleSideBar)
    const articles = useSelector((state) => state.AdminSlice.articles);
    const dispatch = useDispatch();


    const filteredArticles = articles.filter((article) => {
        const matchingContent = AdminSideBarData.find(section => section.title === 'Articles')?.content;
        if (matchingContent) {
            if (selectedContent && matchingContent.includes(selectedContent)) {
                switch (selectedContent) {
                    case 'Published Articles':
                        return article.status === 'Published';
                    case 'Scheduled Articles':
                        return article.status === 'Scheduled';
                    case 'Saved Drafts':
                        return article.status === 'Draft';
                    default:
                        break;
                }}
        }
        return true;
    });



    const handelDeleteArticle = (index) => {
        dispatch(deletearticle(index));
    };

    const handleToggleStatus = (index) => {
        dispatch(toggleArticleStatus({ index }));
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
                    <div className="col-6 col-lg-4">Title</div>
                    <div className="col-6 col-lg-2">Cateory</div>
                    <div className="col-6 col-lg-3">Status</div>
                    <div className="col-6 col-lg-2">Date & Time</div>
                    <div className="col-6 col-lg-1"></div>
                </div>
                {filteredArticles &&
                    filteredArticles.map((article, i) => (
                        <div key={i} className="row bg-black bg-opacity-25 align-items-center rounded p-4">
                            <div className="col-6 col-lg-4">
                                <h6 className="mb-0">{article?.title}</h6>
                            </div>
                            <div className="col-6 col-lg-2">{article?.category}</div>
                            <div className="col-6 col-lg-3 ">
                                <button
                                    className={`badge rounded-pill fs-6 py-2 px-4 ${article.status === 'Published' ? 'bg_primary border_primary' : 'bg_gray border_gray'}`}
                                    onClick={() => handleToggleStatus(i)}
                                >
                                    {article.status}
                                </button>
                            </div>
                            <div className="col-6 col-lg-2">
                                <h6>{`${article?.postedDay},  ${article?.date}`}</h6>
                                <h6>{article?.time}</h6>
                            </div>

                            <div className="col-6 col-lg-1 d-flex align-items-center gap-2 text_primary">
                                <Link className="text_primary clickable active-scale" to='/adminpanel/adminupdatearticle'>
                                    <i className="fa-regular fa-pen-to-square fa-xl" />
                                </Link>

                                <div className="clickable active-scale" onClick={() => handelDeleteArticle(i)}>
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

export default AdminPanelArticle