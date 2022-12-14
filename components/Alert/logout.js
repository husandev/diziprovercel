import SweetAlert from "react-bootstrap-sweetalert";
import axios from '../../axios'
import router from "next/router";
import { useState } from "react";
const LogOut = (props) => {
  const [isLoading, setIsLoading] =useState(false)
    const LogoutUser = (e, el) =>{
      setIsLoading(true)
      if( isLoading == false){
        axios.post(`/api/users/logout`, {}, {
          headers: { 
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
        }).then(res => {
          localStorage.removeItem('token');
          router.push('/https://diziproedu.uz/login')
            console.log(res);
            props.close()
            setIsLoading(false)
        }).catch(err => {
            console.log(err);
            props.close()
            setIsLoading(false)
          })
      }
        }
  return (
    <>
      <SweetAlert
        className="log-out"
        show={props.showLogoutModal}
        title=""
        onConfirm={()=> {}}
        style={{
          width: "400px",
          height: "192px",
          background: "#FFFFFF",
          padding: "32px 40px",
          borderRadius: "4px",
        }}
        confirmBtnStyle={{ display: "none" }}
        confirmBtnText="Ha, chiqish"
        onCancel={props.close}
        // cancelBtnText="Ortga qaytish"
      >
        <div className="">
          <h3 className="log-out__title">
            Siz rostan ham akkauntdan chiqishni xohlaysizmi?
          </h3>

          <div className="log-out__btns-wrapper">
            <button
              className="log-out__cancel-btn"
              onClick={props.close}
            >
              Ortga qaytish
            </button>

            <button
              className={
                isLoading
                  ? "btn log-out__submit-btn  btn--responding "
                  : "log-out__submit-btn"
              }
              disabled={props.isLogout}
              onClick={()=>{LogoutUser()}}
            >
              {/* btn--responding btn:disabled */}
              <span className="btn__txt">Ha, chiqish</span>
              <svg
                className="btn__anime"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M19.2469 12.6654C19.6991 12.8032 19.9575 13.2833 19.7815 13.7221C19.1039 15.4117 17.9756 16.8898 16.5123 17.9908C14.8203 19.2638 12.7678 19.967 10.6506 19.9989C8.53343 20.0308 6.46074 19.3898 4.73115 18.1683C3.00157 16.9467 1.70436 15.2077 1.02641 13.2017C0.348459 11.1957 0.324757 9.02634 0.958717 7.00602C1.59268 4.9857 2.85157 3.21876 4.55406 1.95974C6.25654 0.700716 8.31473 0.0146004 10.4321 0.000230285C12.2633 -0.0121972 14.057 0.478335 15.6206 1.41051C16.0267 1.65259 16.1126 2.19098 15.8367 2.57487C15.5608 2.95876 15.0277 3.04197 14.6174 2.80711C13.3517 2.08254 11.9123 1.70222 10.4438 1.71219C8.68885 1.7241 6.98302 2.29275 5.572 3.33623C4.16098 4.37971 3.11761 5.84415 2.59218 7.51859C2.06676 9.19303 2.0864 10.991 2.64829 12.6536C3.21017 14.3162 4.2853 15.7575 5.71878 16.7698C7.15226 17.7822 8.87011 18.3135 10.6248 18.2871C12.3796 18.2606 14.0807 17.6779 15.483 16.6227C16.6565 15.7398 17.5701 14.5643 18.1368 13.2204C18.3205 12.7848 18.7947 12.5276 19.2469 12.6654Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </SweetAlert>
    </>
  );
};
export default LogOut;
