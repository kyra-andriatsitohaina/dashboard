import React from 'react';
import LikeIcon from '../Icons/LikeIcon';
import LoveIcon from '../Icons/LoveIcon';
import EllipsisIcon from '../Icons/EllipsisIcon';

const Posts : React.FC = () => {
    return (
        <div className="posts-container">
            <div className="post">
                <div className="more">
                    <div className="rate">
                        <button><span>100</span><LikeIcon/></button>
                        <button><span>25</span><LoveIcon/></button>
                    </div>
                    <button><EllipsisIcon/></button>
                </div>
                <video src="/worlds shortest UIUX design course.mp4" poster='/img/66cef8ffaafac3f5ea29b8c6_6662db36f1205e54a476f27e_Appledesign.webp' controls></video>
            </div>
            <div className="post">
                <div className="more">
                    <div className="rate">
                        <button><span>100</span><LikeIcon/></button>
                        <button><span>25</span><LoveIcon/></button>
                    </div>
                    <button><EllipsisIcon/></button>
                </div>
                <video src="/worlds shortest UIUX design course.mp4" poster='/img/g3JeyNK2QoJaa2fF93h82aBgaU.avif' controls></video>
            </div>
            <div className="post">
                <div className="more">
                    <div className="rate">
                        <button><span>100</span><LikeIcon/></button>
                        <button><span>25</span><LoveIcon/></button>
                    </div>
                    <button><EllipsisIcon/></button>
                </div>
                <video src="/worlds shortest UIUX design course.mp4" poster='/img/ui-design-header-768x492.png' controls></video>
            </div>
            <div className="post">
                <div className="more">
                    <div className="rate">
                        <button><span>100</span><LikeIcon/></button>
                        <button><span>25</span><LoveIcon/></button>
                    </div>
                    <button><EllipsisIcon/></button>
                </div>
                <video src="/worlds shortest UIUX design course.mp4" poster='/img/UI+vs+UX+Design+Cover+Image.webp' controls></video>
            </div>
        </div>
    );
};

export default Posts;