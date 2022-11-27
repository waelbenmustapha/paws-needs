import React from 'react'
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useOnClickOutside } from '../../hooks';
import SearchActivities from './SearchActivities';
import SearchBadges from './SearchBadges'
import SearchRewards from './SearchRewards';
import SearchUsers from './SearchUsers';

function MainSearchComponent({ keyword,showSearch,setShowSearch }) {
    const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setShowSearch(false));
    const location = useLocation();
    if (keyword.length > 0&&showSearch) {
        return (
            <div
            ref={wrapperRef}
                className="absolute maxPhone:w-full w-[800px] max-h-[400px]  overflow-y-scroll shadow-dark-2 rounded-[4px] bg-white p-[10px] z-[10] left-[0px] scrollNavbar" style={{
                    top: "calc(100% )"
                }}>

                {location.pathname === "/dashboard/badges" ? <SearchBadges  header={false} keyword={keyword} /> :
                    location.pathname === "/dashboard/users" ? <SearchUsers header={false} keyword={keyword} /> :
                        location.pathname === "/dashboard/rewards" ? <SearchRewards header={false} keyword={keyword} /> :
                            location.pathname === "/dashboard/activities" ? <SearchActivities header={false} keyword={keyword} /> :
                            location.pathname === "/dashboard/home" || location.pathname === "/dashboard"|| location.pathname === "/dashboard/" ?
                                    <><SearchBadges setShowSearch={setShowSearch} header={true}
                                        limit={4} keyword={keyword} />
                                        <SearchActivities setShowSearch={setShowSearch} header={true} limit={4} keyword={keyword} />
                                        <SearchRewards setShowSearch={setShowSearch} header={true} limit={4} keyword={keyword} />
                                        <SearchUsers setShowSearch={setShowSearch} limit={4} header={true} keyword={keyword} />
                                    </> : null
                }


            </div>)
    }
}

export default MainSearchComponent