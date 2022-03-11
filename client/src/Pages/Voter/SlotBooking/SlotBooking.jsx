import React from "react";
import * as Routes from "../../../Routes";
import { getAxios } from "../../../Helpers/axios";
import { toast } from "react-toastify";

import "./SlotBooking.css";
import Slot from "./Slot";

const SlotBooking = () => {
  const [slots, setSlots] = React.useState([]);
  const [selectedSlot, setSelectedSlot] = React.useState();

  React.useEffect(() => {
    async function getCampaigns() {
      try {
        let axiosJWT = getAxios();
        await axiosJWT
          .get(`/slots`)
          .then((response) => {
            // console.log(response);
            if (response.data.status) {
              // toast.success(response.data.message);
              setSlots(response.data.data.slots);
              // response.data.data.slots.forEach(slot => {
              //   slot.bookedBy.forEach((voter)=>{
              //     if(voter === )
              //   })
              // });
            } else {
              toast.error(response.data.message);
            }
          })
          .catch((error) => {
            console.log(error.response);
            toast.error(error.response.data.message);
          });
      } catch (e) {
        console.log(e);
        toast.error("Faild to fetch slots, please try again");
      }
    }
    getCampaigns();
  }, []);

  const bookSlot = async () => {
    if (selectedSlot) {
      try {
        let axiosJWT = getAxios();
        let body = {
          slotId: selectedSlot,
        };

        await axiosJWT
          .post(`/voter/bookSlot`, body)
          .then((response) => {
            // console.log(response);
            if (response.data.status) {
              toast.success(response.data.message);
            } else {
              toast.error(response.data.message);
            }
          })
          .catch((error) => {
            console.log(error.response);
            toast.error(error.response.data.message);
          });
      } catch (e) {
        console.log(e);
        toast.error("Faild to update, please try again");
      }
    } else {
      toast.warn("Please Select a Slot");
    }
  };

  return (
    <>
      <main className="slotBookingPage">
        <h4 className="pageTitle mb-1">Slot Booking</h4>
        <p className="pageSubTitle">
          Choose among the following slots to avoid crowd
        </p>

        <div className="slots mt-3 mt-md-5 mx-md-5">
          {slots.length &&
            slots.map((slot) => {
              return (
                <Slot
                  slot={slot}
                  selectedSlot={selectedSlot}
                  setSelectedSlot={setSelectedSlot}
                />
              );
            })}
        </div>

        <div className="text-center mt-5">
          <button className="btn bookSlotBtn" onClick={bookSlot}>
            Book This Slot
          </button>
        </div>
      </main>
    </>
  );
};

export default SlotBooking;
