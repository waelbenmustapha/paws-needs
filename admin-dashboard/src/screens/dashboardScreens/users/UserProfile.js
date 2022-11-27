import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../../../Context/AppContext";
import { ReactComponent as ArrowDownIcon } from "../../../assets/svg/ArrowDown.svg";
import blacklistImage from "../../../assets/images/warning.png";
import redeemImage from "../../../assets/images/redeem.png";
import Dropdown from "../../../components/Dropdown";
import Modal from "../../../components/Modal";
// import avatar from "../../../assets/images/avatar.png";

function UserProfile() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const context = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [showModalBlacklist, setShowModalBlacklist] = useState(false);
  const [showModalRedeem, setShowModalRedeem] = useState(false);

  return (
    <>
      <div className="w-full min-h-screen p-6 2lg:p-14 text-main-text">
        <p className="text-xs mb-2">
          <Link to={"/dashboard/users"}>Users</Link> &gt;{" "}
          <span>{state.name}</span>
        </p>
        <div className="flex flex-row w-full justify-between ">
          <div className="flex flex-nowrap justify-center content-center items-center gap-2 cursor-pointer p-1">
            <img
              className="rounded-full w-6 h-6 lg:w-8 lg:h-8"
              src={state.image}
              alt="user-profile"
            />
            <p className="flex flex-nowrap justify-center content-center items-center gap-2">
              <p className="font-bold text-tiny lg:text-2xl">
                {state.name}’s Profile
              </p>
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsOpen(true)}
              style={{
                border: `2px solid ${context.mainColor}`,
                backgroundColor: context.mainColor,
              }}
              className="flex flex-row flex-nowrap justify-center items-center rounded-[4px] h-[38px] w-[135px] px-4 py-2 ml-3 text-white font-bold text-center text-xs lg:text-tiny outline-none"
            >
              <span>New Action</span>
              <ArrowDownIcon
                style={{ color: "white" }}
                className="w-[10px] h-[8px] ml-1"
              />
            </button>
            <Dropdown
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              minWidth="135px"
              minHeight="50px"
              top="44px"
              right="0px"
              items={[
                <div
                  onClick={() => {
                    navigate("/dashboard/users-edit", { state: state });
                  }}
                >
                  Edit User Details
                </div>,
                <div
                  onClick={() => {
                    setIsOpen(false);
                    setShowModalBlacklist(true);
                  }}
                >
                  Blacklist User
                </div>,
                <div
                  onClick={() => {
                    setIsOpen(false);
                    setShowModalRedeem(true);
                  }}
                >
                  Reedem Points
                </div>,
              ]}
            />
            <Modal
              isBlacklist={true}
              showModal={showModalBlacklist}
              setShowModal={setShowModalBlacklist}
              image={blacklistImage}
              title={"Blacklisting User"}
              subtitle={
                <span>
                  Are you sure you want to blacklist{" "}
                  <span className="text-warning">Mohammed Ahmed</span>?
                </span>
              }
              description={`Blacklisting user will prevent them from accessing their accounts and participating in any future activities, however their data will be saved in the system.`}
            />
            <Modal
              isBlacklist={false}
              showModal={showModalRedeem}
              setShowModal={setShowModalRedeem}
              image={redeemImage}
              title={"Redeem User Points"}
              subtitle={
                <span>
                  You are about to redeem{" "}
                  <span className="text-green">1000pt</span> for Mohammed Ahmed
                </span>
              }
              description={`Redeeming the points will bring Mohammed one step closer to their next reward. The redeemded points will not affect the total points earned by Mohammed.`}
            />
          </div>
        </div>
        <div className="flex flex-row mt-[10px] gap-[8px] ml-[40px]">
          <div className="h-6 w-6 rounded-full bg-primary-one" />
          <div className="h-6 w-6 rounded-full bg-primary-four" />
          <div className="h-6 w-6 rounded-full bg-primary-three" />
          <div className="h-6 w-6 rounded-full bg-primary-two" />
          <div className="h-6 w-6 rounded-full bg-[#A52C38]" />
          <div className="h-6 w-6 rounded-full bg-[#91B9B4]" />
          <div className="h-6 w-6 rounded-full bg-[#FAC39B]" />
          <div className="h-6 w-6 rounded-full bg-[#9BC368]" />
          <div className="h-6 w-6 rounded-full bg-[#FFCA8C]" />
          <div className="h-6 w-6 rounded-full bg-[#F7BDB1]" />
          <div className="h-6 w-6 rounded-full bg-[#87949B]" />
          <div className="h-6 w-6 rounded-full bg-[#B78CA2]" />
        </div>
        <div className="w-full h-[1px] mb-9 mt-9 border-devider-color border-b-1"></div>
        <div className="flex flex-row gap-[30px]">
          <div className="flex flex-col justify-center text-[16px] font-bold p-[28px] h-[112px] bg-[#C8DCDA] rounded-[8px] ">
            <p className="text-[#EB5A3C]">5000</p>
            <p> Points Earned</p>
          </div>
          <div className="flex flex-col justify-center text-[16px] font-bold p-[28px] h-[112px] bg-[#F5AD9E] rounded-[8px] ">
            <p className="text-[#fff]">24</p>
            <p> Badges Earned</p>
          </div>
          <div className="flex flex-col justify-center text-[16px] font-bold p-[28px] h-[112px] bg-[#FFCA8C] rounded-[8px] ">
            <p className="text-[#EB5A3C]">5</p>
            <p> Rewards Earned</p>
          </div>
          <div className="flex flex-col justify-center text-[16px] font-bold p-[28px] h-[112px] bg-[#B78CA2] rounded-[8px] ">
            <p className="text-[#fff]">500</p>
            <p> Unredeemed Points</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
